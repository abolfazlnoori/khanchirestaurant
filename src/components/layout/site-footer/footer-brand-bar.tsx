export function FooterBrandBar() {
  return (
    <div className="grid min-h-[63px] grid-cols-3 items-center px-[max(6vw,48px)] text-xs max-[900px]:min-h-[100px] max-[900px]:grid-cols-1 max-[900px]:gap-1 max-[900px]:px-6 max-[900px]:py-3 max-[420px]:min-h-[102px]">
      <p className="m-0 max-[900px]:hidden">خانچی</p>
      <p className="m-0 justify-self-center font-serif text-[9px] tracking-[0.06em] text-gold max-[900px]:justify-self-start" lang="en">AUTHENTIC PERSIAN CUISINE</p>
      <p className="m-0 justify-self-end font-serif text-lg [direction:ltr] max-[900px]:hidden" lang="en">KH</p>
    </div>
  );
}
