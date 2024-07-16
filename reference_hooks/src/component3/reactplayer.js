import ReactPlayer from "react-player";

const ReactPlayerExample = () => {
  return (
    <>
      <ReactPlayer url="https://www.youtube.com/watch?v=5uiv8MFD1rc&t=27s" />
    </>
  );
};

export { ReactPlayerExample };

function AppMy1() {
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  }

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  }

  return (
    <div>
      <button onClick={toggle1}>Player 1</button>
      <button onClick={toggle2}>Player 2</button>
    </div>
  );
}

export default AppMy1;
