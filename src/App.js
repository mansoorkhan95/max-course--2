import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetUps from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <p>hi</p>
      <div>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<AllMeetupsPage />}></Route>
              <Route path="/new-meetups" element={<NewMeetUps />}></Route>
              <Route path="/favorites" element={<Favorites />}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
