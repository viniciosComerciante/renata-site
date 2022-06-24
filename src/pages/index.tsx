import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Recipes } from "../components/Recipes";
import { SlideShow } from "../components/SlideShow";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <SlideShow></SlideShow>
      <Recipes></Recipes>
      <Footer></Footer>
    </div>
  );
}
