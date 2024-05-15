import Hero from "../components/layouts/Hero";
import Skill from "../components/layouts/Skill";
import Service from "../components/layouts/Service";
import Project from "../components/layouts/Project";
import ProblemSlove from "../components/layouts/ProblemSlove";
import Protfolio from "../components/layouts/Protfolio";
import Blog from "../components/layouts/Blog";
import Testomonia from "../components/layouts/Testomonia";
import About from "../components/layouts/About";
import Contact from "../components/layouts/Contact";

function Home() {
  return (
    <div
      className={`bg-gradient-to-r from-[#abecd6] to-[#5e75f9] dark:bg-gradient-to-r dark:from-dark-300 dark:to-dark-300 `}
    >
      <Hero />
      <Skill />
      <Project />
      <Service />
      <Protfolio />
      <ProblemSlove />
      <Blog />
      <Testomonia />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
