// const Images = (props) => {
//     let xyz = props.name;
//     return (
//     <>
//       <img
//         alt = {xyz}
//       />
      
//     </>
//   );
// };

const Images = ({imageUrl, size, name}) => {

    return (
    <>
      <img
        src={imageUrl}
        width={size}
        alt= {name}
        height={size}
      />
    </>
  );
};

export { Images };
