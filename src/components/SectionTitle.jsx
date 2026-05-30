export default function SectionTitle({ eyebrow, title, children, level = 2 }) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <Heading>{title}</Heading>
      {children && <p>{children}</p>}
    </div>
  );
}
