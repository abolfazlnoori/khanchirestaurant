import Image from "next/image";

export function HeroArtwork() {
  return (
    <div className="relative z-[3] aspect-square w-[min(540px,44vw)] translate-y-[82px] justify-self-center drop-shadow-[0_26px_20px_rgb(9_32_21/0.2)] max-[900px]:row-start-2 max-[900px]:mt-[-5px] max-[900px]:w-[min(356px,92vw)] max-[900px]:translate-y-0 max-[420px]:w-[92vw]">
      <p
        className="absolute top-0 left-[5%] z-[2] rotate-[-8deg]
          font-serif text-[10px] leading-[1.2] tracking-[0.05em] text-[#73776f]
          [direction:ltr]
          max-[900px]:top-[16%] max-[900px]:right-auto max-[900px]:left-[3%] max-[900px]:text-[8px]
          w-[105px] h-[105px] flex items-center justify-center text-center rounded-full
          bg-white/20 backdrop-blur-md
          border border-white/40
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          ring-1 ring-white/20"
        lang="en"
      >
        KHANCHI
        <br />
        RESTAURANT
      </p>
      <Image
        className="object-contain"
        src="/assets/images/9b805236df92fb6ed53b77b3728bb5f6fbb6dc1c.png"
        alt="چلوکباب ایرانی با برنج زعفرانی و گوجه کبابی"
        fill
        priority
        sizes="(max-width: 767px) 90vw, 48vw"
      />
    </div>
  );
}
