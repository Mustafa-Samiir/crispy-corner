interface AvatarProps {
  name: string;
  size?: "small" | "large";
}

// Visar initialer, t.ex. "Anna Karlsson" → "AK".
export default function Avatar({ name, size = "small" }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return <div className={`avatar avatar-${size}`}>{initials}</div>;
}
