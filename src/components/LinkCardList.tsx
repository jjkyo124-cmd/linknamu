import { LinkCard } from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type LinkCardListProps = {
  links: LinkItem[];
};

export function LinkCardList({ links }: LinkCardListProps) {
  return (
    <nav className="flex w-full flex-col gap-5">
      {links.map((link) => (
        <LinkCard key={link.id} label={link.label} url={link.url} />
      ))}
    </nav>
  );
}
