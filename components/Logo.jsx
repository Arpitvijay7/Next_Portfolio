import React from "react";

import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo1.svg"
        alt="logo"
        width={70}
        height={70}
        style={{
          borderRadius: "20px 10px 30px 5px", // Adjust values as per your preference
        }}
        priority
       
      />
    </Link>
  );
};

export default Logo;
