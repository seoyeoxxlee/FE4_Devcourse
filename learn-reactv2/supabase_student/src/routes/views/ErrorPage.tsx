import { AlertCircle, Home, RefreshCcw } from "lucide-react";
import { useNavigate, useRouteError } from "react-router";
import Button from "../../components/ui/Button";

export default function ErrorPage() {
  const error = useRouteError() as { status?: number; message?: string };
  const navigate = useNavigate();

  const getErrorMessage = () => {
    if (error?.status === 404) {
      return "The page you're looking for doesn't exist.";
    }
    return error?.message || "An unexpected error occurred.";
  };

  return (
    <div className="min-h-screen bg-[#0D1117] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle size={64} className="text-[#f85149]" />
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          {error?.status === 404 ? "404" : "Oops!"}
        </h1>

        <p className="text-xl text-[#c9d1d9] mb-2">
          {error?.status === 404 ? "Page Not Found" : "Something went wrong"}
        </p>

        <p className="text-[#8b949e] mb-8">{getErrorMessage()}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            onClick={() => window.location.reload()}
            icon={<RefreshCcw size={16} />}
          >
            Try Again
          </Button>

          <Button
            variant="primary"
            onClick={() => navigate("/")}
            icon={<Home size={16} />}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
