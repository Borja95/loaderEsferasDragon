import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { useState } from 'react';
import Loader from './Loader';


function App() {

  const [loaderOpen, setloaderOpen] = useState(false);

  return (
    <div className="text-center mt-3">
      
      <Button color='primary' onClick={() => setloaderOpen(!loaderOpen)}>
        Mostrar Loader
      </Button>

      <Loader loaderOpen={loaderOpen}/>

    </div>
  );
}

export default App;
