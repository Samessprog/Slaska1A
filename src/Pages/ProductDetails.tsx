import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { database } from "../../firebase";
import { ref, get, query, orderByChild, equalTo } from "firebase/database";

const ProductDetails: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <section className="pl-10 pr-10 flex justify-end">
      <div className="flex justify-end mt-20 w-11/12">
        <div className="w-6/12 flex text-justify flex-col">
          <div className="mb-2 text-2xl font-semibold ">{Product_Name}</div>
          <div className="w-12/12">{Product_Desc}</div>
        </div>
        <div className="w-6/12  flex justify-center">
          <div className="mr-2 other-colors flex flex-col items-center">
            <div>Kolor</div>
            <div className="mt-2">
              <div className="circle mb-2"></div>
              <div className="circle mb-2"></div>
              <div className="circle mv-2"></div>
            </div>
          </div>
          <div className="w-7/12 img-details-product-holder">
            <img alt="loading error w-full h-full" src={Product_Img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
