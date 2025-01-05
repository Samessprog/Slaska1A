import React, { useEffect, useState } from "react";
import { database } from "../../firebase";
import { ref, get, query, orderByChild, equalTo } from "firebase/database";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import headerImg from "../assets/ProductsPage/0strona-merge.png";
import ProductCard from "../Components/ProductsComponents/ProductCard";

import konfirmaty from "../assets/productIcons/LacznikiGwintowe.webp";

type Product = {
  ID_Product: number;
  Product_Brand: string;
  Product_Desc: string;
  Product_Type: string;
  Product_Img: string;
  Product_Name: string;
};

const Products = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productsDB, setProductsDB] = useState<Record<string, Product>>(null);

  if (!id || id === "undefined" || id === "null") {
    navigate("/");
    return null;
  }

  useEffect((): void => {
    const readData = async (): Promise<void> => {
      const dataRef = query(
        ref(database, "Products"),
        orderByChild("Product_Type"),
        equalTo(id)
      );

      try {
        const snapshot = await get(dataRef);
        if (snapshot.exists()) {
          setProductsDB(snapshot.val());
        } else {
          alert("Nie znaleziono produktów!");
          navigate("/");
        }
      } catch (error) {
        console.error("Błąd odczytu danych:", error);
      }
    };

    readData();
  }, []);

  if (!productsDB) {
    return <div>Ładowanie...</div>; // Ekran ładowania
  }

  const {
    ID_Product,
    Product_Brand,
    Product_Desc,
    Product_Dimensions,
    Product_Icon,
    Product_Img,
    Product_Name,
    Product_Type,
    Short_Desc,
  } = productsDB.Product_1 || {};

  return (
    <div>
      <section>
        <div className="relative img-header-holder">
          <img
            alt="loading error"
            src={headerImg}
            className="object-cover w-full h-full"
          />
          <span className="absolute product-header-text text-4xl text-white font-semibold">
            OFERTA PRODUKTÓW
          </span>
        </div>
      </section>
      <section>
        <div>{Product_Type}</div>
        <div className="flex justify-center items-center">
          <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-4 pl-2 pr-6 mt-10">
            <ProductCard img={konfirmaty}></ProductCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
