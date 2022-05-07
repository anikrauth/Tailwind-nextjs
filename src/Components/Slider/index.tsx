import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react"   
import Image from "next/image";
import Link from "next/link";
import ChevronRight from "../Icons/ChevronRight";

export default function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide md:h-128 sm:h-auto">
            <div className="md:flex md:justify-between md:items-center md:container small">
                <div className="leftSilder">
                    <Image width="800" height="800" src="/Images/assets/Hat.webp" alt="dd"/>
                </div>
                <div className="rightSilder">
                    <h1>Black Beanie</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                    <Link href="/product/black-beanie">
                        <a className="btn custom_btn flex justify-start items-center">Shop Now <span><ChevronRight className="h-9 w-9 pl-4" /></span></a>
                    </Link>
                </div>
            </div>
          </div>
          <div className="keen-slider__slide md:h-128 sm:h-auto">
            <div className="md:flex md:justify-between md:items-center md:container small">
                <div className="leftSilder">
                    <Image width="800" height="800" src="/Images/assets/Hat.webp" alt="dd"/>
                </div>
                <div className="rightSilder">
                    <h1>Black Beanie</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                    <Link href="/product/black-beanie">
                        <a className="btn custom_btn flex justify-start items-center">Shop Now <span><ChevronRight className="h-9 w-9 pl-4" /></span></a>
                    </Link>
                </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      
    </>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow absolute ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        shapeRendering="geometricPrecision"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
