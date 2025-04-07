
import './App.css'
import { Layout } from './component/layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CustomDataTable } from './component/CustomDataTable'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/customdatapage" element={<CustomDataTable />} />
      </Routes>
    </Router>
  )
}

export default App
