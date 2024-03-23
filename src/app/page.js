"use client";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";

export default function Home() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <HomePage />
      </div>
    </>
  );
}
