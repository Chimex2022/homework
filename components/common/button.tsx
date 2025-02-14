"use client"; // Ensure it's a client component in Next.js 15

import React from "react";
import Image from "next/image";

interface ButtonProps {
  icon?: React.ElementType;
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger" | "tertiary";
  iconColor?: string;
  className?: string;
  image?: string; // URL for image
  iconPosition?: "start" | "end"; // Added to dynamically position the icon
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  text,
  onClick,
  variant = "primary",
  iconColor = "text-white",
  className = "",
  image,
  iconPosition = "start", // Default icon position
}) => {
  const baseStyles =
    "flex items-center justify-center gap-2 hover:cursor-pointer rounded-md text-white px-6 py-3 font-bold text-sm";
  const variantStyles = {
    primary:
      "bg-[#3175FF] font-extrabold border hover:bg-blue-700 text-white transition ease-in duration-300",
    secondary:
      "bg-black font-bold hover:bg-gray-700 border border-black hover:text-white transition ease-out duration-200",
    tertiary: 
      "bg-white font-bold !text-black hover:bg-gray-700 border border-black hover:text-white transition ease-out duration-200",
    danger:
      "bg-[#FF5955] text-white leading-wider border border-[#A7A7A7] font-bold hover:bg-orange-700 hover:text-white transition ease-out duration-200",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {iconPosition === "start" && Icon && <Icon className={`size-5 ${iconColor}`} />}
      {image && (
        <Image
          src={image}
          alt="button image"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      )}
      {text}
      {iconPosition === "end" && Icon && <Icon className={`size-5 ${iconColor}`} />}
    </button>
  );
};

export default Button;
