export type CourseProps = {
  description: string;
  id: string;
  lessonsCount: number;
  meta: CourseMeta;
  previewImageLink: string;
  rating: number;
  title: string;
};

export type CourseMeta = {
  slug: string;
  skills: string[];
  courseVideoPreview: {
    link: string;
    duration: number;
    previewImageLink: string;
  };
};
export type PaginationProps = {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};
export type TokenProps = string;
export type DataProps = {
  data: {
    courses: CourseProps[];
  };
};
export type CourseDataProps = {
  id: string;
  title: string;
  tags: string[];
  launchDate: string;
  status: string;
  description: string;
  previewImageLink: string;
  rating: number;
  meta: CourseDataMeta;
  lessons: LessonProps[];
};

export type LessonProps = {
  id: string;
  title: string;
  duration: number;
  order: number;
  status: string;
  link: string;
  previewImageLink: string;
};

export type CourseDataMeta = {
  slug: string;
  skills: string[];
  courseVideoPreview: {
    link: string;
    duration: number;
  };
};
export type PropsDataCourse = {
  data: CourseDataProps;
};
