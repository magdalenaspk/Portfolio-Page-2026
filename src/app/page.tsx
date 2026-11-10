import { Hero } from "@/components/sections/Hero";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { Workshops } from "@/components/sections/Workshops";
import { AdditionalWork } from "@/components/sections/AdditionalWork";
import { WorkLock } from "@/components/lock/WorkLock";

// Reads the access cookie, so render per request.
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkLock
        returnTo="/#selected-projects"
        preview={
          <>
            <SelectedProjects />
            <AdditionalWork preview />
            <Workshops />
          </>
        }
      >
        <SelectedProjects />
        <AdditionalWork />
        <Workshops />
      </WorkLock>
    </>
  );
}
