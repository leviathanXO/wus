import { ReactNode } from 'react';

interface ButtonProps {
    onClick: () => void;
    children?: ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="inline-flex
            items-center 
            justify-between
            text-sm 
            sm:text-base 
            py-1
            px-3
            rounded-full 
            border 
            border-solid
            border-black/[.08] 
            dark:border-white/[.145] 
            hover:border-transparent 
            hover:bg-[#f2f2f2] 
            dark:hover:bg-[#1a1a1a]
            "
        >
            {children}
        </button>
    )
}