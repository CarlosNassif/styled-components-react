import './App.css';

import Input from './components/Input';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Input defaultValue='Without props' type='text' />
        <Input
          defaultValue='With props'
          type='text'
          inputColor='rebeccapurple'
        />
      </Wrapper>
    </div>
  );
}

export default App;
