import './App.css';
import PriorityAnnouncement from './components/PriorityAnnouncement';
import Announcements from './components/Announcements';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <nav>This is where the navbar will be</nav>
      <PriorityAnnouncement />
      <Announcements />
    </div>
  );
}

export default App;
