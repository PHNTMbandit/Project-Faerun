import AbilityScorePage from "./pages/AbilityScoreInformationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavigationBar from "./pages/MainNavigationBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/ability-score-information"
          element={
            <div>
              <MainNavigationBar />
              <AbilityScorePage />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
