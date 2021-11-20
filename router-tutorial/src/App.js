import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import Home from './Home';
import About from './About';
import { Link } from 'react-router-dom';
import Profile from './Profile';

const App = ()=>{
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact/>
      <Route path={['/about', '/info']} component={About}/>
      <Route path="/profile/:username" component={Profile}/>
    </div>
  )
}

export default App;
