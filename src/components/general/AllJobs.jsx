import React, { useState, useEffect } from "react";
import Job from "./Job";
const AllJobs = ({ orgData, favItems, setFavItems }) => {
  const [filterItems, setFilterItems] = useState(orgData);

  useEffect(() => {
    if (favItems.length !== 0) {
      const arr = orgData.filter((item) => {
        let check = true;
        for (const el of favItems) {
          if (
            !item.role.includes(el) &&
            !item.level.includes(el) &&
            !item.languages.includes(el) &&
            !item.tools.includes(el)
          ) {
            check = false;
          }
        }

        return check ? item : null;
      });
      setFilterItems(arr);
    } else {
      setFilterItems(orgData);
    }
  }, [orgData, favItems]);

  const favHandler = (item) => {
    !favItems.includes(item) && setFavItems((prev) => [...prev, item]);
  };
  return (
    <>
      {console.log(filterItems)}
      {filterItems.map((item, index) => {
        return <Job item={item} key={index} favHandler={favHandler}></Job>;
      })}
    </>
  );
};

export default AllJobs;
