import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { database } from "../../firebase";
import { ref, get, query, orderByChild, equalTo } from "firebase/database";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productDeatils, setProductDetails] = useState<object>({});

  if (id === undefined) {
    navigate("/");
    return null;
  }

  useEffect((): void => {
    const getData = async () => {
      const dataRef = query(
        ref(database, "Products"),
        orderByChild("ID_Product"),
        equalTo(Number(id))
      );

      try {
        const snapshot = await get(dataRef);
        console.log(snapshot.val());
        setProductDetails(snapshot.val());
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  let ID_Product,
    Product_Brand,
    Product_Name,
    Product_Img,
    Product_Type,
    Product_Details,
    Product_Dimensions,
    Product_Desc;

  Object.entries(productDeatils).forEach(([key, product]) => {
    ({
      ID_Product,
      Product_Brand,
      Product_Name,
      Product_Img,
      Product_Type,
      Product_Details,
      Product_Dimensions,
      Product_Desc,
    } = product);
  });


  return <div>hello</div>;
};

export default ProductDetails;
