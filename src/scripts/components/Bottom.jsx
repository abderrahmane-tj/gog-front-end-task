import React  from 'react';
import Goodies from "./Goodies";
import Goals from "./Goals";

export default function Bottom() {
  return (
    <section className="bottom flex container">
      <Goodies />
      <Goals />
    </section>
  );
}