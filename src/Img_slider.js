import './Home.css'
function Slider() {
  return (
  <>
    <div class="img_slider">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://gumlet.assettype.com/newslaundry/2020-04/c3d2c928-4536-4361-aac4-21a6eba5c5f7/coronaindia.jpg?w=1200&h=675" alt="First slide" />        </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="          https://media.defense.gov/2020/Mar/09/2002261406/-1/-1/0/200309-D-HN545-003.JPG" alt="Third slide">
         </img> </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://i.vimeocdn.com/video/867061656_640x360.jpg" alt="Third slide">
         </img> </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" alt="Third slide">
         </img> </div>
          
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
</div></>
  );
}

export default Slider;
