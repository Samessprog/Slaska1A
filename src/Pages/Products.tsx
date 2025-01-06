import React, { useEffect, Suspense } from "react";
import { database } from "../../firebase";
import { ref, get, query, orderByChild, equalTo } from "firebase/database";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import headerImg from "../assets/ProductsPage/0strona-merge.png";
import ProductCard from "../Components/ProductsComponents/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProductsDB } from "../states/productSlice";
import { PropagateLoader } from "react-spinners";
import konfirmaty from "../assets/productIcons/LacznikiGwintowe.webp";
import { RootState } from "../states/store";

const Products = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let productsDB = useSelector(
    (state: RootState) => state.productStates.productsDB
  );
  const dispach = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          dispach(setProductsDB(snapshot.val()));
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
    return <div className="products-loader">{<PropagateLoader />}</div>;
  }

  const { Product_Type } = productsDB?.Product_1 || {};

  return (
    <div className="mb-20 ">
      <Suspense
        fallback={<div className="products-loader">{<PropagateLoader />}</div>}
      >
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
      </Suspense>

      <section>
        <div className="mt-20 text-4xl font-semibold">
          <em>
            Nasze{" "}
            {productsDB && Object.keys(productsDB).length > 0 ? (
              Product_Type
            ) : (
              <>produkty</>
            )}
          </em>
        </div>
        <div className="flex justify-center items-center">
          <div
            className={`w-11/12 mt-10 ${
              productsDB && Object.keys(productsDB).length > 0
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-4 pl-2 pr-6"
                : "flex justify-center items-center"
            }`}
          >
            {productsDB && Object.keys(productsDB).length > 0 ? (
              Object.entries(productsDB).map(([key, product]) => (
                <ProductCard
                  key={key}
                  short_Description={product.Short_Desc}
                  product_name={product.Product_Name}
                  product_brand={product.Product_Brand}
                  product_type={product.Product_Type}
                  img={product.Product_Img}
                />
              ))
            ) : (
              <div className="font-semibold text-2xl text-center mt-10 ">
                <div className="flex items-center">
                  NIE ZNALEZIONO PRODUKTU{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="undefined"
                    className="ml-2"
                  >
                    <path d="M480-420q-68 0-123.5 38.5T276-280h408q-25-63-80.5-101.5T480-420Zm-168-60 44-42 42 42 42-42-42-42 42-44-42-42-42 42-44-42-42 42 42 44-42 42 42 42Zm250 0 42-42 44 42 42-42-42-42 42-44-42-42-44 42-42-42-42 42 42 44-42 42 42 42ZM479.98-71.87q-84.65 0-159.09-32.1-74.43-32.1-129.63-87.29-55.19-55.2-87.29-129.65-32.1-74.46-32.1-159.11 0-84.65 32.1-159.09 32.1-74.43 87.29-129.63 55.2-55.19 129.65-87.29 74.46-32.1 159.11-32.1 84.65 0 159.09 32.1 74.43 32.1 129.63 87.29 55.19 55.2 87.29 129.65 32.1 74.46 32.1 159.11 0 84.65-32.1 159.09-32.1 74.43-87.29 129.63-55.2 55.19-129.65 87.29-74.46 32.1-159.11 32.1ZM480-480Zm0 317.13q132.57 0 224.85-92.28T797.13-480q0-132.57-92.28-224.85T480-797.13q-132.57 0-224.85 92.28T162.87-480q0 132.57 92.28 224.85T480-162.87Z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
