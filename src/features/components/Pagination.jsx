import React, { useState } from "react";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Paginationcomp = ({ allproducts, itemsPerPage, currentPage, onPageChange }) => {

  // Total number of pages
  const totalPages = Math.ceil(allproducts.length / itemsPerPage);

  return (
    <>
      <nav>
        <ul className="flex">
          <li>
            <button
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              aria-label="Previous"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <MdOutlineArrowBackIosNew />
            </button>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index}>
              <button
                className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full ${
                  currentPage === index + 1
                    ? "bg-pink-500 text-white"
                    : "border border-blue-gray-100 bg-transparent text-blue-gray-500 hover:bg-light-300"
                } p-0 text-sm transition duration-150 ease-in-out`}
                onClick={() => onPageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              aria-label="Next"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <MdArrowForwardIos />
            </button>
          </li>
        </ul>
      </nav>

    </>
  );
};

export default Paginationcomp;
