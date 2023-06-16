import React from "react";

type MediumCardProps = {
  src: string;
  alt: string;
  text: string;
};

const MediumCard: React.FC<MediumCardProps> = ({ src, alt, text }) => {
  return (
    <div className="bg-gray-200/80 p-8 pb-14 rounded-3xl hover:scale-105 transform transition duration-200 ease-out flex flex-col justify-center align-middle dark:bg-gray-950">
      <img
        src={src}
        alt={alt}
        className="rounded-3xl sm:w-[300px] md:w-[300px]"
      />
      <p className="font-semibold text-lg pt-4 dark:text-white">{text}</p>
    </div>
  );
};

export default MediumCard;
