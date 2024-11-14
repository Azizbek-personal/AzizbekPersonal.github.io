const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full border border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white">
      {label}

      <img src={iconURL} alt="arrow right icon" className="w5 ml-2 h-5 rounded-full" />
    </button>
  );
};

export default Button;
