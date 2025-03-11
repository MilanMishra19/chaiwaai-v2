
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services.jsx";
import Footer from "./sections/Footer.jsx";
import About from "./sections/About";
import Summary from "./sections/Summary.jsx";

const AppWithSections = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Services />
        <Summary />
        <Footer />
      </div>
    </>
  );
};

export default AppWithSections;