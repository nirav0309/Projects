import { useState } from "react";
import ".././App.css";

const FilterableProductTable = ({ productsValue }) => {
  const [filter, setFilter] = useState("");
  const [stockOnly, setStockOnly] = useState(false);

  return (
    <>
      <SearchBar
        text={filter}
        stock={stockOnly}
        onTextChange={setFilter}
        onStockChange={setStockOnly}
      />
      <ProductTable item={productsValue} text={filter} stock={stockOnly} />
    </>
  );
};

const SearchBar = ({ text, stock, onTextChange, onStockChange }) => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search...."
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
        />
        <br />
        <input
          type="checkbox"
          id="check"
          checked={stock}
          onChange={(e) => onStockChange(e.target.checked)}
        />
        <label htmlFor="check">Only shop products in Stocked</label>

        {/* <label >
          <input type="checkbox" checked={stock} onChange={(e) => onStockChange(e.target.checked)}/>
          {''} Only shop products in Stocked
        </label> */}
      </form>
    </>
  );
};

const ProductTable = ({ item, text, stock}) => {
  const rows = [];
  let lastCategory = null;
  

  item.forEach((myElm) => {
    if (myElm.name.toLowerCase().includes(text.toLowerCase())  === false ) {
      return;
    }
    if (stock && !myElm.stocked) {
      return;
    }

    if (myElm.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={myElm.category} key={myElm.category} />
        //above 'category IS PROPS' we are passing it as a props in 'ProductCategory row'
      );
    }
    rows.push(<ProductRow value={myElm} key={myElm.name} />);
    //above 'value IS PROPS' we are passing it as a props in 'ProductRow'

    lastCategory = myElm.category;
    // console.log(rows);
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
};

const ProductCategoryRow = ({ category }) => {
  return (
    <>
      <tr>
        <th id= "col"colSpan={2}>{category}</th>
      </tr>
    </>
  );
};

const ProductRow = ({ value }) => {
  // let name = value.stocked ? value.name : <span style={{color : 'red'}}>{value.name}</span>

  let name = value.stocked;
  if (name) {
    name = value.name;
  } else {
    name = <span style={{ color: "red" }}> {value.name}</span>;
  }

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{value.price}</td>
      </tr>
    </>
  );
};

const PRODUCTS = [
  { id:1,category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { id:2,category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { id:3,category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { id:4,category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { id:5,category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { id:6,category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
const MyApp = () => {
  return <FilterableProductTable productsValue={PRODUCTS} />;
};

export { MyApp }; //static version done, pending states representation
