import { useEffect, useState } from "react";
import "./App.css";
import { Filter } from "./component/Filter";
import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";
import { Product } from "./component/Product";
import { Routes, Route } from "react-router-dom";
import { ProductRouter } from "./component/ProductRouter";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setappData(data));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res?.json())
      .then((data) => setfil(data));
  }, []);
  const [dat, setappData] = useState([]);
  console.log(dat, "bu api");

  const [Data, setData] = useState(dat);
  console.log(Data, "salom uka");

  const [fil, setfil] = useState([]);

  const Allcategory = ["all", ...fil];

  const handleFilter = (val) => {
    if (val === "all") {
      setData(dat);
      return;
    }

    const abbos = dat.filter((item) => item.category === val);
    setData(abbos);
  };
  console.log(Data, "bu data");
  return (
    <>
      <Navbar />

      <Home />
      <Filter
        handleFilter={handleFilter}
        setData={setData}
        dat={dat}
        Allcategory={Allcategory}
      />
      <Product dat={dat} Data={Data} />
      <ProductRouter />
    </>
  );
}

export default App;
