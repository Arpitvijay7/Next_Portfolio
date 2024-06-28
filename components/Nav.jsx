// Link (next js)
import Link from "next/link";

//next hooks
import { usePathname } from "next/navigation";

//framer motion
import { motion } from "framer-motion";


const links = [
  { path: "/", label: "home" },
  { path: "/projects", label: "my projects" },
  { path: "/contact", label: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {link.label}

            {link.path === path && (
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                LayoutId=" underline"
                className={`${underlineStyles}`}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
