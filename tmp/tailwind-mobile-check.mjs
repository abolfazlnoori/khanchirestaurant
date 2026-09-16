import { writeFile } from "node:fs/promises";

const targets = await fetch("http://127.0.0.1:9226/json/list").then((response) => response.json());
const target = targets.find((item) => item.type === "page");
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let id = 0;
const pending = new Map();
socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (!pending.has(message.id)) return;
  const task = pending.get(message.id);
  pending.delete(message.id);
  message.error ? task.reject(message.error) : task.resolve(message.result);
});
const send = (method, params = {}) => {
  const requestId = ++id;
  socket.send(JSON.stringify({ id: requestId, method, params }));
  return new Promise((resolve, reject) => pending.set(requestId, { resolve, reject }));
};

await send("Page.enable");
await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true, screenWidth: 390, screenHeight: 844 });
await send("Page.navigate", { url: "http://127.0.0.1:3000" });
await new Promise((resolve) => setTimeout(resolve, 1800));
await send("Runtime.evaluate", { expression: `(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=600){scrollTo(0,y);await new Promise(r=>setTimeout(r,70))}scrollTo(0,0)})()`, awaitPromise: true });
const metrics = await send("Runtime.evaluate", { expression: `({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight,tiles:document.querySelectorAll('.mosaic>*').length,logoX:Math.round(document.querySelector('header a').getBoundingClientRect().x)})`, returnByValue: true });
const height = metrics.result.value.height;
const screenshot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true, clip: { x: 0, y: 0, width: 390, height, scale: 1 } });
await writeFile("tmp/tailwind-mobile.png", Buffer.from(screenshot.data, "base64"));
console.log(JSON.stringify(metrics.result.value));
socket.close();
