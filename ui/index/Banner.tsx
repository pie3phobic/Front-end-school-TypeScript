import React from "react";
function Banner() {
  return (
    <div className="m-10 flex justify-center align-center flex-col">
      <div className="bg-gray-100 dark:bg-gray-950 p-6 md:p-10 lg:p-16 rounded-3xl flex flex-col align-center">
        <img
          src="student-cr.jpg"
          alt="Image of student listening to an online course"
          width="700px"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}
export default Banner;
