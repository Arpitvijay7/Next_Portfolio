"Use client";

import Link from "next/link";
import { Button } from "./ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// components
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/CasecobraImg.png",
    category: "Next js",
    name: "CaseCobra",
    description:
      "A Modern E-Commerce-Store for Custom Phone Cases with your own personal touch.",
    link: "https://casecobra2-nine.vercel.app",
    github: "https://github.com/Arpitvijay7/casecobra",
  },
  {
    image: "/work/ZoomCloneImg.png",
    category: "Next js",
    name: "Yoom",
    description:
      "A Modern Video and audio conferencing Application with low letency",
    link: "https://yoom-opal.vercel.app",
    github: "https://github.com/Arpitvijay7/Yoom",
  },
  {
    image: "/work/DiscordClone2.jpg",
    category: "Full Stack",
    name: "Communiq",
    description:
      "A Modern server making application for communities like discord",
    link: "https://communiq.vercel.app",
    github: "https://github.com/Arpitvijay7/Communiq",
  },
  {
    image: "/work/Cufoodz.png",
    category: "Business",
    name: "Cufoodz.com",
    description:
      "A food delivery [Website/PWA] for students of Chandigarh University within hostel facilities.  -Note:- Diffrent UI for mobile version (Must visit in mobile aspect ratio)",
    link: "https://cufoodz.com/",
    github: "https://github.com/Arpitvijay7/CU_FOODS_Front-End",
  },

];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto md:grid md:grid-cols-2">
        {/* text */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center
        xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center
        xl:items-start items-center"
        >
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>

        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Carousel
            opts={{
              align: "start",
            }}
            className="h-[480px]"
          >
            <CarouselContent
            >
              {projectData.slice(0, 4).map((project, index) => {
                return (
                  <CarouselItem
                    className="md:basis-1/2 lg:basis-1/3"
                    key={index}
                  >
                    <ProjectCard project={project} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            {/* <CarouselNext /> */}

          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Work;
