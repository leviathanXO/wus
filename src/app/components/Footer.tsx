import React from 'react';

import Container from './ui/Container';
import VisitorCounter from './VisitorCounter';

export default function Footer() {
  return (
    <Container>
      <footer className="flex items-center justify-center">
        <VisitorCounter />
      </footer>
    </Container>
  )
};