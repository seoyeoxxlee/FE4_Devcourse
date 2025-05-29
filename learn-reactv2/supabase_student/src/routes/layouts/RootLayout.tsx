import { Outlet } from "react-router";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function RootLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#0D1117] text-[#c9d1d9]">
        <Navbar />

        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
