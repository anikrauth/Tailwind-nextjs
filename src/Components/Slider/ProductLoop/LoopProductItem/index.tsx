import Image from "next/image";
import Bag from "../../../Icons/Bag";

export default function LoopProductsItem(props: any) {
  const data = props.LoopProducts;
  return (
    <div className="product-loop__item">
      <div className="product-loop__item-image">
        <Image
          className=" relative w-full h-full object-cover"
          width={"250"}
          height={"250"}
          src={data.image}
          alt="product"
        />
      </div>
      <div className="LoopProInfo ">
        <div className="product-loop__item-title">{data.title}</div>
        {/* <div className="product-loop__item-price">$<span>{data.price}</span></div> */}
      </div>
      <div className="footerStack bg-gray-light p-3 flex justify-between items-center">
        <button className="btn btn-primary">
          <Bag className="h-6 w-6" />
        </button>
        <div className="colorStack flex justify-around items-center">
          <div className="color-item color-item--active">
            <div
              className="color-item__color"
              style={{ backgroundColor: "#FF0080" }}
            ></div>
          </div>
          <div className="color-item">
            <div
              className="color-item__color"
              style={{ backgroundColor: "#000000" }}
            ></div>
          </div>
          <div className="color-item">
            <div
              className="color-item__color"
              style={{ backgroundColor: "#7928CA" }}
            ></div>
          </div>
        </div>
        <div className="product-loop__item-size">
          <div className="product-loop__item-size-select">
            <select className="form-control">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
