import About from "../components/About/About";
import Services from "../components/Services/Services";


export default function Home() {
  return (
    <>
      <div className="home__page">
        <About />
        <Services />
      </div>
    </>
  );
}
