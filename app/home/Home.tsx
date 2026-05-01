import AboutPage from "./About";
import ResumePage from "./Resume";
import ServicesPage from "./Services";
import PortfolioLandingPage from "./Hero";
import ContactPage from "../contact/Contactpage";

export default function Home() {
  return (
    <main>
      <section id="home">
        <PortfolioLandingPage />
      </section>

      <section id="about">
        <AboutPage />
      </section>
      <section  id="services">
        <ServicesPage />
      </section>
      <section id="resume">
        <ResumePage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </main>
  );
}