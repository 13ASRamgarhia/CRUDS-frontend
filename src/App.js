import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './Components/Landing';
import HomePage from './Components/HomePage';
import PageNotFound from './Components/PageNotFound';
import { useEffect } from 'react';

function App() {
  const [progress, setProgress] = useState(0)
  const location = useLocation()

  useEffect(() => {
    try{
      setProgress(10)
      setTimeout(() => {setProgress(100)}, 0)
    }
    catch{
      setProgress(100)
    }
  }, [location])

  return (
    <div className="App bg-landingBG min-h-screen bg-auto laptop:bg-cover bg-no-repeat relative overflow-y-hidden overflow-x-hidden">
      <div className="absolute bg-black/40 min-h-full w-full">
        <LoadingBar
          color='#fff'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/Home" element={<HomePage />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
