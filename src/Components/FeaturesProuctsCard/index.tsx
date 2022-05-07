import Wishlist from "../Icons/Wishlist";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesProductCard(props: any) {
  const One = props.featuresProducts[0];
  const Two = props.featuresProducts[1];
  const Three = props.featuresProducts[2];

  return (
    <div className="md:flex md:justify-center md:items-start fraturesProductMain">
      <div className="featureLeftPro">
        <Link href="/product/[id]" as={`/product/${One.id}`}>
          <a
            className="FeaturesProductCardWraper bigOne"
            style={{ backgroundColor: `${One.bg}` }}
          >
            <div>
              <div className="flex justify-between items-top">
                <div className="FeaturesProductCard__info">
                  <h2>{One.title}</h2>
                  <p>
                    $<span>{One.price}</span> USD
                  </p>
                </div>
                <div className="FeaturesProductCard__wishlist">
                  <button className="FeaturesProductCard__wishlist-btn">
                    <Wishlist className="h-6 w-6 " />
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center md:pt-24 md:pb-24">
                <Image
                  className="FeaturesProductCard__image"
                  width={One.width}
                  height={One.height}
                  src={One.image}
                  alt="product"
                />
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="featureRightPro">
        <div>
          <Link href="/product/[id]" as={`/product/${Two.id}`}>
            <a
              className="FeaturesProductCardWraper bigOne bigTwo"
              style={{ backgroundColor: `${Two.bg}` }}
            >
              <div>
                <div>
                  <div className="flex justify-between items-top">
                    <div className="FeaturesProductCard__info">
                      <h2>{Two.title}</h2>
                      <p>
                        $<span>{Two.price}</span> USD
                      </p>
                    </div>
                    <div className="FeaturesProductCard__wishlist">
                      <button className="FeaturesProductCard__wishlist-btn">
                        <Wishlist className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      className="FeaturesProductCard__image"
                      width={Two.width}
                      height={Two.height}
                      src={Two.image}
                      alt="product"
                    />
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/product/[id]" as={`/product/${Three.id}`}>
            <a
              className="FeaturesProductCardWraper bigOne bigTwo"
              style={{ backgroundColor: `${Three.bg}` }}
            >
              <div>
                <div className="flex justify-between items-top">
                  <div className="FeaturesProductCard__info">
                    <h2>{Three.title}</h2>
                    <p>
                      $<span>{Three.price}</span> USD
                    </p>
                  </div>
                  <div className="FeaturesProductCard__wishlist">
                    <button className="FeaturesProductCard__wishlist-btn">
                      <Wishlist className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    className="FeaturesProductCard__image"
                    width={Three.width}
                    height={Three.height}
                    src={Three.image}
                    alt="product"
                  />
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
