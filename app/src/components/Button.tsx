type ButtonProps = {
  type?: "button" | "submit";
  text: string;
  variant?: "primary" | "secondary" | "danger";
};

const style = {
  main: "text-xl px-4 py-2 transition-all text-white",
  primary: "bg-blue-400  hover:bg-blue-500",
  secondary: "",
  danger: "bg-red-400  hover:bg-red-500",
};

const Button = ({
  type = "button",
  text,
  variant = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${style["main"]} ${style[variant]}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
