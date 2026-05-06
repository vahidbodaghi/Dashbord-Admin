import TableHeader from "./components/TableHeader";

export default function Table({
  header = { title: "لیست آیتم ها", Buttons: undefined },
  children,
}) {
  return (
    <div className="mt-15 border min-w-full bg-white rounded-2xl border-green-400 font-Medium shadow-2xl">
      <TableHeader header={header} />
      <div>{children}</div>
    </div>
  );
}




