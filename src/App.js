import {BrowserRouter, Link} from 'react-router-dom';
import AppRoutes from './router';
function App() {
  return (
    <BrowserRouter>
      <Link to={'about'}>about</Link>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
