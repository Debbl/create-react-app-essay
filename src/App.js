import './mock.js';
import axios from 'axios';

function App() {
  axios.get('/api').then((res) => {
    console.log(res);
  });
  return (
    <div className="App">
      <h2>App</h2>
    </div>
  );
}

export default App;
