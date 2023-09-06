import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Root() {
  return (
    <>
      <HelmetProvider>
        <Header />
        <Outlet />
        <Footer />
      </HelmetProvider>
      <ToastContainer position="bottom-left" />
    </>
  );
}

export default Root;
