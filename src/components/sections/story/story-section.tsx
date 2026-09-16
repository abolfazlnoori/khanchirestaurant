import { ExperiencePreview } from "./experience-preview";
import { StoryIntro } from "./story-intro";

export function StorySection() {
  return (
    <section id="story" className="bg-mist pt-[140px] pb-5 max-[900px]:pt-16 max-[900px]:pb-6" aria-labelledby="story-title">
      <StoryIntro />
      <ExperiencePreview />
    </section>
  );
}
