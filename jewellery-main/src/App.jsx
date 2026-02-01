import { ParallaxProvider } from "react-scroll-parallax";
import { Routes, Route } from "react-router-dom"; // ❌ remove BrowserRouter here
import Landing from "./components/Landing";
import ClickSpark from "./ClickSpark";
import { NavbarDemo } from "./components/NavbarDemo";
import ProductRow from "./components/ProductRow";
import EmblaCarousel from "./components/EmblaCarousel";
import { CardCarousel } from "./components/CardCarousel";
import PagesFooter from "./components/Pages-Footer";
import MasonryGallery from "./components/MasonryGallery";

// Pages
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

import "./css/base.css";
import "./css/sandbox.css";
import "./css/embla.css";

function App() {
  const OPTIONS = { loop: true };
  const slide = [
    { src: "https://dcassetcdn.com/design_img/2732980/643152/643152_14878325_2732980_4b827cb5_image.png", alt: "Image 1" },
    { src: "https://dcassetcdn.com/design_img/2732980/88130/88130_14879831_2732980_e5c8b3b7_image.jpg", alt: "Image 2" },
    { src: "https://dcassetcdn.com/design_img/2886222/654209/654209_15934433_2886222_90f467d9_image.jpg", alt: "Image 3" },
  ];

  const images = [
    {
      src: "https://cdn1.fireworktv.com/medias/2024/12/20/1734678380-ckotgfwb/watermarked/720/MarkYourMomentwithdiamondscraftedforspecialoccasionsandstylethemwithyourfestiveattireforadazzlingtouch,makingeachmomenttrulyunforgettable.Exploretheworldofnat_1.mp4",
      alt: "Video 1",
    },
    {
      src: "https://cdn1.fireworktv.com/medias/2024/12/20/1734679771-iwgzlfdj/watermarked/720/DiamondsareallyouneedtounleashthatmaincharacterenergyWhetheryoustylethemasstatementpiecesorlayerthemtomakeafashionstatement,Tanishq%E2%80%99swiderangeofjewelleryhe.mp4",
      alt: "Video 2",
    },
    {
      src: "https://cdn1.fireworktv.com/medias/2024/12/20/1734677123-wqpjifmg/watermarked/720/FindtheperfectdiamondthatmakesyoudazzlefromAMtoPMExploretheworldofnaturalandrarediamondsatTanishq%E2%80%99sFestivalofDiamonds,withover10,000diamonddesigns%C2%A0Fe1_1.mp4",
      alt: "Video 3",
    },
  ];

  return (
    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <NavbarDemo />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ParallaxProvider>
                <Landing />
              </ParallaxProvider>
              <ProductRow />
              <EmblaCarousel slides={slide} options={OPTIONS} />
              <MasonryGallery />
              <CardCarousel
                images={images}
                autoplayDelay={2000}
                showPagination={true}
                showNavigation={true}
              />
              <PagesFooter/>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </ClickSpark>
  );
}

export default App;
