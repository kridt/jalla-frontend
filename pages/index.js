import fetch from 'isomorphic-unfetch'

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
      
      
    </div>
      )
  
}



export default Home


