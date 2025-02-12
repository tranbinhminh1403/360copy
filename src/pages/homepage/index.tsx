 
import HeaderAndFooter from "../../components/headerAndFooter";
import Banner from "../../components/banner";
import Contact from "../../components/contact";
import Planning from "../../components/planning";
import Customer from "../../components/customer";
import Service from "../../components/serviceAd";
import ServicesIntro from "../../components/servicesIntro";
import Info from "../../components/info";
import AnimatedSection from "../../components/common/animation";
import RingPhone from "../../components/ringPhone";
export const Homepage = () => {
  return (
    <>
      <HeaderAndFooter>
        <Banner />
        <a id="service">
          <ServicesIntro />
        </a>

        <hr />

        <Contact />

        <hr />

        <a id="planning">
          <Planning />
        </a>

        <hr />
        <AnimatedSection>
          <Service />
        </AnimatedSection>
        <hr />

        <Customer />

        <AnimatedSection>
          <Info />
        </AnimatedSection>

        {/* <a id="footer">
        <Footer />
      </a> */}
        <RingPhone />
      </HeaderAndFooter>
    </>
  );
};

