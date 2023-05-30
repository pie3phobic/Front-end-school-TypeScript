import Head from "next/head";
import Banner from "../ui/index/Banner";
import Footer from "../ui/common/Footer";
import Header from "../ui/common/Header";
import Sidebar from "../ui/index/Sidebar";
import { MediumCard } from "minty-ui-library";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="dark:bg-blue-950">
      <Head>
        <title>My Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex">
        <Sidebar />
        <div className="max-w-7xl mx-auto overflow-y-auto">
          <Banner data-testid="banner" />
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <a className=" text-3xl lg:text-5xl font-semibold dark:text-white">
          Improve{" "}
          <span className="text-red-400 dark:text-purple-accent">
            your skills faster
          </span>
        </a>
        <div className="flex justify-center align-middle pt-8">
          <img
            src="study-img.png"
            alt="Online course image"
            className=" w-[400px] md:w-[700px] rounded-3xl"
          />
        </div>
        <a className="pt-4 text-3xl lg:text-5xl font-semibold absolute lg:right-[100px] dark:text-white">
          Study with{" "}
          <span className="text-red-400 dark:text-purple-accent">
            your own schedule
          </span>
        </a>
        <div className="flex justify-center pt-24 align-middle">
          <img
            src="stud2-img.png"
            alt="Image of a person studying online"
            className="w-[400px] md:w-[700px] rounded-3xl"
          />
        </div>
        <div className="flex justify-center pt-10">
          <Link href={{ pathname: "/courses" }}>
            <button className="bg-red-400 rounded-full text-white font-semibold px-6 py-2  text-2xl md:text-4xl shadow-md hover:shadow-lg active:scale-105 transform transition duration-200 ease-out dark:bg-purple-accent dark:hover:bg-purple-accent/80">
              Go To Courses
            </button>
          </Link>
        </div>
        <div className="w-[300px] mx-auto lg:w-full">
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-20 pb-14"
            data-testid="medium-cards-container"
          >
            <MediumCard
              src="pic-11.png"
              alt="Qualified lecturer image"
              text="Qualified lecturers"
            />
            <MediumCard
              src="pic-12.png"
              alt="Technical support image"
              text="Technical support 24/7"
            />
            <MediumCard
              src="pic-13.png"
              alt="Challenges image"
              text="Challenges"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}