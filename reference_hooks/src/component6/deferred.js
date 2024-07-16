import { useDeferredValue, useState, useMemo } from "react";

const arrayItems = Array.from(
  { length: 100 },
  (element, index) => `Item ${index + 1}`
);
console.log(arrayItems);

const FilterList = ({ filter }) => {
  const deferredFilter = useDeferredValue(filter); // use DeferredValue here, so that receive every 'filter' prop so that deferredValue hook create a deferred version of it (deferredList)

  const filterItems = useMemo(() => {
    return arrayItems.filter((items) =>
      items.toLowerCase().includes(deferredFilter.toLowerCase())
    );
  }, [deferredFilter]); // use memo to optimize the performance

  //   const filterItems = arrayItems.filter((items) =>
  //     items.toLowerCase().includes(deferredFilter.toLowerCase())
  //   );

  // console.log(filterItems)

  return (
    <>
      <ul>
        {filterItems.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
};

const FilterApp = () => {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search for Item"
      />
   
        <FilterList filter={filter} />
 
    </>
  );
};

export { FilterApp };
