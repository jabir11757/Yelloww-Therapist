import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';

function App() {
  return (
    <div className="w-[1244px] mx-auto">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
