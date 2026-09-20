import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="h-[52px] rounded-lg border border-gray-500 bg-white px-3 text-gray-800"
    />
  );
}
