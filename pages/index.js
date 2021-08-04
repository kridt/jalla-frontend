import fetch from 'isomorphic-unfetch'
import GoogleMaps from '../components/GoogleMaps'

const Home = ({ menus }) => {

  console.log(menus);

  return(
    

    

    <div className="container">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Member site</a></li>
        </ul>
      </nav>
      
      <h1>Denne hjemmeside tilhører Jalla-Jalla Frederikssundsvej 32</h1>
    </div>
      )
  
}



export default Home


