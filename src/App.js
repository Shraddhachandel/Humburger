
import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './Utils/store';

function App() {
  return (
    <div>
      <Provider store={store}>   
       <Head/>
      <Body/>
      </Provider>

    </div>
  );
}

export default App;
