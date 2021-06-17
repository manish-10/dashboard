import Head from "next/head";
import Navbar from "../src/Components/Navbar/Navbar";
import Sidebar from "../src/Components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className=" w-screen flex ">
      <Sidebar />
      <Navbar />
    </div>
  );
}
