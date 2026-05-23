export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
        <span className="gold-rule" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-navy">{title}</h2>
      {description && (
        <p className="mt-5 text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
