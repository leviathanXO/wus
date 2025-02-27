import { ReactNode } from 'react';

interface RightColumnProps {
    children: ReactNode;
}

export default function RightColumn({ children }: RightColumnProps) {
    return (
        <div className="
        flex 
        gap-4 
        flex-col
        col-span-2
        justify-between
        ">
            {children}
        </div>
    )
}