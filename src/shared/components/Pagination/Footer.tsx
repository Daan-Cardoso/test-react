import React, { useState } from "react";
import { tPagination } from "./types";

interface PaginationFooterProps {
  itemsPerPageOptions: number[];
  pagination: tPagination;
  setPagination: React.Dispatch<React.SetStateAction<tPagination>>;
  totalItems: number;
}

const PaginationFooter: React.FC<PaginationFooterProps> = ({
  totalItems,
  pagination,
  setPagination,
  itemsPerPageOptions,
}) => {
  const [inputValue, setInputValue] = useState(pagination.page.toString());

  const handlePrevious = () => {
    if (pagination.page > 1) {
      setPagination((prev) => ({ ...prev, page: prev.page - 1 }));
    }
  };

  const handleNext = () => {
    if (pagination.page < pagination.totalPages) {
      setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setPagination((prev) => {
      const totalPages = Math.ceil(totalItems / newItemsPerPage);
      return { ...prev, limit: newItemsPerPage, totalPages, page: 1 };
    });
  };

  return (
    <div className="flex justify-between items-center p-2 text-xs">
      <label>
        Itens per page:
        <select
          value={pagination.limit}
          onChange={handleItemsPerPageChange}
          className="border rounded p-1 mx-2"
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <span className="hidden md:block">
        Page {pagination.page} of {pagination.totalPages}
      </span>

      <div className="flex items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold p-1 md:p-2 rounded-md md:rounded-lg"
          onClick={handlePrevious}
          disabled={pagination.page === 1}
        >
          &lt;
        </button>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            const value = e.target.value;
            if (!/^\d*$/.test(value)) return;

            setInputValue(value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              let numericValue = Number(inputValue);
              if (numericValue < 1) numericValue = 1;
              if (numericValue > pagination.totalPages)
                numericValue = pagination.totalPages;

              setPagination((prev) => ({ ...prev, page: numericValue }));
              setInputValue(numericValue.toString());
            }
          }}
          onBlur={() => {
            setInputValue(pagination.page.toString());
          }}
          className="border rounded p-1 mx-2 w-16 text-center"
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold p-1 md:p-2 rounded-md md:rounded-lg"
          onClick={handleNext}
          disabled={pagination.page === totalItems}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PaginationFooter;
