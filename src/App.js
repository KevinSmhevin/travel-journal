
import './index.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import TravelPost from './components/TravelPost';
import data from "./data"

function App() {
  const travelPosts = data.map(entry => {
    return (
      <TravelPost
        key={entry.id}
        entry={entry}
      />
    )
  })
  return (
    <div className="App">
      <Navbar/>
      <main>
      {travelPosts}
     </main>
    </div>
  );
}

export default App;
