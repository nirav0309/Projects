import { CustomHook } from "./customhook";


const MainApp = () =>{
    return (
        <>
            <SaveButton/>
            <StatusBar/>
        </>
    )
}
const StatusBar = () => {
  const isOnline = CustomHook();
  return <h2>{isOnline ? "✅ Online" : "❌ Disconnected"}</h2>;
};

const SaveButton = () => {
    const isOnline = CustomHook();
     const handleSaveClick = () =>{
        console.log('✅ Progress saved')
     }
  return (
    <div>
      <button disabled={!isOnline} onClick={handleSaveClick}>
        {isOnline ? "Save progress" : "Reconnecting..."}
      </button>
    </div>
  );
};


export {MainApp}

