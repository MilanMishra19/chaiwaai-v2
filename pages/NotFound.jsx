import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Section from "../sections/Section";


const NotFound = () => {
  return (
    <Section>
      <Header/>
      <h1 className="text-3xl font-bold font-serif">We are still working on it!</h1>
      <p className="text-xl ">Don't worry it will be up and running soon. Stay tuned!</p>
      <Footer/>
    </Section>
  );
};

export default NotFound;