function Button({ text, className }) {
  return (
    <button
      className={`duration-500 px-6  rounded-[5px] py-2 font-dm font-medium text-base    
        bg-secondary text-white hover:bg-transparent  hover:text-secondary border border-secondary ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
