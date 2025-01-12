import React, { useRef, useEffect, Suspense, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

interface productCardInterface {
  product_ID: number;
  img: string;
  short_Description: string;
  product_type: string;
  product_brand: string;
  product_name: string;
}

const ProductCard: React.FC<productCardInterface> = ({
  product_ID,
  img,
  short_Description,
  product_type,
  product_brand,
  product_name,
}) => {
  const imgRef = useRef(null);
  const lensRef = useRef(null);
  const resultRef = useRef(null);

  const portalRoot = document.getElementById("portal-root");
  if (portalRoot === null) return 0;
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    const lens = lensRef.current;
    const result = resultRef.current;

    if (!img || !lens || !result) return;

    // Ratio calculation
    const cx = (result.offsetWidth / lens.offsetWidth) * 0.9;
    const cy = (result.offsetHeight / lens.offsetHeight) * 0.9;

    // Set result background
    result.style.backgroundImage = `url('${img.src}')`;
    result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

    const moveLens = (e) => {
      e.preventDefault();

      const pos = getCursorPos(e);
      let x = pos.x - lens.offsetWidth / 2;
      let y = pos.y - lens.offsetHeight / 2;

      // Keep lens inside bounds
      if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
      if (x < 0) x = 0;
      if (y > img.height - lens.offsetHeight)
        y = img.height - lens.offsetHeight;
      if (y < 0) y = 0;

      lens.style.left = `${x}px`;
      lens.style.top = `${y}px`;

      result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    };

    const getCursorPos = (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.pageX - rect.left - window.pageXOffset;
      const y = e.pageY - rect.top - window.pageYOffset;
      return { x, y };
    };

    // Event listeners
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    return () => {
      lens.removeEventListener("mousemove", moveLens);
      img.removeEventListener("mousemove", moveLens);
      lens.removeEventListener("touchmove", moveLens);
      img.removeEventListener("touchmove", moveLens);
    };
  });

  return (
    <div className="shadow-card overflow-hidden">
      <div className="product-card overflow-hidden">
        <figure className="img-zoom-container">
          <Suspense
            fallback={
              <div className="product-img-loader">{<PropagateLoader />}</div>
            }
          >
            <img
              ref={imgRef}
              src={img}
              alt="loading err"
              className="zoom-image w-full h-full"
            />
          </Suspense>

          <div
            ref={lensRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="img-zoom-lens"
          ></div>
          {createPortal(
            <div className={`portal-holder ${hovered ? "active" : "hide"}`}>
              <div
                ref={resultRef}
                className={`img-zoom-result ${hovered ? "active" : "hide"}`}
              ></div>
            </div>,
            portalRoot
          )}

          <figcaption className="text-justify product-desc pl-1 pr-1 pt-2 mb-2 overflow-y-scroll">
            <em className="font-semibold">{product_name}</em> -{" "}
            <span className="scroll-smooth">{short_Description}</span>
          </figcaption>
        </figure>
      </div>
      <Link to={`/DetaleProduktu/${product_ID}`}>
        <button className="product-button pt-2 pb-2 w-full text-white">
          Szczegóły
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
