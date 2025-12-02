import handFlameIcon from "@/assets/hand-flame-icon.png";

interface LogoProps {
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ showIcon = true, size = "md" }: LogoProps) => {
  const textSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const iconSizes = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-40 h-40",
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className={`${textSizes[size]} font-bold`}>
        <span className="text-primary">Na</span>
        <span className="text-foreground">Mão</span>
      </h1>
      {showIcon && (
        <img
          src={handFlameIcon}
          alt="NaMão Logo"
          className={`${iconSizes[size]} object-contain`}
        />
      )}
    </div>
  );
};

export default Logo;
