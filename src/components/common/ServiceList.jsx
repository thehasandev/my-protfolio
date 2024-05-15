import { FiChevronsRight } from "react-icons/fi";

function ServiceList({ text, className }) {
  return (
    <p
      className={`${className}font-dm font-normal text-base text-center cursor-pointer  flex items-center gap-x-5 pl-16 text-secondary group-hover:text-secondary `}
    >
      <FiChevronsRight />
      {text}
    </p>
  );
}

export default ServiceList;
