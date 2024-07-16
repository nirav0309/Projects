import './App.css';
import { List } from './changevalue/changevalue';
import { Counter } from './component1/current';
import { StopWatch } from './component1/stopwatch';
// import { TwoFocus } from './component2/example';
import { InputFocus } from './component2/focus';
import { ScrollView } from './component2/scrollview';
import { DomUpdate } from './component3/domupdate';
import { MountComponent } from './component3/mountthecomponent';
import { MainComponent } from './component3/video';
import { MainChatRoom } from './component4/chatroom';
import { MainApp } from './component5/button';
import { ParentComponent } from './context/contex';
import { FruitsApp } from './context/examplefruit';

function App() {
  return (
    <div className="App">
      <div>
        <h3>Adding a ref to component</h3>
        <Counter/>
        <h4>Stopwatch</h4>
        <StopWatch/>
      </div>

      <div>
        <h3>Focusing a text input using ref</h3>
        <InputFocus />
        {/* <TwoFocus/>  */}

        <h3>ScrollIntoView example using ref and aync scroll</h3>
        <ScrollView/>
      </div>

    <div>
      <h3>Synchronizing with effects</h3>
      <MainComponent/>

      <h3>mount the component</h3>
      <MountComponent/>
      
      <h3>images</h3>
      <ParentComponent/>

      <h3>change value</h3>
      <List/>

      <h3>setColor using useEffect</h3>
      <DomUpdate/>

      <h3>chat room</h3>
      <MainChatRoom/>

      <h3>Reusing Logic with Custom Hooks</h3>
      {/* <CustomHook/> */}

        <MainApp />
        
        <h3>Props example</h3>
        <FruitsApp/>
    </div>
    </div>
  );
}

export default App;
