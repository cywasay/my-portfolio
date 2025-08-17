export default function Section({ children, className }) {
  return (
    <section className={`h-screen w-full ${className || ""}`}>
      {children}
    </section>
  );
}
