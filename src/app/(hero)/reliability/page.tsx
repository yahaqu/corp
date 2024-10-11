import React from "react";
import imgSrc from "/public/images/reliability.jpg";
import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability",
  description: "Reliability Content",
};

export default function Page() {
  return (
    <Hero imgUrl={imgSrc} altText="Reliability" content="Reliability Content" />
  );
}