import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CharacterCreation from './pages/CharacterCreation';
import GameShell from './components/GameShell';
import Dashboard from './pages/game/Dashboard';
import MapPage from './pages/game/MapPage';
import WorkPage from './pages/game/WorkPage';
import CrimePage from './pages/game/CrimePage';
import InventoryPage from './pages/game/InventoryPage';
import ProfilePage from './pages/game/ProfilePage';
import CombatPage from './pages/game/CombatPage';
import SocialPage from './pages/game/SocialPage';
import MarketPage from './pages/game/MarketPage';
import SettingsPage from './pages/game/SettingsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CharacterCreation />} />
        <Route path="/game" element={<GameShell />}>
          <Route index element={<Dashboard />} />
          <Route path="map" element={<MapPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="crime" element={<CrimePage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="combat" element={<CombatPage />} />
          <Route path="social" element={<SocialPage />} />
          <Route path="market" element={<MarketPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
