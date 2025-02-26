import { ReactNode } from 'react';

interface FooterProps {
    children: ReactNode;
}

export default function Footer({ children }: FooterProps) {
    return (
        <footer className="flex-wrap items-center justify-center">
            {children}
      </footer>
    )
};