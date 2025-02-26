import Image from "next/image";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Quote from "./components/Quote";

import KUHKERL from './assets/kuhkerl.png';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <Header />

      {/* Main */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Image
            src={KUHKERL}
            alt="Es ist Mittwoch, meine Kerle"
            width={350}
            height={350}
          />
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Quote />
        </div>
      </main>

      <Footer />
    </div>
  );
}
