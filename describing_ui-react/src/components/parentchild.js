import { GetImageUrl } from "./getimageurl";

const ParentComp = ({ size, person }) => {
  return (
    <>
      <img
        src={GetImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </>
  );
};

//secont
// const ParentComp = ({imageUrl, person}) =>{
//     return (
//         <>
//             <img src={imageUrl} alt={person.name} width={person.size} />
//         </>
//     )
// }
export { ParentComp };


