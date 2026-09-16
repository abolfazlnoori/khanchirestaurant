import { footerInfoItems, type FooterLink } from "./footer.data";

function FooterInfoLine({ line }: { line: FooterLink }) {
  if (!line.href) {
    return <p className="m-0 text-sm">{line.label}</p>;
  }

  return (
    <a
      className={`block text-sm${line.className ? ` ${line.className}` : ""}`}
      href={line.href}
      {...(line.external ? { rel: "noreferrer", target: "_blank", lang: "en" } : {})}
    >
      {line.label}
    </a>
  );
}

export function FooterContactGrid() {
  return (
    <div className="grid grid-cols-4 border-y border-line px-[max(6vw,48px)] py-[30px] max-[900px]:grid-cols-1 max-[900px]:px-6 max-[900px]:py-3">
      {footerInfoItems.map((item, index) => (
        <div
          className={`min-h-[78px] px-9 max-[900px]:min-h-0 max-[900px]:px-0 max-[900px]:py-[19px]${index === 0 ? "" : " border-r border-line max-[900px]:border-r-0 max-[900px]:border-t"}`}
          key={item.title}
        >
          <h3 className="mb-2 text-sm font-semibold text-gold max-[900px]:text-base">{item.title}</h3>
          {item.lines.map((line) => <FooterInfoLine key={line.label} line={line} />)}
        </div>
      ))}
    </div>
  );
}
