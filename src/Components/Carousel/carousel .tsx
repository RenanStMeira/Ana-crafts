import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import './carousel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
register();

const data = [
  { id:1, image: 'https://i.pinimg.com/236x/d9/09/c6/d909c6805b978ce92dfc147286417f39.jpg' },
  { id:2, image: 'https://img.elo7.com.br/product/original/40474CE/tapete-croche-urso.jpg' },
  { id:3, image: 'https://i.ytimg.com/vi/4bMEh43qfss/maxresdefault.jpg' },
  { id:4, image: 'https://www.casaencanto.com.br/static/60591/sku/tapetes-tapetes-sala-tapete-redondo-de-croche-sala-quarto-1-30m-escandinavo-paris-cinza--p-1646140693478.jpg' },
  { id:5, image: 'https://m.media-amazon.com/images/I/71Oqz-QFeDL._AC_UF894,1000_QL80_.jpg' },

]

export default function Carousel() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3500 }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} className='slide_item' alt={`Slide ${item.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}