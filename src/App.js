import toast, { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router';

function App() {


  return (
    <div className="App">
      <RouterProvider router={router}>
        <Toaster />
      </RouterProvider>

    </div>
  );
}

export default App;
