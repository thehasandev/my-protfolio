import Container from "../common/Container";
import Image from "../common/Image";

import Flex from "../common/Flex";

function ProblemSlove() {
  return (
    <section className="md:mt-[120px] mt-[100px] px-4 xl:px-0">
      <Container>
        <h2
          className={`font-dm font-bold  mb-8 text-[30px] text-center text-secondary dark:text-white`}
        >
          What sets me apart
        </h2>
        <Flex className="gap-x-5 justify-center flex-col md:flex-row">
          <div className="lg:w-[40%]">
            <div className="md:w-[350px] w-[300px] mx-auto">
              <Image src="https://www.web24zone.com/wp-content/uploads/2022/10/46207-programmer-1.gif" />
            </div>
          </div>

          <div className="lg:w-[40%]">
            <h2 className={`font-dm font-bold  text-xl mt-5  text-secondary dark:text-white`}>
              Problem-Solving Prowess, innovative Solutions and Collaborative
              Mindset
            </h2>
            <p
              className={`font-dm font-normal  text-base mt-5  text-secondary dark:text-white`}
            >
              I thrive on finding creative and innovative solutions to complex
              problems, pushing the boundaries of what's possible in web
              development.
            </p>
            <p
              className={`font-dm font-normal  text-base mt-5  text-secondary dark:text-white`}
            >
              tackling complex challenges and finding elegant solutions, turning
              obstacles into opportunities.
            </p>
            <p
              className={`font-dm font-normal  text-base mt-5  text-secondary dark:text-white`}
            >
              also I believe in the power of teamwork and collaboration, making
              me an excellent addition to any development project.
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default ProblemSlove;
