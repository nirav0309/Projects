import { useNavigate } from "react-router-dom";
import axios from "axios"
const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    // console.log('click');
    // const redirectToExternalResource = url => window.location.href = URL
    // redirectToExternalResource("http://localhost:3000/");

    // let url = "http://localhost:3000";
      // navigate(url);
      
      window.location.replace("http://localhost:3000/");
      
    //   const response = await axios.get("http://localhost:3000");
    //   console.log(response.data)
  };
  return (
    <div>
      <h3>Home Page Content</h3>
      <h1>axios example and also this is suspense and lazy example</h1>
      <button onClick={handleClick}>Navigate</button>
    </div>
  );
};

export { HomePage };
