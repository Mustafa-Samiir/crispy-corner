interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="status status-error" role="alert">
      <h2>Något gick fel</h2>
      <p>{message}</p>
      {onRetry && (
        <button className="button" onClick={onRetry}>
          Försök igen
        </button>
      )}
    </div>
  );
}
