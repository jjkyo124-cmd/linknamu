import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  const initial = name.trim().charAt(0) || "?";

  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <div className="relative flex h-32 w-32 rotate-45 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-md">
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={`${name} 프로필 사진`}
            fill
            sizes="128px"
            className="-rotate-45 scale-150 object-cover"
          />
        ) : (
          <span className="-rotate-45 text-4xl font-bold text-white">
            {initial}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold text-gray-900">{name}</h1>
        <p className="text-sm text-gray-500">{bio}</p>
      </div>
    </header>
  );
}
