import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {foodItem} from "./Data"
function App() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="App">

      <div className='main'>

      <div className="heading">
        <h1>Foodie</h1>
      <div className="para">
       <p> Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.</p>
      </div>
      </div>
      <Slider {...settings}>
      {foodItem.map((item) => (
         <div className="card">
         <div className="card-top">
          <img src={item.cover} className="img" alt={item.title} />
                 
          </div>
         <div className='card-bottom'>
         <p> {item.title}, {item.price}</p>
         </div>
        </div>

      ))}
      </Slider>
     
    
      </div> 
    </div>
  );
}

export default App;
