import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomePage from "../pages/Home";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
