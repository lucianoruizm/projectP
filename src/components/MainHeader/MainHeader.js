import './MainHeader.css';

export const MainHeader = () => {

  return (
    <div className='headMainContainer'>
        <div className='mainTitle'>
           <div className="principalTitle">
             <h3 className='grid1'>Pañalera</h3>
             <h3 className='grid2'>Mi Bebé</h3>
           </div>
           <p>Pañales, ropa y accesorios para los más pequeñitos</p>
        </div>
        <div className="gridTitles">
          <div className='items'>
            <h4>¿Ya sabés que pañal vas a elegir para tu recién nacido?</h4>
            <p>En pañalera Mi Bebé, podés contar con diversas marcas.</p>
          </div>
          <div className='items'>
            <h4>Ropa para tu pequeño/a!</h4>
            <p>Encontra el conjunto que mejor se adapte.</p>
          </div>
          <div className='items'>
            <h4>También contamos con los mejores tejidos!</h4>
            <p>Desde gorros hasta peluches.</p>
          </div>
        </div>
        <h1 id="h1">↓ Nuestros Productos ↓</h1>
    </div>
  );
}