import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> 

export default function Button (props: ButtonProps) {
    const { className, children, ...rest} = props;

  return (
    <>
        <button 
            className={twMerge(
                "m-2 w-[77px] h-[44px] text-sm text-white rounded-lg cursor-pointer disabled:bg-gray-400 disabled:cursor-default", className
            )}
            {...rest}
        > 
            {children}
        </button>
    </>
  );
}