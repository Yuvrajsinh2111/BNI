"use client";

import HomePage from "@/Container/HomePage";
import Navbar from "@/components/Navbar";
import GlobalProvider from "@/context/Global";

export default async function Home() {

  return (
    <>
      <GlobalProvider>
          <Navbar />
          <HomePage />
      </GlobalProvider>
    </>
  );
}
