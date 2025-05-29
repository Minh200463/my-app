import { useEffect, useRef } from 'react';

import AOS from 'aos';


import wedding4 from '../assets/images/image4.jpg';

import backgournd from '../assets/images/backgournd.jpg';
import codau from '../assets/images/codau.jpg';
import chure from '../assets/images/chure.jpg';
import wedding1 from '../assets/images/wedding-1.jpg';
import wedding2 from '../assets/images/wedding-2.jpg';
import wedding3 from '../assets/images/wedding-3.jpg';


function Carousel() {
 const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 600, once: true, mirror: false });

    // Tạo bông tuyết động
    const snowContainer = document.querySelector('.snow-container');
    const snowCount = 15; // Số lượng bông tuyết
    for (let i = 0; i < snowCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      snowflake.style.animationDuration = `${5 + Math.random() * 5}s`;
      snowflake.style.opacity = `${0.5 + Math.random() * 0.5}`;
      snowContainer.appendChild(snowflake);
    }

    // IntersectionObserver để tạm dừng bông tuyết
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          snowContainer.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
        });
      },
      { threshold: 0.1 }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);
  return (
    <div className="relative">
      {/* Snow container tách biệt để phủ toàn màn hình */}
      <div className="snow-container fixed top-0 left-0 w-full h-full pointer-events-none z-50"></div>

      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-rose-100 w-full overflow-x-hidden relative">
        <div
          className="min-h-screen bg-cover bg-center relative z-10"
          style={{
            backgroundImage: `url(${wedding4})`,
          }}
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div
            className="flex flex-col justify-center items-center"
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="1000"
          >
            <div className="text-4xl text-white drop-shadow-lg mt-10 ballet-wedding">
              <h1>Kiều Ly</h1>
              <h1>&</h1>
              <h1>Minh Tâm</h1>
            </div>
          </div>
          <div
            className="absolute bottom-1 w-full text-3xl text-white mb-10 drop-shadow-lg"

          >
            <h1 className="text-2xl font-dancing-script font_thumoi" data-aos="fade"
              data-aos-delay="2000"
              data-aos-duration="2000">THƯ MỜI TIỆC CƯỚI</h1>
            <span
              className="absolute left-1/4 transform -translate-x-1/2 bottom-[75px] w-48 h-1"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(255, 255, 255), transparent)',
              }}
              data-aos="zoom-in"
              data-aos-delay="2700"
              data-aos-duration="2000"
            ></span>
            <span data-aos="zoom-in"
              data-aos-delay="2000"
              data-aos-duration="2000">
              <p className="text-xl font-playfair-display italic m-0">Chủ nhật - 11h00</p>
              <p
                className="text-xl font-playfair-display"
                style={{ letterSpacing: '5px', fontWeight: 'bold' }}
              >
                22.6.2025
              </p>
            </span>

          </div>
        </div>

        <div
          className="items-center text-center  bg-cover bg-center relative z-10"
          style={{
            backgroundImage: `url(${backgournd})`,
          }}
        >
          <div className='font_loiyeu' style={{ fontSize: '1.3em' }} data-aos="fade"
            data-aos-delay="1000"
            data-aos-duration="1000">
            <p className='pt-4 m-0'>Yêu nhau là chuyện cả đời,</p>
            <span className='m-0'>Yêu người vừa ý, cưới người mình thương.</span>
          </div>


          <div >
            <div className="cbox pt-3">
              <div className="row" >
                {/* Cột 1: Cha mẹ chú rể */}
                <div className="col-6 text-center" data-aos="fade"
                  data-aos-delay="1000" data-aos-duration="1300">
                  <h3 className="text-sm font-bold text-pink-600 mb-2">NHÀ TRAI</h3>
                  <p className="text-sm font-bold text-gray-700">Ông: PHẠM VĂN A</p>
                  <p className="text-sm font-bold text-gray-700">Bà: Lê Thị B</p>
                </div>
                {/* Cột 2: Cha mẹ cô dâu */}
                <div className="col-6 col-md-6 text-center" data-aos="fade"
                  data-aos-delay="1000" data-aos-duration="1300">
                  <h3 className="text-sm font-bold text-pink-600 mb-2">NHÀ GÁI</h3>
                  <p className="text-sm font-bold text-gray-700">Ông: PHẠM VĂN A</p>
                  <p className="text-sm font-bold text-gray-700">Bà: Lê Thị B</p>
                </div>

              </div>
              <div className='row mt-5 p-3'>
                <div className="col-6 text-center" >
                  <h3 className="text-sm font-bold text-pink-600 mb-2"
                    data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000">Chú rể</h3>
                  <p className="text-sm font-bold text-gray-700 custom-aos"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1700"
                  >Minh Tâm</p>
                </div>
                {/* Cột 2: Cha mẹ cô dâu */}
                <div className="col-6 col-md-6 text-center"
                >
                  <h3 className="text-sm font-bold text-pink-600 mb-2" data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000">Cô dâu</h3>
                  <p className="text-sm font-bold text-gray-700 custom-aos"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1700">Kiều Ly</p>
                </div>
                <div
                  className='container p-2'
                  style={{
                    backgroundColor: '#003300'
                  }}
                  data-aos="fade-in"

                >
                  <div className='row'>
                    <div className='col-6'>
                      <img
                        src={chure}
                        alt="Cô dâu"
                        className="img-fluid shadow"
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="2000"
                      />
                    </div>
                    <div className='col-6'>
                      <img
                        src={codau}
                        alt="Cô dâu"
                        className="img-fluid shadow"
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="2000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='relative'>
            <span
              className="absolute left-1/2 transform -translate-x-1/2 bottom w-36 h-1"
              style={{
                background: 'linear-gradient(rgba(255,2550,255), transparent)',
              }}
            ></span>
          </div>
          <h1 className='font_thumoi2 mt-3 text-white mb-0' style={{ fontSize: '2.2em' }}>Thư Mời</h1>
          <span className='font_lecuoi text-white mt-0'>THAM DỰ LỄ CƯỚI CỦA LY & TÂM</span>


          <div className='row mt-3 d-flex justify-content-center text-center'>
            <div className='col-4 align-content-around'>
              <img src={wedding3} loading="lazy" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1200"/>
            </div>
            <div className='col-4 p-0'>
               <img src={wedding1} loading="lazy" data-aos="fade" data-aos-delay="300" data-aos-duration="1000"/>
            </div>
            <div className='col-4 align-content-around'>
               <img src={wedding2} loading="lazy" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1200"/>
            </div>
          
          </div>
        </div>

        <div
          className="min-h-screen flex flex-col justify-center items-center text-center p-4 z-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Xác Nhận Tham Dự</h2>
          <button
            className="bg-pink-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform"
            onClick={() => alert('Cảm ơn bạn đã xác nhận tham dự!')}
          >
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
}
export default Carousel;