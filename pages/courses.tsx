import React, { useState } from "react";
import Header from "../ui/common/Header";
import { paginate } from "../domain/paginate";
import ApiClient from "../infrastructure/api/fetchData";
import { CourseProps } from "../domain/types";
import { PaginationProps, DataProps } from "../domain/types";
import Pagination from "../ui/common/Pagination";
import InfoCard from "../ui/courses/InfoCard";
const Courses: React.FC<DataProps> = ({ data }) => {
  const coursesData: CourseProps[] = data.courses;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;

  const onPageChange: PaginationProps["onPageChange"] = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 20, behavior: "smooth" });
  };

  const paginatedPosts: CourseProps[] = paginate(
    coursesData,
    currentPage,
    pageSize
  );
  return (
    <div>
      <Header />
      <div className="flex flex-col">
        {paginatedPosts.map((post) => (
          <InfoCard key={post.id} {...post} />
        ))}
        <Pagination
          items={coursesData.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
          data-testid="page-numbers"
        />
      </div>
    </div>
  );
};

export default Courses;
export const getServerSideProps = async () => {
  const apiClient = await ApiClient.getInstance();
  const { data }: { data: DataProps } = await apiClient.fetchData();
  return { props: { data } };
};
