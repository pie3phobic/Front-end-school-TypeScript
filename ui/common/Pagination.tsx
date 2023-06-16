import React from "react";
import styles from "../../styles/Home.module.css";
import { PaginationProps } from "../../domain/types";

const Pagination: React.FC<PaginationProps> = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount: number = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;
  const pages: number[] = Array.from({ length: pagesCount }, (_, i) => i + 1);

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

export default Pagination;
