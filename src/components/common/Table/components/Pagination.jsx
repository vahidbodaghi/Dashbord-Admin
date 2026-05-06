import { useState, useEffect } from "react";

export default function Pagination({ items, itemsPerPage, setItems }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const changePageHandler = (pageNumber) => setCurrentPage(pageNumber);

  

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = items.slice(startIndex, endIndex);
    setItems(paginatedItems)
  }, [currentPage]);


   const getPages = () => {
    const pages = [];
    const maxVisible = 5;

    let start = Math.max(1, currentPage - 2);
    let end = Math.min(pageCount, start + maxVisible - 1); 

    if (end - start < maxVisible - 1) { 
      start = Math.max(1, end - maxVisible + 1); 
    }

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < pageCount) {
      if (end < pageCount - 1) pages.push("...");
      pages.push(pageCount);
    }
    console.log(start, end);

    return pages;

    
  };
 
  

  return (
    <div className="flex justify-center items-center gap-2 py-4 bg-green-100">
      <button
        disabled={currentPage === 1}
        onClick={() => changePageHandler(currentPage - 1)}
      >
        قبلی
      </button>
      {getPages().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => changePageHandler(page)}
            className={`px-3 py-1 border border-green-400 rounded ${
              currentPage === page ? "bg-green-500 text-white" : ""
            }`}
          >
            {page.toLocaleString('fa-IR')}
          </button>
        )
      )}
      <button
        disabled={currentPage === pageCount}
        onClick={() => changePageHandler(currentPage + 1)}
      >
        بعدی
      </button>
    </div>
  );
}
