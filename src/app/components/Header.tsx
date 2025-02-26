import Image from 'next/image';
import LOGO from '../assets/layout-logo-w-s-weis.svg';

export default function Header() {
    // add visitor counter
    return (
        <header className="flex-wrap items-center justify-left">
        <Image
          className="dark:invert"
          src={LOGO}
          alt="W&S logo"
          width={180}
          height={38}
          priority
        />
      </header>
    )
};