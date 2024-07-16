import { Profiler } from "./components/profile";
import { Images } from "./components/image";

import "./App.css";
import { OneWayOfProps } from "./components/onewayprops";
import { SecondWayOfProps } from "./components/secondwayprops";
import { ThirdWayOfProps } from "./components/thirdwayofprops";
import { ParentComp } from "./components/parentchild";
import { PackingList } from "./components/conditional";
import { RenderList } from "./components/renderinglist";
import FancyText from "./components1/fancytext";
import InspirationGenerator from "./components1/inspirationgenration";

function App() {
  return (
    <>
      <Profiler />
      <Profiler />
      <br />
      <Images
        imageUrl={
          "https://images.unsplash.com/photo-1715593694322-3443b8863126?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        size={100}
        name={"image name"}
      />

      <div>
        <h4>1st way of props passing</h4>
        <OneWayOfProps />
      </div>

      <div>
        <h4>2nd way of props passing</h4>
        <SecondWayOfProps />
      </div>

      <div>
        <h4>3rd way of props passing</h4>
        <ThirdWayOfProps
          imageUrl={
            "https://images.unsplash.com/photo-1715852637581-0e09305ec8e1?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          size={100}
          name={"image"}
        />
      </div>

      <div>
        <h4>Parent Child</h4>
        <ParentComp
          size={100}
          person={{
            name: "image1",
            imageId:
              "https://images.unsplash.com/photo-1590133076213-ef3cc4b1a70b?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <ParentComp
          size={100}
          person={{
            name: "image1",
            imageId:
              "https://images.unsplash.com/photo-1687570721200-a31d186b9a01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
        <ParentComp
          size={100}
          person={{
            name: "image1",
            imageId:
              "https://images.unsplash.com/photo-1679629595705-e157dfe47452?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />

        {/* //second
        <ParentComp imageUrl = "" person = {{name : "image", size: 100}}/> */}

        <div>
          <h4>Conditional rendering</h4>
          <PackingList/>
        </div>

        <div>
          <h4>Rendering List</h4>
          <RenderList size = {100}/>
        </div>

        <div>
          <h4>UI TREE</h4>
          {/* <FancyText/> */}
          <InspirationGenerator></InspirationGenerator>
        </div>
 
      </div>
    </>
  );
}

export { App };
