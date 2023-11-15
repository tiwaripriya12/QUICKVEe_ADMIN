import React from "react";

const ProgressBar = ({ value, color }) => {
  return (
    <div className="progress">
      <div
        className={`progress-bar ${color}`}
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

