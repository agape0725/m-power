import React from "react";
import Widget from "./Widget";
import marketing from "../resources/png/marketing.png";
import { WIDGETS } from "../db.js";

export default function Widgets() {
  return (
    <div className="widget-main-container">
      <section id="widget-container">
        <ul>
          {WIDGETS &&
            WIDGETS.map((widget) => {
              return <Widget key={widget.id} {...widget} />;
            })}
        </ul>
      </section>
      <div
        className="marketing-abstract"
        style={{ backgroundImage: `url(${marketing})` }}
      />
    </div>
  );
}
