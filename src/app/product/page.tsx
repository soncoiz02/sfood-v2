"use client";

import { useEffect } from "react";
import productServices from "./api/productApis";
import ProductList from "./sections/list/ProductList";
import Sidebar from "./sections/side-bar/Sidebar";

const params = {
  _page: 1,
  _limit: 20,
};

const ProductPage = () => {
  return (
    <div className="container">
      <div className="flex md:flex-row flex-col md:py-8 py-4 gap-[50px]">
        <Sidebar />
        <div className="flex flex-col w-[calc(100%-350px)] gap-y-8">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
