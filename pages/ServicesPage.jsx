
import Header from '../sections/Header';
import Section from '../sections/Section'; 

const ServicesPage = () => {
  return (
    <Section id="services-page">  
    <Header />
      <div className="container mx-auto py-20">
        <h2 className="text-3xl font-bold">Our Services (Services Page)</h2>
        {/* Your services page content here */}
      </div>
    </Section>
  );
};

export default ServicesPage;