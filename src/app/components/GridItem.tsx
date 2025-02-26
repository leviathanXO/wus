import { ReactNode } from 'react';

interface GridItemProps {
    children: ReactNode;
}

// TODO: adjust element style
export default function GridItem({ children }: GridItemProps) {
    return (
        <div className="
        flex 
        gap-4 
        items-center 
        flex-col 
        sm:flex-row">
            {children}
        </div>
    )
}