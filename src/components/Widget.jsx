import React, { useState, useEffect } from "react";

export default function Widget({ id, image, title, content, pre }) {
  const [hoverWidget, setHoverWidget] = useState(false);

  return (
    <li
      onMouseEnter={() => setHoverWidget(true)}
      onMouseLeave={() => setHoverWidget(false)}
    >
      <div className={`widget-overlay ${hoverWidget ? `active` : undefined}`}>
        <div
          className={`widget-overlay-icons ${
            hoverWidget ? `active` : undefined
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <h1>{title}</h1>
      <p>{content}</p>
      <span>{pre}</span>
    </li>
  );
}
