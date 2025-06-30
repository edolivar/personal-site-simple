import React from "react";
import { work } from "@/data/data";
const Work = () => {
  return (
    <div>
      <h3 className="section-heading">
        <span className=" text-light-green">{"* "}</span>work
      </h3>
      <div>
        {work.map((workItem, id) => (
          <div key={id}>
            <h4 className="work-heading">{workItem.company}</h4>
            {workItem.job.map((jobItem, id) => (
              <div key={jobItem.position + id}>
                <div className="work-details text-light-grey">
                  {jobItem.position + " " + "(" + jobItem.time + ")"}
                </div>
                <div className="mb-5">{jobItem.desc}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
