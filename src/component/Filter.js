import React, { useEffect, useState } from "react";

export const Filter = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res?.json())
      .then((data) => setfil(data));
  }, []);

  // const [cat, setcat] = useState(Allcategory);
  const [fil, setfil] = useState([]);
  const Allcategory=["All",...fil]

  console.log(Allcategory);
  return (
    <div className="filter">
      <div className="latest">Latest Product</div>

      <div className="filter_map">
          {Allcategory?.map((val)=>(
              <button className="button2">{val}</button>
          ))}
      </div>
    </div>
  );
};
