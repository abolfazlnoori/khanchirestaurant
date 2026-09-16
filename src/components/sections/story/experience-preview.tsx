export function ExperiencePreview() {
  return (
    <>
      <div id="experience" className="video-placeholder mx-auto mt-[92px] aspect-[3.2] w-[min(1248px,calc(100%-64px))] overflow-hidden border border-[#214b34] max-[900px]:mt-[34px] max-[900px]:aspect-[1.66] max-[900px]:w-[calc(100%-48px)] max-[420px]:w-[calc(100%-44px)]" role="img" aria-label="جایگاه ویدیوی معرفی رستوران؛ ویدیو به‌زودی اضافه می‌شود">
        <div className="video-placeholder__frame" aria-hidden="true" />
        <span className="video-placeholder__play" aria-hidden="true" />
      </div>
      <div className="mx-auto mt-3.5 flex w-[min(1248px,calc(100%-64px))] justify-between text-xs text-[#6d726d] [direction:ltr] max-[900px]:mt-2.5 max-[900px]:w-[calc(100%-48px)] max-[900px]:text-[10px] max-[420px]:w-[calc(100%-44px)] [&>span:first-child]:max-[900px]:hidden [&>span:last-child]:max-[900px]:ml-auto">
        <span lang="en">THE ART OF PERSIAN HOSPITALITY</span>
        <span>اصالت در طعم، ظرافت در میزبانی</span>
      </div>
    </>
  );
}
