"use client";
import React, { useState } from "react";

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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
    image: "/work/Magma.png",
    category: "Animations",
    name: "Magma",
    description:
      "A Modern Lading Page with animations with Gasp,locomotive and canvas",
    link: "https://magma-gray.vercel.app",
    github: "https://github.com/Arpitvijay7/Magma",
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
    image: "/work/BrumbleChatImg.png",
    category: "Full Stack",
    name: "Bruble Chat App",
    description: "A Modern Chat application which all media sharing features",
    link: "https://bruble-chat.vercel.app/",
    github: "https://github.com/Arpitvijay7/bruble",
  },
  {
    image: "/work/ZoomCloneImg.png",
    category: "Next js",
    name: "Yoom",
    description: "A Modern Video and audio conferencing Application ",
    link: "https://yoom-opal.vercel.app",
    github: "https://github.com/Arpitvijay7/Yoom",
  },
  {
    image: "/work/Sundown.png",
    category: "Animations",
    name: "Sundown",
    description:
      "A Mpdern Lading Page with animations with Gasp,locomotive and swiper js.",
    link: "https://sundown-iota.vercel.app/",
    github: "https://github.com/Arpitvijay7/Sundown",
  },
  {
    image: "/work/Zelt.png",
    category: "Animations",
    name: "Zelt",
    description: "A Modern Lading Page with animations with Gasp,locomotive.",
    link: "https://zelt-neon.vercel.app",
    github: "https://github.com/Arpitvijay7/Zelt",
  },
  {
    image: "/work/Cufoodz.png",
    category: "Business",
    name: "Cufoodz.com",
    description:
      "A food delivery [Website/PWA] for students of Chandigarh University within hostel facilities.  Note:- Diffrent UI for mobile version (Must visit in mobile aspect ratio)",
    link: "https://cufoodz.com/",
    github: "https://github.com/Arpitvijay7/CU_FOODS_Front-End",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    //  if category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
