import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Section from '../sections/Section'; 
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(0.95); }
  to { transform: scale(1); }
`;

const AboutPage = () => {
  return (
    <Section id="about-page"> 
      <Header /> 
      <div className="container mx-auto py-20">
        <AnimatedHeading>
          <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight font-serif text-center">
            About Us
          </h2>
          <p className="text-center">ESTD 2024. MADE IN INDIA</p>
        </AnimatedHeading>
      </div>

      <div className="relative z-1 grid gap-5 lg:grid-cols-2">
        <AnimatedImageContainer className="relative min-h-[39rem] border border-green-500 rounded-3xl overflow-hidden">
          <img src="/cafe.png" className="h-full w-full object-cover" width={630} height={750} alt="menu" />
        </AnimatedImageContainer>
        <AnimatedContent className="p-4 bg-white rounded-3xl overflow-hidden lg:min-h-[46rem]">
          <div className="py-12 px-4 xl:px-8">
            <h4 className="text-[2rem] font-bold font-serif leading-normal mb-4">
              Namma Bengaluru. Namma ChaiWaai!
            </h4>
            <p className="body-2 text-xl mb-[2rem]">
              Namaskara Bengaluru! At Chaiwaai, we're brewing more than just chai, we're crafting connections, inspired by your city's vibrant spirit. 
              From the bustling tech hubs to the serene parks, Bengaluru's energy fuels our passion to create a space where every sip sparks joy.
              We celebrate your love for innovation, your appreciation for tradition, and your knack for building community, just like the perfect blend of spices in our masala chai.
            </p>
            <p className="body-2 text-xl mb-[2rem]">
              Join us at Chaiwaai, where every cup is a tribute to Bengaluru's unique culture and the "Chaiship" that matters most.
              Savour the moment, connect with loved ones, and experience the magic of Chaiwaai, your new favourite adda!
            </p>
          </div>
        </AnimatedContent>
      </div>

      <div className="container relative">
        <AnimatedTextContainer className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mb-6 mt-20 text-black font-serif">
            Great Chai and even better vibes!
          </h1>
          <ul className="body-1 max-w-3xl mx-auto text-gray-800 font-code lg:mb-8">
            <li>Brew with Passion: We mix timeless recipes with a dash of creativity to serve up teas that excite every taste bud.</li>
            <li>Bring People Together: Chai isn’t just a drink—it’s a connection. Our spaces are all about conversations, cultures, and shared stories.</li>
            <li>Savor the Simple Joys: Life’s best moments are the little ones—like a warm cup of chai on a slow afternoon. Let’s celebrate that.</li>
            <li>Care for the Planet: We believe in doing good—sourcing ingredients responsibly and using eco-friendly packaging to keep things sustainable.</li>
            <li>For us, “Chaiship Matters” isn’t just a tagline; it’s the heart of what we do. Whether it’s a quick roadside chai, a rich saffron-infused treat, or a cozy tea session with friends, we want every sip to spark joy.</li>
          </ul>
        </AnimatedTextContainer>
      </div>

      <Footer />   
    </Section>
  );
};

// Styled Components for Animations
const AnimatedHeading = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;

const AnimatedImageContainer = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const AnimatedContent = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const AnimatedTextContainer = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;

export default AboutPage;
