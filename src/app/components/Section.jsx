export default function Section({ children, className }) {
  return (
    <section className={`min-h-screen w-full ${className || ""}`}>
      {children}
    </section>
  );
}