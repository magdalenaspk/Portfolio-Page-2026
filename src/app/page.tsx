import { Hero } from "@/components/sections/Hero";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { Workshops } from "@/components/sections/Workshops";
import { AdditionalWork } from "@/components/sections/AdditionalWork";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedProjects />
      <AdditionalWork />
      <Workshops />
    </>
  );
}
