const PackingList = () => {
  return (
    <>
      <Item value={true} name="name1" />
      <Item value={true} name="name2" />
      <Item value={false} name="name3" />
    </>
  );
};

const Item = ({ name, value }) => {
  //method1
    if (value) {
      return <li className="item">{name} ✔</li>;
      // return null;
    }
    else{
      return <del> <li className="item">{name} ✘</li> </del>;
    }

  //   return <li>{value ? name + ' ✔' : name + ' ✘'}</li>; //method2

  //   return <li>{value ? <del>{name + "√"}</del> : name}</li>; //method3

  //method4
  //   return (
  //     <li>
  //       {name}
  //       {value && "√"}
  //     </li>
  //   );

  //method4
  // let xyz = value;
  // if (xyz) {
  //   xyz = name + "√";
  // } else {
  //   xyz = name;
  // }

  // return <li>{xyz}</li>;
};

export { PackingList };
