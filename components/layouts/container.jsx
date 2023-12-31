import { cn } from "@/lib/utils";

const Container = ({ children, className }) => {
  return (
    <div className={cn("w-full bg-background", className)}>{children}</div>
  );
};

export default Container;
