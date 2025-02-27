import React from 'react';

import Grid from "./components/ui/Grid";
import LeftColumn from "./components/ui/LeftColumn";
import RightColumn from "./components/ui/RightColumn";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Portrait from "./components/Portrait";
import Quote from "./components/Quote";

import { addUser } from "./lib/prisma";

export default function Home() {
  addUser();

  return (
    <div>
      {/* Header with company logo */}
      <Header />

      {/* Main page elements */}
        <Grid>
          {/* Left column contains cowboy image*/}
          <LeftColumn>
            <Portrait />
          </LeftColumn>

          {/* Right column contains Chuck Norris quote*/}
          <RightColumn>
            <Quote />
          </RightColumn>
        </Grid>

      {/* Footer includes Visitor Counter */}
      <Footer />

    </div>
  );
};
