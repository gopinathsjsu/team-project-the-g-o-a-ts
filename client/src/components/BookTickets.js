import React, { useState } from "react";
import Row from './Row.js';
import Dropdown from "./dropdown.js";
import List from "./List.js";
import movies from "./options";
import rowsData from "./rows";
import "../css/booktickets.css";

export default function BookTickets() {

  const [seat, setSeat] = useState(0);
  const [price, setPrice] = useState(0);
  const [movie, setMovie] = useState("");
  const [options] = useState(movies);
  const [rows] = useState(rowsData);
  const onclick = (e) => {
    debugger;
    if (
      // React Ref
      ![...document.getElementById(e.target.id).classList].includes(
        "selected"
      ) &&
      ![...document.getElementById(e.target.id).classList].includes("occupied")
    ) {
      document.getElementById(e.target.id).classList.add("selected");
      setSeat(seat + 1);
      setPrice(price + +document.getElementById("movie").value);
    }
  };

  return (
        <div className="BookTickets">
          <Dropdown
            movie={movie}
            changeMovie={(e) => setMovie(e.target.value)}
            options={options}
          />
          <List />
          <div className="container">
            {rows.map(({ id, occupied }, index) => (
              <Row row={id} click={onclick} occupied={occupied} />
            ))}
          </div>
          <p className="text">
            You have selected <span id="count">{seat}</span> seats for a price of $
            <span id="total">{price}</span>
          </p>
        </div>
      );
}
