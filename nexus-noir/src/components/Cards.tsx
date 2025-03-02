// components/Card.tsx
interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <section className="bg-[#2A2336] rounded-lg p-4 shadow-md border border-[#2A2336]/50">
      {children}
    </section>

  );
}
