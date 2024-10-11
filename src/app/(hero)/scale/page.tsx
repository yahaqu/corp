import React from "react";
import imgSrc from "/public/images/scale.jpg";
import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scale",
  description: "Scale Content",
};

export default function Page() {
  return <Hero imgUrl={imgSrc} altText="Scale" content="Scale Content" />;
}
