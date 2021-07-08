import fetch from 'isomorphic-unfetch'

const Home = ({ menus }) => {

  console.log(menus);

  return(
    
    <div className="container">

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

export default Home


