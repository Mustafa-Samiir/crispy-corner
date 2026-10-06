interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Sök på namn eller ansvarsområde…"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
