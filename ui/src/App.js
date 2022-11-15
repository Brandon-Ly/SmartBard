import './App.css';
import NavBar from './components/Navbar'
import PriorityAnnouncement from './components/PriorityAnnouncement';
import Announcements from './components/Announcements';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar />
      <PriorityAnnouncement />
      <Announcements />
    </div>
  );
}

export default App;
