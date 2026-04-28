import AboutPage from "./About";
import PortfolioLandingPage from "./Hero";
import ServicesPage from "./Services";

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
    </main>
  );
}