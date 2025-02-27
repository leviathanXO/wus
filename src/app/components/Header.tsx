import React from 'react';
import Image from 'next/image';

import Container from './ui/Container';

import LOGO from '../assets/layout-logo-w-s-weis.svg';

export default function Header() {
  return (
    <Container>
      <header className="flex items-center justify-left">
        <a href="https://www.wus.de/" target="_blank" rel="noopener noreferrer">
          <Image
            className="invert dark:invert-0"
            src={LOGO}
            alt="W&S logo"
            width={100}
            height={38}
            priority
          />
        </a>
      </header>
    </Container>
  )
};