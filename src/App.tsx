import { Scene } from '@designcombo/scene';
import { Timeline } from '@designcombo/timeline';
import HeaderLeft from './components/header-left';
import HeaderRight from './components/header-right';

function App() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col bg-grey-1000">
        <HeaderLeft />
        <HeaderRight />
        <div className="flex-1">
          <Scene padding={160} />
        </div>
        <div className="h-80">
          <Timeline />
        </div>
      </div>
    </>
  );
}

export default App;
