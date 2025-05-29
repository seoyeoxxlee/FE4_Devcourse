import { FileQuestion } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "../../components/ui/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0D1117] flex items-center justify-center px-4">
      <div className="text-center">
        <FileQuestion size={64} className="mx-auto mb-6 text-[#58a6ff]" />
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-[#8b949e] mb-8 max-w-md">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <Button variant="primary" onClick={() => navigate("/")}>
            Home Page
          </Button>
        </div>
      </div>
    </div>
  );
}
