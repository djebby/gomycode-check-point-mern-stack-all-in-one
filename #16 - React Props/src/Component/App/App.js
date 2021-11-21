import Profile from '../Profile/Profile.js';
import pImg from '../../ProfilePic.jpg';
import "./app.css";
function App () {

  return (
    <div className="App">
      <Profile fullName="Firas Djebby" bio="bachelor degree in networking & telecommunications" profession="web developer" imge={pImg} />
    </div>
    );
}

export default App;
