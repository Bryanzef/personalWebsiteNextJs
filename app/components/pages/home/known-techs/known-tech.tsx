import { ReactNode } from "react";

type KnownTechProps = {
    tech: {
        icon: ReactNode,
        name: string,
    
    }
}

export default function KnownTech({ tech }: KnownTechProps) {
    return (
        <> 
            <div className="p-6 rounded-xl bg-zinc-600/20 text-zinc-500 flex flex-col gap-2 hover:text-red-600 hover:bg-zinc-600/30 transition-all">
                <div className="flex items-center justify-between">
                    <p className="font-medium">{tech.name}</p>
                        {tech.icon} 
                </div>              
            </div>
        </>

    )
    
};
