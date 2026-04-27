import AboutPage from "./About";
import PortfolioLandingPage from "./Hero";

export default function Home() {
  return (
    <main>
      <section id="home">
        <PortfolioLandingPage />
      </section>

      <section id="about">
        <AboutPage />
      </section>
    </main>
  );
}