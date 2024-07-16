const ThirdWayOfProps = (props) => {
  let xyz = props.name;
  let xyz1 = props.imageUrl;
  let xyz2 = props.size;
  return (
    <>
      <img src={xyz1} alt={xyz} height={xyz2} width={xyz2} />
    </>
  );
};

export { ThirdWayOfProps };