import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Loading from "./Components/Loading/Loading";
import UseAuth from "./Hooks/UseAuth";

function Root() {
  const { loading } = UseAuth();
  if (loading) return <Loading />;

  return (
    <div className="2xl:container mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default Root;
