import cn from "@/app/lib/utils"

type SectionTitleProps ={
    title: string,
  
    className?: string,
}

export default function SectionTitle({title,  className}: SectionTitleProps) {
    return (
        <>
            <div className={cn("flex flex-col gap-4", className)}>
               <h3 className="text-3xl font-medium">{title}</h3>
            </div>
        </>

    )
    
};
