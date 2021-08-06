import fetch from 'isomorphic-unfetch'
import Link from 'react-router'

const Menu = ({ menus }) => {

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
      <ol className="menuKort">
          {menus.map(menu => (
            <li key={menu.id}>{menu.nameOfDish}</li>
          ))}
      </ol>
      
    </div>
      )
  
}

export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/menus`)
  const data = await res.json()

  return {
      props: {
          menus: data
      }
  }
}

export default Menu


