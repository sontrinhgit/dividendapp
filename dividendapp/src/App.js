
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CompanyInfo from './component/CompanyInfo';

function App() {

  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://gist.githubusercontent.com/VincentLeV/a0c326b9cbeabf63b4e5e02aa9779f6c/raw/b916a9e3d40aef926bf7e3b9b4db308d7da1ca5d/shares.json')
        console.log(response.data)
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    
  }, [])


  return (
    <div className="App">
      <CompanyInfo data = {data} />
    </div>
  );
}

export default App;
