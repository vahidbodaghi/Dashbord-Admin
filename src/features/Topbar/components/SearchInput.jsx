import { HiSearch } from "react-icons/hi";

export default function SearchInput() {
  return (
    <div className="w-full max-w-sm">
      <div className="relative flex items-center w-full">
        <input
          type="text"
          placeholder="جستجو..."
          className="w-full rounded-lg border border-gray-300 bg-white py-2 pr-10 pl-4 text-sm shadow-sm focus:border-green-800 focus:ring-1 focus:ring-green-400 outline-none"
        />
        <HiSearch className="absolute mr-2 size-5 text-gray-400 "/>
        {/* <span className="absolute inset-y-0 right-2 flex items-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.15 10.15Z"
            />
          </svg>
        </span> */}
      </div>
    </div>
  );
}
