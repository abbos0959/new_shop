import React, { useEffect, useState } from "react";

export const Filter = ({ handleFilter, Allcategory }) => {
  
  return (
    <div className="filter">
      <div className="latest">Latest Product</div>

      <div className="filter_map">
        {Allcategory?.map((val) => (
          <button onClick={() => handleFilter(val)} className="button2">
            {val}
          </button>
        ))}
      </div>
    </div>
  );
};
