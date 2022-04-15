import React, { useState } from "react";
import AllJobs from "./AllJobs";
import "../../css/homepage.css";
import data from "../../data/data.json";

const HomePage = () => {
  const [orgData, setOrgData] = useState(data);
  const [favItems, setFavItems] = useState([]);

  return (
    <article className="homepage_cont">
      {favItems.length !== 0 && (
        <div className="fav_cont">
          {favItems.map((item) => {
            return (
              <h4 className="filter_spans">
                {item}{" "}
                <span
                  className="remove_btn"
                  onClick={() =>
                    setFavItems(
                      favItems.filter((el) => {
                        return el !== item;
                      })
                    )
                  }
                >
                  {" "}
                  X
                </span>
              </h4>
            );
          })}
        </div>
      )}
      <AllJobs
        orgData={orgData}
        favItems={favItems}
        setFavItems={setFavItems}
      ></AllJobs>
    </article>
  );
};

export default HomePage;
