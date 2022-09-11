import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";

function App() {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/631a750fa1610e638623cfe2"
    );
    const products = await response.json();
    setProducts(products.record);

  
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);



  return (
    <>
      <Nav />
      <Content products={products} reset={fetchProducts} loading={loading} setLoading={setLoading}/>
    </>
  );
}

export default App;
