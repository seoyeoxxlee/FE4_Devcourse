import { twMerge } from "tailwind-merge";

type OnlyLiterals<T> = T extends string 
    ? string extends T
        ? never
        : T
    : never

type ReactInputType =OnlyLiterals<React.InputHTMLAttributes<HTMLInputElement>["type"]>;
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {type?: Exclude<ReactInputType, "radio" | "checkbox" | "range">;};


export default function Input (props: InputProps) {
    const {className, type="text",...rest} = props;
    return (
        <>
            <input type={type} className={twMerge("w-[240px] h-[44px] my-2", className)} {...rest} />
        </>
    );
}