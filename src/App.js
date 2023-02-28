import './App.css';

import Button from './components/Button';
import ReverseButton from './components/CustomButton';
import TomatoButton from './components/TomatoButton';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Button>Normal Button Without link</Button>
        <Button as='a' href='#'>
          Normal Button with link
        </Button>
        <TomatoButton as='a' href='#'>
          TomatoButton with link
        </TomatoButton>
        <Button as={ReverseButton}>
          Custom Button with Normal Button styles
        </Button>
      </Wrapper>
    </div>
  );
}

export default App;
