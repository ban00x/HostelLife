import React from "react";

function Card({ event }) {
  const { title, starttime } = event;
  return (
    <div>
      <h6 className="my-3 border bg-success text-center">
        {title} <span className="ml-3">{starttime}</span>{" "}
      </h6>
    </div>
  );
}

export default Card;
