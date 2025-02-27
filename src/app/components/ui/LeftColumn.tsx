import { ReactNode } from 'react';

interface LeftColumnProps {
    children: ReactNode;
}

export default function LeftColumn({ children }: LeftColumnProps) {
    return (
        <div className="flex gap-4 items-end justify-center flex-col">
            {children}
        </div>
    )
}