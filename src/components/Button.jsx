const Button = ({ label, iconURL, type = "default", fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        type === "transparent"
          ? "bg-transparent text-slate-gray"
          : "bg-coral-red  text-white"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="Button" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
