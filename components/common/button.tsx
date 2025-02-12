import React from "react";

interface ButtonProps {
  icon?: React.ElementType; 
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  iconColor?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  text,
  onClick,
  variant = "primary",
  iconColor = "text-white", // Default icon color
  className = "",
}) => {
  const baseStyles =
    "flex items-center justify-center gap-2 hover:cursor-pointer rounded-full text-white px-4 py-3 font-bold text-sm";
  const variantStyles = {
    primary:
      "bg-[#3175FF] font-extrabold border hover:bg-blue-700 text-white transition ease-in duration-400",
    secondary:
      "bg-black font-bold hover:bg-gray-700 border border-black hover:text-white transition ease-out duration-200",
    danger:
      "bg-[#FF5955] text-white border border-[#A7A7A7] font-bold hover:bg-orange-700 hover:text-white transition ease-out duration-200",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className={`mr-2 size-5 ${iconColor}`} />}
      {text}
    </button>
  );
};

export default Button;
