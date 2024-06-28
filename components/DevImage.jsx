import Image from "next/image";

const DevImage = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <div className="h-[100px] w-[100px] overflow-hidden">
        <Image
          src={imgSrc}
          fill
          priority
          alt=" "
          className="w-[100px] h-[100px] overflow:hidden"
        />
      </div>
    </div>
  );
};

export default DevImage;
