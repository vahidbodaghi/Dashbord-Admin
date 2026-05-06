export default function SectionTitle({ title, Buttons }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-Medium">{title}</h2>
      </div>
      <div className="flex items-center gap-4">{Buttons}</div>
    </div>
  );
}
