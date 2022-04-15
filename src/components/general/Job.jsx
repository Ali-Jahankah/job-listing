import React from "react";
import "../../css/job.css";
const Job = ({ item, favHandler }) => {
  return (
    <>
      <section className="job_section">
        <div className="logo_div">
          <img src={item.logo} alt="job logo" />
        </div>

        <div className="job_info">
          <p>
            <span className="company_name">{item.company}</span>{" "}
            {item.new && <span className="job_new">NEW!</span>}
            {item.featured && <span className="job_featured">FEATURED</span>}
          </p>
          <h2>{item.position}</h2>
          <ul>
            <li className="job_info">{item.postedAt} . </li>
            <li className="job_info"> {item.contract} . </li>
            <li className="job_info"> {item.location}</li>
          </ul>
        </div>
        <hr />

        <div className="job_filter_div">
          <p>
            <span
              className="fav"
              onClick={() => {
                favHandler(item.role);
              }}
            >
              {item.role}
            </span>
            <span className="fav" onClick={() => favHandler(item.level)}>
              {item.level}
            </span>
            {item.languages.map((lang, index) => {
              return (
                <span onClick={() => favHandler(lang)} className="fav">
                  {lang}
                </span>
              );
            })}
            {item.tools.map((tool, index) => {
              return (
                <span onClick={() => favHandler(tool)} className="fav">
                  {tool}
                </span>
              );
            })}
          </p>
        </div>
      </section>
    </>
  );
};

export default Job;
