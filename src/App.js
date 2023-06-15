import React, { useState } from "react";
import './App.css';
import Form from './Form/Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SummaryPage from './Form/SummaryPage';

function App() {
  const [formData, setFormData] = useState([]);
 const[FromBack,setFromBack] = useState("");
 const [formCount, setFormCount] = useState(1);
  // Handle function to update formData
  const handleFormSubmit = (data) => {
    setFormData(data);
  };
  console.log(formCount,"formCountformCountformCount");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Form onSubmit={handleFormSubmit} formData={formData}setFormCount={setFormCount} formCount={formCount} setFormData={setFormData} FromBack={FromBack} setFromBack={setFromBack}/> } />
          <Route path="/about" element={<SummaryPage formData={formData} onSubmit={handleFormSubmit} setFormCount={setFormCount} formCount={formCount}  FromBack={FromBack} setFromBack={setFromBack}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
