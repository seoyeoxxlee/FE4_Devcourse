import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  text?: string;
}

export default function LoadingSpinner({
  size = "medium",
  text,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-8 w-8",
    large: "h-12 w-12",
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />
      {text && <p className="text-slate-600 text-sm">{text}</p>}
    </div>
  );
}
