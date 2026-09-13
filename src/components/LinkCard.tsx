type LinkCardProps = {
  label: string;
  url: string;
};

export function LinkCard({ label, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-center font-medium text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
    >
      {label}
    </a>
  );
}
