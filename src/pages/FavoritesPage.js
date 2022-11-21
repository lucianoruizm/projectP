import { Link } from "react-router-dom";
import { Card } from "../components/Card/Card";
import logo from '../images/panaleraMibbLogo-removebg-preview.png';
import './FavoritesPage.css';

export const FavoritesPage = () => {

  let favList = [{}];
  const getArray = JSON.parse(localStorage.getItem('favorites') || '0');
  let exist;

  for (let i = 0; i < getArray.length; i++) {
      let x = getArray[i];
      favList[i] = JSON.parse(localStorage.getItem('favItem' + [x]) || '');
  }

  if(Object.entries(getArray).length === 0){
    exist = false;
  } else {
    exist = true;
  }

  return (
    <div>
      <div className="logo-container">
        <Link to={'/'}>
            <img src={logo} alt='logo' className='logo-favs-section'/>
        </Link>
      </div>
      <h1 className="favs-title">Mis Favoritos</h1>
      <div className="grid-container">
        { exist? <Card results={favList} exist={exist} /> : <div className='message'>No se encuentra una lista de favoritos, podes agregar los productos haciendo click en su ❤</div>}
      </div>
    </div>
  )
}