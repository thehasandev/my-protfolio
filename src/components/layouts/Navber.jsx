import { useEffect, useState } from "react";

import Container from "../common/Container";
import Flex from "../common/Flex";
import Logo from "../../assets/Document from Hasan (1).jpg";

import Image from "../common/Image";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-scroll";

import { Link as Links } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function Navber() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // const handleDark = () => {
  //   setTheme("dark");
  // };
  // const handleLight = () => {
  //   setTheme("light");
  // };

  return (
    <section
      className={`fixed w-full z-50  ${
        color ? "bg-white dark:bg-dark-300" : "bg-transparent"
      } px-4 xl:px-0`}
    >
      <Container>
        <Flex className="justify-between items-center py-2">
          <div className="w-[10%]">
            <div className="w-12 ">
              <Image src={Logo} alt="Logo" className="rounded-[12px]" />
            </div>
          </div>

          <div className={`w-[40%] hidden md:block`}>
            <ul className={`flex   justify-center   gap-x-10  `}>
              <Links to="/">
                <li
                  className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 text-secondary md:text-secondary hover:text-secondary after:bg-secondary dark:after:bg-white dark:text-white`}
                >
                  Home
                </li>
              </Links>

              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={-100}
                duration={2000}
              >
                <li
                  className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 text-secondary md:text-secondary hover:text-secondary after:bg-secondary dark:after:bg-white dark:text-white`}
                >
                  Service
                </li>
              </Link>

              <Link
                to="protfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={2000}
              >
                <li
                  className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 text-secondary md:text-secondary hover:text-secondary after:bg-secondary dark:after:bg-white dark:text-white`}
                >
                  Protfolio
                </li>
              </Link>

              <Link
                to="blog"
                spy={true}
                smooth={true}
                offset={-100}
                duration={2000}
              >
                <li
                  className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 text-secondary md:text-secondary hover:text-secondary after:bg-secondary dark:after:bg-white dark:text-white`}
                >
                  Blog
                </li>
              </Link>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={2000}
              >
                <li
                  className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 text-secondary md:text-secondary hover:text-secondary after:bg-secondary dark:after:bg-white dark:text-white`}
                >
                  Contact
                </li>
              </Link>

              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={2000}
              >
                <li
                  className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 text-secondary md:text-secondary hover:text-secondary after:bg-secondary dark:after:bg-white dark:text-white`}
                >
                  About
                </li>
              </Link>
            </ul>
          </div>

          {/* Responsive Menu  */}
          <div className="md:hidden block">
            <ul
              className={` absolute flex flex-col items-center gap-y-4 py-5 top-16 left-0 w-full bg-white ${
                open ? "rotate-x-0" : "rotate-x-90"
              }  duration-500`}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={2000}
              >
                <li
                  onClick={() => setOpen(false)}
                  className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 text-secondary md:text-secondary hover:text-secondary after:bg-secondary dark:after:bg-white`}
                >
                  Home
                </li>
              </Link>

              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={-100}
                duration={2000}
              >
                <li
                  onClick={() => setOpen(false)}
                  className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 text-secondary md:text-secondary hover:text-secondary after:bg-secondary dark:after:bg-white`}
                >
                  Service
                </li>
              </Link>

              <Link
                to="protfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={2000}
              >
                <li
                  onClick={() => setOpen(false)}
                  className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 text-secondary md:text-secondary hover:text-secondary after:bg-secondary dark:after:bg-white`}
                >
                  Protfolio
                </li>
              </Link>

              <Link
                to="blog"
                spy={true}
                smooth={true}
                offset={-100}
                duration={2000}
              >
                <li
                  onClick={() => setOpen(false)}
                  className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 text-secondary md:text-secondary hover:text-secondary after:bg-secondary dark:after:bg-white`}
                >
                  Blog
                </li>
              </Link>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={2000}
              >
                <li
                  onClick={() => setOpen(false)}
                  className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 text-secondary md:text-secondary hover:text-secondary after:bg-secondary dark:after:bg-white`}
                >
                  Contact
                </li>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={2000}
              >
                <li
                  onClick={() => setOpen(false)}
                  className={`font-dm cursor-pointer  text-base font-semibold  relative after:absolute after:bottom-[-5px] after:left-0 after:h-1 after:w-0  after:rounded-[5px] md:hover:after:w-6 after:duration-300 duration-100 text-secondary md:text-secondary hover:text-secondary after:bg-secondary dark:after:bg-white`}
                >
                  About
                </li>
              </Link>
            </ul>
          </div>

          <div className={`w-[250px] flex justify-end items-center gap-x-5`}>
            <label className="swap swap-rotate">
              <input type="checkbox" />

              <div
                onClick={() => setTheme("dark")}
                className="swap-on fill-current text-secondary dark:text-white"
              >
                <MdOutlineLightMode size={25} />
              </div>

              <div
                onClick={() => setTheme("light")}
                className="swap-off fill-current text-secondary dark:text-white"
              >
                <MdOutlineDarkMode size={25} />
              </div>
            </label>

            <CgMenuRight
              size={25}
              className={` md:hidden cursor-pointer  text-secondary dark:text-white`}
              onClick={() => {
                setOpen(!open);
              }}
            />

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={2000}
            >
              <button
                className={`hidden md:block border bg-secondary text-white hover:bg-transparent hover:text-secondary hover:border-secondary  duration-500 px-6  rounded-[5px] py-2 font-dm font-medium text-base border-secondary dark:hover:text-white dark:hover:border-white`}
              >
                Contract
              </button>
            </Link>
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default Navber;
