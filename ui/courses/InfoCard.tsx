import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { CourseProps } from "../../domain/types";

const InfoCard: React.FC<CourseProps> = (props) => {
  return (
    <Link
      data-testid="element-link"
      href={{ pathname: "/course", query: { id: props.id } }}
    >
      <div className="flex flex-col lg:flex-row py-4 lg:py-7 px-4 gap-10 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t last:border-t-0 dark:bg-blue-950 dark:border-gray-800 dark:hover:opacity-95">
        <div className="relative w-[375px] h-[190px] lg:w-[380px] lg:h-[220px] md:w-full md:h-[300px] flex-shrink-0 self-center">
          <Image
            src={`${props.previewImageLink}/cover.webp`}
            alt="Course preview image"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col flex-grow pl-5">
          <div className="flex justify-between">
            <p className="text-xl font-semibold dark:text-white">
              {props.title}
            </p>
            <HeartIcon
              data-testid="heart-icon"
              className="h-7 cursor-pointer dark:text-white"
            />
          </div>
          <h4 className="text-black/60 font-semibold dark:text-white">
            {props.description}
          </h4>
          <div className="border-b w-10 pt-2" />
          <p className="pt-2 text-sm text-red-400 dark:text-purple-accent">
            Number of lessons: {props.lessonsCount}
          </p>
          <div className="flex-grow">
            {[props.meta.skills]?.map((item) =>
              item?.map((value, index) => (
                <p
                  key={`skill-${index}`}
                  className="text-black/70 dark:text-white"
                  data-testid="skill"
                >
                  {value}
                </p>
              ))
            )}
          </div>
          <div className="flex items-end pt-5">
            <p className="flex items-center dark:text-white">
              <StarIcon
                data-testid="star-icon"
                className="h-5 text-red-400 dark:text-purple-accent"
              />
              {props.rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InfoCard;
