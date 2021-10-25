import React from "react";

export default function Cell({ config }) {
  return <div className={config.isActive ? "alive" : "dead"}></div>;
}
