import Image from "next/image";

import Container from "./ui/Container";

import KUHKERL from '../assets/kuhkerl.png';

export default function Portrait() {
    return (
      <Container>
        <Image
        className="w-100 md:w-350 shrink-0"
        src={KUHKERL}
        alt="Es ist Mittwoch, meine Kerle"

      />
      </Container>
    )
}
