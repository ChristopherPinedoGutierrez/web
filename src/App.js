import { HashRouter } from 'react-router-dom';
import { CustomTheme } from './resources/styles/customTheme';
import { Router } from './main/router';

function App() {
  return (
    <HashRouter>
      <CustomTheme>
        <Router />
      </CustomTheme>
    </HashRouter>
  );
}

export default App;
