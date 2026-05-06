import SearchInput from "../../../../features/Topbar/components/SearchInput";
import Filter from "./Filter";

export default function TableHeader({ header }) {
  const { Buttons } = header;
  return (
    <div className="flex items-center justify-between px-4 h-16">
      <p className="text-xl">
        <strong>{header.title}</strong>
      </p>

      {typeof Buttons === "function" ? (
        <div className="flex items-center gap-2">{<Buttons />}</div>
      ) : (
        <div className="flex items-center gap-4">
          <Filter />
          <SearchInput />
        </div>
      )}
    </div>
  );
}
