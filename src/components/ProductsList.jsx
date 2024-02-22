import axios from "axios";
import { useEffect, useState } from "react";
import DeleteImage from "../assets/delete.png";
import EditImage from "../assets/edit.png";
import { Link } from "react-router-dom";
const ProductsList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    axios
      .get("https://65d73f4c27d9a3bc1d7a8c49.mockapi.io/user-data-app/admin")
      .then((res) => {
        setData(res.data);
      });
    setIsLoading(true);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(
        `https://65d73f4c27d9a3bc1d7a8c49.mockapi.io/user-data-app/admin/${id}`
      )
      .then(() => {
        getData();
      });
  };

  return (
    <div className="p-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.e_name}</td>
              <td>{item.e_description}</td>
              <td>{item.e_price}</td>
              <td>{item.e_brand}</td>
              <td
                onClick={() => handleDelete(item.id)}
                className="w-[50px] cursor-pointer"
              >
                <img src={DeleteImage} alt="" />
              </td>

              <td className="w-[50px] hover:w-[51px] cursor-pointer">
                <Link to={`/edit-product/${item.id}`}>
                  <img src={EditImage} alt="" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
