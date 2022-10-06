import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = (props) => {

  const [progress, setProgress] = useState(0);


  const apiKey = "784bc950ea6a461da7b8c5980123102e"
  const pageSize = 6;
  const country = "us";
  return (
    <div>
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />}></Route>
        </Routes>
      </Router>
    </div>

  )
}

export default App;



