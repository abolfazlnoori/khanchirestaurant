import { footerInfoItems, type FooterLink } from "./footer.data";

function FooterInfoLine({ line }: { line: FooterLink }) {
  if (!line.href) {
    return <p className="m-0 text-sm max-[900px]:leading-[2]">{line.label}</p>;
  }

  return (
    <a
      className={`block text-sm transition-colors duration-200 hover:text-gold max-[900px]:leading-[2]${line.className ? ` ${line.className}` : ""}`}
      href={line.href}
      {...(line.external ? { rel: "noreferrer", target: "_blank", lang: "en" } : {})}
    >
      {line.label}
    </a>
  );
}

export function FooterContactGrid() {
  return (
    <address className="grid grid-cols-4 border-y border-line px-[max(6vw,48px)] py-[30px] not-italic max-[900px]:grid-cols-1 max-[900px]:px-6 max-[900px]:py-4">
      {footerInfoItems.map((item, index) => (
        <div
          data-motion="reveal"
          data-motion-delay={String(index * 45)}
          className={`min-h-19.5 px-9 py-4 max-[900px]:min-h-0 max-[900px]:px-1 max-[900px]:py-7${index === 0 ? "" : " border-r border-line max-[900px]:border-r-0 max-[900px]:border-t"}`}
          key={item.title}
        >
          <h3 className="mb-2 text-sm font-semibold text-gold max-[900px]:mb-3.5 max-[900px]:text-base">{item.title}</h3>
          <div className="max-[900px]:space-y-2">
            {item.lines.map((line) => <FooterInfoLine key={line.label} line={line} />)}
          </div>
        </div>
      ))}
    </address>
  );
}
