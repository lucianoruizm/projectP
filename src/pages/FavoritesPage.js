import Card from "../components/Card/Card";

export const FavoritesPage = () => {
   
  let favList = [{}];
  const getArray = JSON.parse(localStorage.getItem('favorites') || '0');
  for (let i = 0; i < getArray.length; i++) {
      let x = getArray[i];
      favList[i] = JSON.parse(localStorage.getItem('favItem' + [x]) || '');
  }

  return (
    <div>
        <h1>Favorites:</h1>
        <Card results={favList} />
    </div>
  )
}
