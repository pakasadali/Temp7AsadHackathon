import React from "react";
import Image from "next/image";
import ad from "../../../Public/ad.jpg";
import ad1 from "../../../Public/ad1.jpg";

export default function Hero() {
  const images = [
    { src: ad, alt: "Ad 1" },
    { src: ad1, alt: "Ad 2" },
  ];

  return (
    <div className="container mx-auto p-5 flex flex-wrap justify-center">
      {images.map((image, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-2/5 p-2">
          <Image
            src={image.src}
            width={640}
            height={360}
            alt={image.alt}
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
