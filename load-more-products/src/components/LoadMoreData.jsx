import React, { useEffect, useState } from "react";

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }&select=title,price`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flex flex-col gap-20 p-10">
      <div className="product-container grid grid-cols-5 gap-10">
        {products && products.length
          ? products.map((product) => (
              <div
                className="product p-14 border border-blue-950 flex flex-col gap-10"
                key={product.id}
              >
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
              </div>
            ))
          : null}
      </div>
      <div className="button-container flex flex-col items-center justify-center">
        <button
          onClick={() => setCount(count + 1)}
          disabled={disableButton}
          className="bg-slate-600 rounded-lg text-white px-3 py-1"
        >
          Load More Products
        </button>
        {disableButton && <p>You have reached to 100 Products.</p>}
      </div>
    </div>
  );
}

export default LoadMoreData;
