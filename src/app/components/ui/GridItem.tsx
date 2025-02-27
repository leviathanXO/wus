import { ReactNode } from 'react';

interface GridItemProps {
    children: ReactNode;
}

export default function GridItem({ children }: GridItemProps) {
    return (
        <div className="
        flex 
        gap-4 
        items-start
        flex-col 
        ">
            {children}
        </div>
    )
}