import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import For from './component/For';
import Request from './component/Request';
import Tada from './component/Tada';
import { useParams } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root to '/Maya' */}
        <Route path="/" element={<Navigate to="/Maya" replace />} />

        {/* Dynamic route for username */}
        <Route
          path="/:username"
          element={
            <AppContent />
          }
        />
      </Routes>
    </Router>
  );
}

// AppContent handles rendering the For, Request, and Tada components
const AppContent = () => {
  const [showRequest, setShowRequest] = useState(false);
  const [showTada, setShowTada] = useState(false);
  const [isForClicked, setIsForClicked] = useState(false);

  const handleForClick = () => {
    setIsForClicked(true);
    setTimeout(() => setShowRequest(true), 500);
  };

  const handleYesClick = () => {
    setShowTada(true);
  };

  // Use the username from the URL or fallback to "Maya"
  const { username } = useParams();
  const currentUsername = username || "Maya"; // Default to "Maya" if no username is found

  return (
    <div className="App">
      {/* Show the For component if the Request page is not shown */}
      {!showRequest && (
        <div
          className={`for-card ${isForClicked ? 'move-down' : ''}`}
          onClick={handleForClick}
        >
          <For username={currentUsername} isForClicked={isForClicked} />
        </div>
      )}

      {/* Show Request component if showRequest state is true */}
      {showRequest && !showTada && (
        <div className={`request-container ${showRequest ? 'show' : ''}`}>
          <Request handleYesClick={handleYesClick} />
        </div>
      )}

      {/* Show Tada component with sliding transition */}
      {showTada && <Tada />}
    </div>
  );
}

export default App;
