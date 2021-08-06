import fetch from 'isomorphic-unfetch'
import GoogleMaps from '../components/GoogleMaps'
import Link from 'react-router'

const Home = ({ menus }) => {

  console.log(menus);

  return(
    

    

    <div className="container">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Member site</Link></li>
        </ul>
      </nav>
      
      <h1>Denne hjemmeside tilhører Jalla-Jalla Frederikssundsvej 32</h1>
    </div>
      )
  
}



export default Home


