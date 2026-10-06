interface EmptyStateProps {
  title: string;
  text?: string;
}

export default function EmptyState({ title, text }: EmptyStateProps) {
  return (
    <div className="status">
      <h2>{title}</h2>
      {text && <p className="muted">{text}</p>}
    </div>
  );
}
