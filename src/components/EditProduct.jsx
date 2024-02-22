import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [isLoading, setLoading] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://65d73f4c27d9a3bc1d7a8c49.mockapi.io/user-data-app/admin/${id}`
      )
      .then((res) => {
        const productData = res.data;
        setProductName(productData.e_name);
        setDescription(productData.e_description);
        setPrice(productData.e_price);
        setBrand(productData.e_brand);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      e_name: productName,
      e_description: description,
      e_price: price,
      e_brand: brand,
    };

    axios
      .put(
        `https://65d73f4c27d9a3bc1d7a8c49.mockapi.io/user-data-app/admin/${id}`,
        updatedProduct
      )
      .then(() => {
        console.log("Product updated successfully");
        navigate("/product-list");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
    setLoading(true);
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
            type="text"
            placeholder="Apple"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 py-2 mt-3 px-5 text-white rounded-md hover:bg-blue-700"
        >
          {isLoading ? "Loading..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
