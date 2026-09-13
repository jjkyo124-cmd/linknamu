import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkCardList } from "@/components/LinkCardList";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col items-center gap-8 px-6 py-12 sm:py-16">
      <ProfileHeader
        name={profile.name}
        bio={profile.bio}
        avatarUrl={profile.avatarUrl}
      />
      <LinkCardList links={links} />
    </main>
  );
}
