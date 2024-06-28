"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  // {
  //   path: "/",
  //   name: <RiYoutubeFill />,
  // },
  {
    path: "https://linkedin.com/in/arpit-vijay7",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Arpitvijay7",
    name: <RiGithubFill />,
  },
  // {
  //   path: "/",
  //   name: <RiFacebookFill />,
  // },
  {
    path: "https://www.instagram.com/vijayarpit2002/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
