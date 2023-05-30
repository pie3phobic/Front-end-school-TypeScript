import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";

type LessonProps = {
  order: number;
  previewImageLink: string;
  status: string;
  title: string;
};

const LessonCard: React.FC<LessonProps> = ({
  order,
  previewImageLink,
  status,
  title,
}) => {
  return (
    <div>
      <div className="flex rounded-2xl bg-white h-20 md:h-28 w-[250px] md:w-[400px] my-2 mx-auto cursor-pointer items-center active:bg-red-400 dark:bg-gray-600 dark:active:bg-purple-accent">
        <img
          src={`${previewImageLink}/lesson-${order}.webp`}
          alt="Lesson preview image"
          className="hidden md:block rounded-2xl w-32 h-[75px] mx-4"
        />
        <p
          data-testid="lesson-order-title"
          className="flex-grow dark:text-white"
        >
          {order}. {title}
        </p>
        {status === "locked" && (
          <LockClosedIcon
            data-testid="lock-closed-icon"
            className="h-6 pr-10 text-red-400"
          />
        )}
      </div>
    </div>
  );
};

export default LessonCard;
