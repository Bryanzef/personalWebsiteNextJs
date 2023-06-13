import cn from "@/app/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <>
      <button
        className={cn(
          "bg-red-700/100 py-3 px-4 rounded-lg text-zinc-50 flex items-center justify-center gap-2 hover:cursor-pointer hover:bg-red-700/90 transition-all disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
