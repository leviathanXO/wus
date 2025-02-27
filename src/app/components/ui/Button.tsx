import { ReactNode } from 'react';

interface ButtonProps {
    onClick: () => void;
    children?: ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="inline-flex items-center justify-between py-1 px-3 rounded-full border border-solid border-transparent bg-white hover:bg-light hover:border-mid/[.08] text-dark text-sm"
        >
            {children}
        </button>
    )
}