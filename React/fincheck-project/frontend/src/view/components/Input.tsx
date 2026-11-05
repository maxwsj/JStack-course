import { forwardRef, type ComponentProps } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, id, name, error, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          name={name}
          ref={ref}
          id={inputId}
          className="peer h-[52px] w-full rounded-lg border border-gray-500  bg-white px-3 pt-4 text-gray-800 outline-none transition-all placeholder-shown:pt-0 focus:border-gray-800 "
          placeholder=" "
        />
        <label
          htmlFor={inputId}
          className="pointer-events-none absolute left-[13px] top-2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base"
        >
          {placeholder}
        </label>
        {error && (
          <div className="mt-2 flex items-center gap-2 text-red-900">
            <CrossCircledIcon />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
