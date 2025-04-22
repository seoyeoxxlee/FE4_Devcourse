import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type OnlyLiterals<T> = T extends string
  ? string extends T
    ? never // string extends T면 catch-all -> 제외
    : T // string literal만 허용
  : never;

type ReactInputType = OnlyLiterals<
  React.InputHTMLAttributes<HTMLInputElement>["type"]
>;

type InputProps = Omit<
  React.ComponentPropsWithRef<"input">, "type"> & {
type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;
};

export default forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  const { className, type = "text", ...rest } = props;

  return (
    <>
        <input
            ref={ref}
            type={type}
            className={twMerge("w-full h-11", className)}
            {...rest}
        />
    </>
  );
});
