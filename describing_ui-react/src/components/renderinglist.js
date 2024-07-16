import { Fragment } from "react";
// import { FaEye } from "react-icons/fa";

import { people } from "./dataforrendringlist";
const RenderList = ({ size }) => {
  //   const Item = people.map((e) => <li key={e.id}>{e.name}</li>);

  // const Item = people.filter(e => e.profession === "chemist")

  // const ItemMap = Item.map(e => <li key={e.id}>{e.name}: </li> )
  const Item1 = people.filter((e) => e.profession === "chemist");
  const Item2 = people.filter((e) => e.profession !== "chemist");

  // const ItemMap = people.map((e) => (

  //   <Fragment key={e.id}>
  //     <img src={e.imageId} alt={e.name} width={size} height={size} />
  //     <p>
  //       <b>{e.name}: </b>
  //       {" " + e.profession + " "}
  //       know for {e.accomplishment}
  //     </p>
  //   </Fragment>
  // ));
  const ItemMap = Item1.map((e) => (
    <Fragment key={e.id}>
      <img src={e.imageId} alt={e.name} width={size} height={size} />
      <p>
        <b>{e.name}: </b>
        {" " + e.profession + " "}
        know for {e.accomplishment}
      </p>
    </Fragment>
  ));
  const ItemMap1 = Item2.map((e) => (
    <Fragment key={e.id}>
      <img src={e.imageId} alt={e.name} width={size} height={size} />
      <p>
        <b>{e.name}: </b>
        {" " + e.profession + " "}
        know for {e.accomplishment}
      </p>
    </Fragment>
  ));

  let cups = [];
  for (let i = 1; i <= 2; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return (
    <>
      <ul className="RenderingList"> {ItemMap}</ul>
      <ul className="RenderingList"> {ItemMap1}</ul>

      <h1>guest</h1>
      {cups}
      <Cup guest={3} />
      <Cup guest={4} />
      <Cup guest={5} />

      <div>
        {/* <h1>tog</h1> */}
        {/* <ImageTog /> */}
      </div>
    </>
  );
};

function Cup({ guest }) {
  return (
    <>
      <h5>Tea cup for guest #{guest}</h5>
    </>
  );
}


// const ImageTog = () => {
//   return (
//     <>
//       {/* <input type="password" name="" /> */}

      
//     </>
//   );
// };
export { RenderList };
