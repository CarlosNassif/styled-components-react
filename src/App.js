import './App.css';

import { Link, StyledLink } from './components/Link';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Link>Unstyled, boring link</Link>
        <br />
        <StyledLink>Styled, exciting link</StyledLink>
      </Wrapper>
    </div>
  );
}

export default App;
