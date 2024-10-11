import React from "react";
import imgSrc from "/public/images/performance.jpg";
import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance",
  description: "Performance Content",
};

export default function Page() {
  return (
    <Hero imgUrl={imgSrc} altText="Performance" content="Performance Content" />
  );
}
