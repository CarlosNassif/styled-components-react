import './App.css';
import Button from './components/ButtonWithProps';

import Title from './components/Title';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Button>Normal</Button>
        <Button primary>Button with props</Button>
      </Wrapper>
    </div>
  );
}

export default App;
