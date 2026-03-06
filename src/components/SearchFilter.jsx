import { Search } from "lucide-react";
import React from "react";

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="mb-5 p-5 bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
        <div className="flex items-center border border-gray-700 rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-orange-600/50 transition duration-300 bg-gray-800">
          <Search className="w-8 h-8 text-gray-500 ml-4" />
          <input
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search high performance product by name or feature..."
            className="w-full outline-none text-white bg-gray-800 placeholder-gray-500 text-base font-medium"
          />
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
