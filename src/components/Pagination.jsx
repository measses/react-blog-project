import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-md ${
          currentPage === 1
            ? "cursor-not-allowed text-gray-500 bg-gray-200"
            : "hover:bg-gray-100 text-gray-700"
        } transition duration-150 ease-in-out`}
      >
        <BsArrowLeftSquare size={32} />
      </button>

      <span className="text-lg md:text-2xl font-semibold text-white">
        {currentPage}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-md ${
          currentPage === totalPages
            ? "cursor-not-allowed text-gray-500 bg-gray-200"
            : "hover:bg-gray-100 text-gray-700"
        } transition duration-150 ease-in-out`}
      >
        <BsArrowRightSquare size={32} />
      </button>
    </div>
  );
};

export default Pagination;
