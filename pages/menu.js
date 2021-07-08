import fetch from 'isomorphic-unfetch'

const Menu = ({ menus }) => {

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


