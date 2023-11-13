import Footer from './Components/Footer';
import Hero from './Components/Hero';
import ImageSlider from './Components/ImageSlider';
import Navbar from './Components/Navbar';
import Offers from './Components/Offers';
import Plan from './Components/Plan';
import Rooms from './Components/Rooms';

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Offers />
        <Plan />
        <Rooms />
        <ImageSlider />
        <Footer />
      </main>
    </>
  );
}
