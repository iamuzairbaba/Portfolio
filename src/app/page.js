'use client';
import Head from "next/head";
import { BsMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/image";
import web1 from "../../public/web1.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import ogo from "../../public/ogo.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={darkMode ? 'dark' : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className=" min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">UZAIR BASHIR</h1>
            <ul className="flex items-center">
              <li>
                <BsMoonStarsFill className="cursor-pointer dark:text-white text-2xl" onClick={()=>setDarkMode(!darkMode)}/>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-700 font-medium md:text-6xl">
              Uzair Bashir
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Front End Developer</h3>
            <p className="text-md py-5 leading-7 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-200">
              Frontend developer by day, football fanatic by night (and also by
              day). Transforming ideas into interactive realities, with a
              passion for frontend development.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 md:gap-24">
            <AiFillTwitterCircle  className="hover:text-gray-400" href=""/>
            <AiFillLinkedin className="hover:text-gray-400" href="https://www.linkedin.com/in/uzxyrr/"/>
            <AiFillGithub  className="hover:text-gray-400" href="https://github.com/iamuzairbaba"/>
          </div>
          <div className="relative mt-14 mx-auto h-80 w-80 md:h-96 md:w-96 mb-6">
            <Image src={ogo} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="text-center">
            <h3 className="text-3xl py-2 dark:text-white">About My Work</h3>
            <p className="text-md py-2 leading-7 text-gray-800 dark:text-gray-200">
              <span className="text-teal-500">Frontend developer</span>{" "}
              specializing in building high-quality applications with
              JavaScript, <span className="text-teal-500">ReactJS</span>,
              MongoDB and more.
            </p>
            <p className="text-md py-2 leading-7 text-gray-800 dark:text-gray-200">
              Here are some <span className="text-teal-500">projects</span> I've
              worked on, highlighting my passion for building quality
              applications and demonstrating my proficiency in{" "}
              <span className="text-teal-500">ReactJS</span> and{" "}
              <span className="text-teal-500">integrating APIs</span>.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="dark:bg-gray-700 basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl flex flex-col justify-center items-center">
              <Image src={web1} className="w-[700px] lg:h-[400px]" />
              <h3 className="text-xl font-medium pt-8 pb-2 dark:text-white">GYM BOI</h3>
              <p className="text-gray-800 dark:text-gray-200">
                A responsive app made from GYM lover who can select their own
                schedule for themselves.
              </p>
              <div className="mt-5">
                <a
                  href="https://gymboi.netlify.app"
                  target="_blank"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/iamuzairbaba/GYM-Boi"
                  target="_blank"
                  className="bg-gradient-to-l from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="dark:bg-gray-700 basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl flex flex-col justify-center items-center">
              <Image src={web5} className="w-[700px] lg:h-[400px]" />
              <h3 className="text-xl font-medium pt-8 pb-2 dark:text-white">Weatherizz</h3>
              <p className="text-gray-800 dark:text-gray-200">
                A responsive weather app made using ReactJS and TailwindCSS
                using OpenWeatherAPI that shows the current weather and forecast
                hourly and Daily. It lets you search by City Name or by allowing
                location.
              </p>
              <div className="mt-5">
                <a
                  href="https://weatherizz.netlify.app/"
                  target="_blank"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/iamuzairbaba/Weather-App"
                  target="_blank"
                  className="bg-gradient-to-l from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="dark:bg-gray-700 basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl flex flex-col justify-center items-center">
              <Image src={web2} className="w-[700px] lg:h-[400px]" />
              <h3 className="text-xl font-medium pt-8 pb-2 dark:text-white">
                Deen School Website
              </h3>
              <p className="text-gray-800 dark:text-gray-200">
                A responsive landing page built using Figma design with ReactJS,
                CSS for a local NGO.
              </p>
              <div className="mt-5">
                <a
                  href="https://deenschool.netlify.app"
                  target="_blank"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/iamuzairbaba/Deen-School"
                  target="_blank"
                  className="bg-gradient-to-l from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="dark:bg-gray-700 basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl flex flex-col justify-center items-center">
              <Image src={web3} className="w-[700px] lg:h-[400px]" />
              <h3 className="text-xl font-medium pt-8 pb-2 dark:text-white">Gehna Jewellery</h3>
              <p className="text-gray-800 dark:text-gray-200">
                A responsive landing page built using Figma design with ReactJS,
                CSS for a Jewellery Shop.
              </p>
              <div className="mt-5">
                <a
                  href="https://gehnaajewellery.netlify.app"
                  target="_blank"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/iamuzairbaba/Gehna-Jewellery"
                  target="_blank"
                  className="bg-gradient-to-l from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="dark:bg-gray-700 basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl flex flex-col justify-center items-center">
              <Image src={web4} className="w-[700px] lg:h-[400px]" />
              <h3 className="text-xl font-medium pt-8 pb-2 dark:text-white">RIZZIPY</h3>
              <p className="text-gray-800 dark:text-gray-200">
                A responsive app made from food enthusiasts who love making
                their own food. Made with ReactJS, Tailwind CSS and love.
              </p>
              <div className="mt-5">
                <a
                  href="https://rizzipy.netlify.app"
                  target="_blank"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/iamuzairbaba/Recipe-App"
                  target="_blank"
                  className="bg-gradient-to-l from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
