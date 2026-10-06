interface LoadingProps {
  text?: string;
}

export default function Loading({ text = "Laddar…" }: LoadingProps) {
  return (
    <div className="status">
      <div className="spinner" />
      <p>{text}</p>
    </div>
  );
}
