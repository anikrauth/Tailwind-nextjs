import type { NextPage } from "next"

import Head from "../Components/Common/Head"
import FeaturesProductCard from "../Components/FeaturesProuctsCard"
import Slider from "../Components/Slider"
import ProductLoop from "../Components/Slider/ProductLoop"

const featuresProducts = [
  {
    id: 1,
    title: "Black Beanie",
    price: "400",
    image: "/images/assets/drop-shirt-0.png",
    width: "600",
    height: "600",
    bg: "#FF0080",
  },
  {
    id: 2,
    title: "Lightweight Jacket",
    price: "400",
    image: "/images/assets/lightweight-jacket-0.png",
    width: "400",
    height: "400",
    bg: "#000000",
  },
  {
    id: 3,
    title: "T-shirt",
    price: "400",
    image: "/images/assets/t-shirt-0.png",
    width: "400",
    height: "400",
    bg: "#7928CA",
  },
]

const LoopProducts = [
  {
    id: 1,
    title: "Black Beanie",
    price: "400",
    image: "/images/assets/drop-shirt-0.png",
  },
  {
    id: 2,
    title: "Jackets",
    price: "400",
    image: "/images/assets/lightweight-jacket-0.png",
  },
  {
    id: 3,
    title: "Black Beanie",
    price: "400",
    image: "/images/assets/drop-shirt-0.png",
  },
  {
    id: 4,
    title: "Black Beanie",
    price: "400",
    image: "/images/assets/lightweight-jacket-2.png",
  },
  {
    id: 5,
    title: "Black Beanie",
    price: "400",
    image: "/images/assets/drop-shirt-1.png",
  },
]

const Home: NextPage = () => {
  return (
    <div>
      <Head
        title="Goonut"
        description="Best e-commerce Brand."
        keywords="goonut, best e-commerce"
      />
      {/* Slider component start */}
      <Slider />
      {/* Slider component end */}
      {/* Features product component start */}
      <FeaturesProductCard featuresProducts={featuresProducts} />
      {/* Features product component end */}
      {/* Loop Products component start */}
      <div className="LoopProductWraper bg-black">
        <ProductLoop LoopProducts={LoopProducts} />
      </div>
      {/* Loop product component end */}
    </div>
  )
}

export default Home
