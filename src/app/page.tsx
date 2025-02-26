import Image from "next/image";

import Footer from "./components/Footer";
import Grid from "./components/Grid";
import GridItem from "./components/GridItem";
import Header from "./components/Header";
import Quote from "./components/Quote";
import VisitorCounter from "./components/VisitorCounter";

import { addUser } from "./lib/prisma";

import KUHKERL from './assets/kuhkerl.png';

export default function Home() {
    addUser();
  
  return (
    <div>
      {/* Header with company logo */}
      <Header />

      {/* Main page elements */}
      <main>
        <Grid>
          {/* Left column contains cowboy image*/}
          <GridItem>
            <Image
              src={KUHKERL}
              alt="Es ist Mittwoch, meine Kerle"
              width={350}
              height={350}
            />
          </GridItem>

          {/* Right column contains Chuck Norris quote*/}
          <GridItem>
            <Quote />
          </GridItem>

        </Grid>
      </main>

      {/* Footer includes Visitor Counter */}
      <Footer>
        <VisitorCounter />
      </Footer>

    </div>
  );
}
