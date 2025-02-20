import Link from "next/link";

import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//components
import DevImage from "./DevImage";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none ">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left ">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Arpit Vijay</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Seasoned in MERN stack with 3 years of expertise, I excel in
              crafting seamless web applications
            </p>
            {/* Button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <a href="/about/RESUME.pdf" download="Arpit_Resume.pdf">
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>

            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          {/* Image */}
          <div className="hidden xl:flex relative">
            {/* Badges 1*/}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years Of Experience"
            />
            {/* Badges 2 */}

            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={70}
              endCountText="+"
              badgeText="Finished Projects"
            />

            {/* Badges 3 */}

            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={90}
              endCountText="+"
              badgeText="Happy Clients"
            />
            <div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px]
            h-[500px] bg-no-repeat absolute -top-1 -right-2"
            ></div>
            <DevImage
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat
                relative bg-bottom overflow-hidden"
              imgSrc="/hero/NEW_HERO_IMAGE.png"
            />
          </div>
        </div>
        {/* Icons */}
        <div
          className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12
                     animate-bounce"
        >
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
