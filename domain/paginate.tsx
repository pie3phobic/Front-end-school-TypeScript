import { CourseProps } from "./types";
export const paginate = (
  items: CourseProps[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex: number = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};
