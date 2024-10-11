import React from "react";
import homeSrc from "/public/images/home.jpg";
import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to our website, Professional Cloud Hosting",
};

export default function Page() {
  return (
    <Hero
      imgUrl={homeSrc}
      altText="home"
      content="Professional Cloud Hosting"
    />
  );
}
