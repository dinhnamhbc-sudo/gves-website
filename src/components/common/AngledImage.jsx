import { useState } from "react";

export default function AngledImage({ src, alt, label }) {
  const [error, setError] = useState(false);

  return (
    <figure className="angledImage">
      {!error && src ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setError(true)} />
      ) : (
        <div className="angledFallback">
          <span>{label || alt}</span>
        </div>
      )}
      {label && <figcaption>{label}</figcaption>}
    </figure>
  );
}
