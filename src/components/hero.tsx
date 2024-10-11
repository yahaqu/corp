"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface HeroProps {
  imgUrl: StaticImageData;
  altText: string;
  content: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src={props.imgUrl}
          alt={props.altText}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800"></div>
      </div>

      <div className="relative flex justify-center items-center h-full">
        <h1 className="text-4xl">{props.content}</h1>
      </div>
    </div>
  );
}
