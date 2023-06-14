import SectionTitle from "@/app/components/section-title";
import { TbBrandNextjs } from "react-icons/tb";
import KnownTech from "./known-tech";

export default function KnownTechs() {
    return (
        <>
            <section className="container py-16 w-full">

                <SectionTitle title={"Conhecimentos"} />

                <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-20">
                 {Array.from({length:8}).map((_, index) => (
                    <KnownTech key={index} tech={{
                        icon: <TbBrandNextjs />,
                        name: "NextJs",
                        
                    }} />
                 ))}
                </div>
                
            </section>
        </>
    )
    
};
