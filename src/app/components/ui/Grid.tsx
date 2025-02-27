import { ReactNode } from 'react';

interface GridProps {
    children: ReactNode;
}

export default function Grid({ children }: GridProps) {
    return (
        <main>
            <div className="grid grid-flow-col grid-cols-3 gap-4 md:gap-16 sm:p-20">
                {children}
            </div>
        </main>
    )
}