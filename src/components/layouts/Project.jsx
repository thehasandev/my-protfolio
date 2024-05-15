import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";

import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from "../common/PrevArrow";
import NextArrow from "../common/NextArrow";
import { Link } from "react-router-dom";
import data from "../Data/project";
import { useState } from "react";

function Project() {
  const [project, setProject] = useState(data);

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow class=" -bottom-12 md:bottom-10 right-1/2" />,
    nextArrow: <NextArrow class="-bottom-12 md:bottom-10 left-1/2" />,
  };

  return (
    <section className="mt-[120px] relative">
      <Container>
        <h2
          className={`font-dm font-bold  text-center text-[30px] mb-5 text-secondary dark:text-white`}
        >
          My Current Project
        </h2>

        <Slider {...settings}>
          {project.map((item, index) => {
            const {
              projectName,
              projectImageUrl,
              projectDescription,
              projectLiveLink,
              projectCodeLink,
            } = item;
            return (
              <div
                key={index}
                className="md:w-full    px-8 pt-8 md:pb-[140px] rounded-[5px]"
              >
                <Flex className="justify-between gap-y-5 flex-col md:flex-row">
                  <div className="md:w-[40%] relative overflow-hidden group">
                    <div className="scale-105 group ">
                      <Image
                        src={projectImageUrl}
                        className="group-hover:scale-110 duration-500 "
                      />
                    </div>

                    <div className="w-full h-full bg-black/70 absolute    group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5"></div>
                    <div className="w-full h-full  absolute duration-500   group-hover:top-0 top-[100%] left-0 flex items-center justify-center gap-x-5">
                      <p className="font-dm font-medium text-white text-lg ">
                        <Link to={projectCodeLink}>View Code</Link>
                      </p>
                      <p className="font-dm font-medium text-white text-lg ">
                        <Link to={projectLiveLink}>Live Project</Link>
                      </p>
                    </div>
                  </div>

                  <div className="md:w-[55%] md:text-left text-center">
                    <h2
                      className={`font-dm font-bold mb-2 md:mb-0  text-[20px] text-secondary dark:text-white`}
                    >
                      {projectName}
                    </h2>
                    <p
                      className={`font-dm font-normal md:font-normal text-sm md:text-base mt-5  mx-auto text-center md:text-left md:pl-0 md:mx-0 w-8/12 text-secondary dark:text-white`}
                    >
                      {projectDescription}
                    </p>

                    <div className="hidden md:block">
                      <p className="mt-10 hidden md:block font-dm font-semibold font-lg text-secondary dark:text-white mb-5">
                        Use is Project :
                      </p>

                      <Flex className="md:gap-x-10  flex-wrap mt-4 md:mt-0 gap-2 justify-center">
                        <div
                          className={`px-4 py-2 bg-white  rounded-[5px] shadow-xl shadow-gray-400/30`}
                        >
                          <p className="font-dm font-semibold text-lg text-secondary ">
                            React
                          </p>
                        </div>
                        <div
                          className={`px-4 py-2 bg-white  rounded-[5px] shadow-xl shadow-gray-400/30`}
                        >
                          <p className="font-dm font-semibold text-lg text-secondary">
                            Tailwind
                          </p>
                        </div>
                        <div
                          className={`px-4 py-2 bg-white  rounded-[5px] shadow-xl shadow-gray-400/30`}
                        >
                          <p className="font-dm font-semibold text-lg text-secondary ">
                            Javascript
                          </p>
                        </div>
                        <div
                          className={`px-4 py-2 bg-white  rounded-[5px] shadow-xl shadow-gray-400/30`}
                        >
                          <p className="font-dm font-semibold text-lg text-secondary  ">
                            Redux
                          </p>
                        </div>
                        <div
                          className={`px-4 py-2 bg-white  rounded-[5px] shadow-xl shadow-gray-400/30`}
                        >
                          <p className="font-dm font-semibold text-lg text-secondary  ">
                            Firebase
                          </p>
                        </div>
                      </Flex>

                      <Flex className="justify-center items-center gap-x-4 pt-10 ">
                        <Link to={projectCodeLink}>
                          <Flex className="items-center gap-x-2">
                            <p
                              className={`font-dm font-medium font-base  text-secondary dark:text-white`}
                            >
                              Code
                            </p>
                            <AiFillGithub
                              size={30}
                              className="text-secondary dark:text-white"
                            />
                          </Flex>
                        </Link>

                        <Link to={projectLiveLink}>
                          <Flex className="items-center gap-x-2">
                            <p
                              className={`font-dm font-medium font-base text-secondary dark:text-white`}
                            >
                              Live Demo
                            </p>
                            <FiExternalLink
                              size={25}
                              className="text-secondary dark:text-white"
                            />
                          </Flex>
                        </Link>
                      </Flex>
                    </div>
                  </div>
                </Flex>
              </div>
            );
          })}
        </Slider>
      </Container>
    </section>
  );
}

export default Project;
