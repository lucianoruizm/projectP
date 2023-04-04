import './SlideshowGallery.css';

export const SlideshowGallery = () => {

  return (
    <div className='headMainContainer'>
        <div className='mainTitle'>
           <h3>Bienvenidos a Pañalera Mi Bebé!</h3>
           <p>Pañales, ropa y accesorios para los más pequeñitos.</p>
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
    </div>
  );
}