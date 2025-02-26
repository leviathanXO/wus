import Image from 'next/image';
import LOGO from '../assets/layout-logo-w-s-weis.svg';

// TODO: align left
export default function Header() {
    return (
        <header className="flex-wrap items-center justify-left">
        <Image
          className="invert dark:invert-0"
          src={LOGO}
          alt="W&S logo"
          width={100}
          height={38}
          priority
        />
      </header>
    )
};