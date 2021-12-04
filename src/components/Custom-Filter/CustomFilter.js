import React from "react";
import styles from "./CustomFilter.module.css";

function CustomFilter() {
  return (
    <div className="custom-filter">
      <div className="flex items-center justify-end">
        <div className="flex items-center justify-between">
          <label>New Arrival</label>
          <label>Most Popular</label>
          <label>View All</label>
        </div>
      </div>
    </div>
  );
}

export default CustomFilter;
