import Marquee from "react-fast-marquee";
import LoopProductsItem from "./LoopProductItem";

export default function ProductLoop(props: any) {
    const { LoopProducts } = props;
  return (
    <Marquee pauseOnHover={true} pauseOnClick={true} gradient={false}>
      {
        LoopProducts.map((LoopProducts: any, index: number) => {
          return (
            <LoopProductsItem
              key={index}
              LoopProducts={LoopProducts}
            />
          );
        })
      }
    </Marquee>
  );
}
