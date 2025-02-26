import { ReactNode } from 'react';

interface GridProps {
    children: ReactNode;
}

// TODO: adjust column size
export default function Grid({ children }: GridProps) {
    return (
        <div className="
        grid 
        grid-cols-2
        items-center 
        justify-items-center 
        p-8 
        gap-16 
        sm:p-20">
            {children}
        </div>
    )
}

{/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
