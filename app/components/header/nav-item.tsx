import cn from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemsProps = {
  label: string;
  href: string;
};

export default function NavItem({ label, href }: NavItemsProps) {
  const pathName = usePathname();

  const isActive = pathName == href;
  return (
    <>
      <Link
        href={href}
        className={cn(
          "text-zinc-200 flex items-center gap-2 font-medium font-poppins",
          isActive && "text-zinc-400",
        )}
      >
        <span className="text-zinc-200"></span>
        {label}
      </Link>
    </>
  );
}
