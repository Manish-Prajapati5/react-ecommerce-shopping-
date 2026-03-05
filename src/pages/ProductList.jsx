import React from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const { products } = useCart();
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 ">
        <SearchFilter />
        <CategoryFilter />
        <h2 className="text-2xl text-white font-extrabold mx-auto mb-3 px-4 pt-4">
          Featured Gear {products.length} items
        </h2>
        <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
