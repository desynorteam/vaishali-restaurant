import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "xl";
    children: React.ReactNode;
}

const Button = ({
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...props
}: ButtonProps) => {
    const baseStyles =
        "inline-flex items-center justify-center uppercase tracking-[0.3em] font-bold transition-all duration-500 uppercase text-[10px]";

    const variants = {
        primary: "bg-forest text-ivory hover:bg-sage",
        secondary: "bg-peach text-forest hover:bg-sage",
        outline: "border border-forest text-forest hover:bg-forest hover:text-ivory",
        ghost: "text-forest hover:text-sage",
    };

    const sizes = {
        sm: "px-4 py-2",
        md: "px-8 py-4",
        lg: "px-12 py-6",
        xl: "px-16 py-8",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
