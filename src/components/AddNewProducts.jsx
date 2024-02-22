import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewProducts = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("https://65d73f4c27d9a3bc1d7a8c49.mockapi.io/user-data-app/admin", {
        e_name: productName,
        e_description: description,
        e_price: price,
        e_brand: brand,
      })
      .then(() => {
        navigate("/product-list");
      });
    setIsLoading(true);
  };

  return (
    <div className="border w-[40%] mt-36 mx-auto rounded-md p-4 ">
      <form onSubmit={handleSubmit}>
        <div className=" ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Product Name
          </label>
          <input
            className="shadow my-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
          <label
            className="block  text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Product Description
          </label>
          <input
            className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            placeholder="description"
          />
          <label
            className="block my-3 text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Product Price
          </label>
          <input
            className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="100$"
          />
          <label
            className="block my-3 text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Brand
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="brand"
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
            type="text"
            placeholder="Apple"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 py-2 mt-3 px-5 text-white rounded-md hover:bg-blue-700"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddNewProducts;
