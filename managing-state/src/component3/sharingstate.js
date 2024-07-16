import { useState } from "react";

const ChildCompo = ({ value, children, isActive, onShow }) => {
  // const [active, setActive] = useState(false);
  // const [checked, setChecked] = useState(false);
  return (
    <>
      <h4>{value}</h4>
      {isActive ? (
        <p>{children}</p>
      ) : (
        // <button onClick={() => setActive(true)}>click</button>
        <button onClick={onShow}>show</button>
      )}

      
      {/* {checked ? <p>checked</p> : <ChildCompo />}
  
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.value);
        }}
      /> */}
    </>
  );
};

const SharingState = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <h2>Details</h2>
      <ChildCompo
        value="about1"
        isActive={active === 0}
        onShow={() => setActive(0)}
      >
        {" "}
        Lorem ipsum dolor sit amet.
      </ChildCompo>
      <ChildCompo
        value="about2"
        isActive={active === 1}
        onShow={() => setActive(1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi.
      </ChildCompo>
    </>
  );
};
export { SharingState };

// import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
