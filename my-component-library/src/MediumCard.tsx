import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";

interface MediumCardProps {
  src: string;
  alt: string;
  text: string;
}

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

interface InfoCardProps {
  description: string;
  id: string;
  lessonsCount: number;
  meta: {
    skills?: string[][];
  };
  previewImageLink: string;
  rating: number;
  title: string;
  path: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  description,
  id,
  lessonsCount,
  meta,
  previewImageLink,
  rating,
  title,
  path,
}) => {
  return (
    <Link href={{ pathname: path, query: { id } }}>
      <div className="flex flex-col lg:flex-row py-4 lg:py-7 px-4 gap-10 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t last:border-t-0 dark:bg-blue-950 dark:border-gray-800 dark:hover:opacity-95">
        <div className="relative w-[380px] h-[190px] lg:w-[380px] lg:h-[220px] md:w-full md:h-[300px] flex-shrink-0 self-center">
          <Image
            src={`${previewImageLink}/cover.webp`}
            alt="Course preview image"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col flex-grow pl-5">
          <div className="flex justify-between">
            <p className="text-xl font-semibold dark:text-white">{title}</p>
            <HeartIcon
              data-testid="heart-icon"
              className="h-7 cursor-pointer dark:text-white"
            />
          </div>
          <h4 className="text-black/60 font-semibold dark:text-white">
            {description}
          </h4>
          <div className="border-b w-10 pt-2" />
          <p className="pt-2 text-sm text-red-400 dark:text-purple-accent">
            Number of lessons: {lessonsCount}
          </p>
          <div className="flex-grow">
            {[meta.skills]?.map((item) =>
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
              {rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

interface PaginationProps {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div data-testid="pagination" className="dark:bg-blue-950">
      <ul className="flex justify-center align-middle list-none">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? "flex justify-center items-center w-[33px] h-[33px] border border-opacity-80 rounded-xl cursor-pointer bg-red-400 dark:bg-purple-accent dark:border-gray-800 dark:text-white"
                : "flex justify-center cursor-pointer items-center w-[33px] h-[33px] border border-opacity-80 rounded-xl dark:text-white dark:border-gray-800"
            }
          >
            <a onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { MediumCard, InfoCard, Pagination };
