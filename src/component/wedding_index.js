import { useEffect, useRef } from 'react';

import 'slick-carousel/slick/slick.css';
import AOS from 'aos';
import 'slick-carousel/slick/slick-theme.css';

import wedding4 from '../assets/images/image4.jpg';

import backgournd from '../assets/images/backgournd.jpg';
import codau from '../assets/images/codau.jpg';
import chure from '../assets/images/chure.jpg';
import wedding1 from '../assets/images/wedding-1.jpg';
import wedding2 from '../assets/images/wedding-2.jpg';
import wedding3 from '../assets/images/wedding-3.jpg';


function Carousel() {
  const containerRef = useRef(null);
  const snowContainerRef = useRef(null);
  const snowflakeCountRef = useRef(0);
  const maxSnowflakes = 15;
   useEffect(() => {
    AOS.init({ duration: 800, once: true, mirror: false }); // Giảm duration và tối ưu AOS

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Tạo bông tuyết
            function createSnowflake() {
              if (snowflakeCountRef.current >= maxSnowflakes) return;

              const snowflake = document.createElement('div');
              snowflake.classList.add('snowflake');
              snowflake.style.left = `${Math.random() * 100}vw`;
              snowflake.style.animationDuration = `${Math.random() * 4 + 4}s`; // Thời gian rơi 4-8s
              snowflake.style.opacity = Math.random() * 0.4 + 0.3; // Độ mờ 0.3-0.7
              snowContainerRef.current.appendChild(snowflake);
              snowflakeCountRef.current += 1;

              snowflake.addEventListener('animationend', () => {
                snowflake.remove();
                snowflakeCountRef.current -= 1;
              });
            }

            // Tạo bông tuyết ban đầu
            for (let i = 0; i < 8; i++) { // Giảm số lượng ban đầu
              if (snowflakeCountRef.current < maxSnowflakes) {
                createSnowflake();
              }
            }

            // Tạo bông tuyết liên tục với requestAnimationFrame
            let lastTime = 0;
            function animateSnowflakes(timestamp) {
              if (timestamp - lastTime >= 1200) { // Tăng thời gian tạo lên 1200ms
                if (snowflakeCountRef.current < maxSnowflakes) {
                  createSnowflake();
                }
                lastTime = timestamp;
              }
              // Tiếp tục animation nếu container vẫn trong viewport
              if (snowContainerRef.current) {
                requestAnimationFrame(animateSnowflakes);
              }
            }

            requestAnimationFrame(animateSnowflakes);
          }
        });
      },
      { threshold: 0.2 } // Ngưỡng 20% để kích hoạt sớm
    );

    if (snowContainerRef.current) {
      observer.observe(snowContainerRef.current); // Quan sát snowContainerRef
    }

    return () => {
      if (snowContainerRef.current) {
        observer.unobserve(snowContainerRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Snow container tách biệt để phủ toàn màn hình */}
      <div
        ref={snowContainerRef}
        className="snow-container fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      ></div>

      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-rose-100 w-full overflow-x-hidden relative">
        <div
          className="min-h-screen bg-cover bg-center relative z-10"
          style={{
            backgroundImage: `url(${wedding4})`,
          }}
          data-aos="fade-in"
          data-aos-duration="1200"
        >
          <div
            className="flex flex-col justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="800"
          >
            <div className="text-4xl text-white drop-shadow-lg mt-10 ballet-wedding">
              <h1 data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                Kiều Ly
              </h1>
              <h1 data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                &
              </h1>
              <h1 data-aos="fade-up" data-aos-delay="1200" data-aos-duration="800">
                Minh Tâm
              </h1>
            </div>
          </div>
          <div className="absolute bottom-1 w-full text-3xl text-white mb-10 drop-shadow-lg">
            <h1
              className="text-2xl font-dancing-script font_thumoi"
              data-aos="fade"
              data-aos-delay="1600"
              data-aos-duration="1200"
            >
              THƯ MỜI TIỆC CƯỚI
            </h1>
            <span
              className="absolute left-1/4 transform -translate-x-1/2 bottom-[75px] w-48 h-1"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(255, 255, 255), transparent)',
              }}
              data-aos="fade"
              data-aos-delay="2000"
              data-aos-duration="1200"
            ></span>
            <span>
              <p
                className="text-xl font-playfair-display italic m-0"
                data-aos="fade"
                data-aos-delay="1600"
                data-aos-duration="1200"
              >
                Chủ nhật - 11h00
              </p>
              <p
                className="text-xl font-playfair-display"
                style={{ letterSpacing: '5px', fontWeight: 'bold' }}
                data-aos="fade"
                data-aos-delay="1600"
                data-aos-duration="1200"
              >
                22.6.2025
              </p>
            </span>
          </div>
        </div>

        <div
          className="items-center text-center bg-cover bg-center relative z-10"
          style={{
            backgroundImage: `url(${backgournd})`,
          }}
        >
          <div
            className="font_loiyeu"
            style={{ fontSize: '1.3em' }}
            data-aos="fade"
            data-aos-delay="800"
            data-aos-duration="800"
          >
            <p className="pt-4 m-0">Yêu nhau là chuyện cả đời,</p>
            <span className="m-0">Yêu người vừa ý, cưới người mình thương.</span>
          </div>

          <div>
            <div className="cbox pt-3">
              <div className="row">
                <div
                  className="col-6 text-center"
                  data-aos="fade"
                  data-aos-delay="800"
                  data-aos-duration="1000"
                >
                  <h3 className="text-sm font-bold text-pink-600 mb-2">NHÀ TRAI</h3>
                  <p className="text-sm font-bold text-gray-700">Ông: PHẠM VĂN A</p>
                  <p className="text-sm font-bold text-gray-700">Bà: Lê Thị B</p>
                </div>
                <div
                  className="col-6 col-md-6 text-center"
                  data-aos="fade"
                  data-aos-delay="800"
                  data-aos-duration="1000"
                >
                  <h3 className="text-sm font-bold text-pink-600 mb-2">NHÀ GÁI</h3>
                  <p className="text-sm font-bold text-gray-700">Ông: PHẠM VĂN A</p>
                  <p className="text-sm font-bold text-gray-700">Bà: Lê Thị B</p>
                </div>
              </div>
              <div className="row mt-5 p-3">
                <div
                  className="col-6 text-center"
                  data-aos="fade"
                  data-aos-delay="500"
                  data-aos-duration="800"
                >
                  <h3 className="text-sm font-bold text-pink-600 mb-2">Chú rể</h3>
                  <p
                    className="text-sm font-bold text-gray-700"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                  >
                    Minh Tâm
                  </p>
                </div>
                <div
                  className="col-6 col-md-6 text-center"
                  data-aos="fade"
                  data-aos-delay="500"
                  data-aos-duration="800"
                >
                  <h3 className="text-sm font-bold text-pink-600 mb-2">Cô dâu</h3>
                  <p
                    className="text-sm font-bold text-gray-700"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                  >
                    Kiều Ly
                  </p>
                </div>
                <div
                  ref={containerRef}
                  className="container p-2"
                  style={{
                    backgroundColor: '#003300',
                  }}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                >
                  <div className="row">
                    <div className="col-6">
                      <img
                        src={chure}
                        alt="Chú rể"
                        className="img-fluid shadow"
                        loading="lazy"
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src={codau}
                        alt="Cô dâu"
                        className="img-fluid shadow"
                        loading="lazy"
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <span
              className="absolute left-1/2 transform -translate-x-1/2 w-36 h-1"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(255, 255, 255), transparent)',
              }}
              data-aos="fade"
              data-aos-delay="800"
              data-aos-duration="800"
            ></span>
            <h1
              className="font_thumoi2 mt-3 text-white mb-0"
              style={{ fontSize: '2.2em' }}
              data-aos="fade"
              data-aos-delay="800"
              data-aos-duration="800"
            >
              Thư Mời
            </h1>
            <span
              className="font_lecuoi text-white mt-0"
              data-aos="fade"
              data-aos-delay="1000"
              data-aos-duration="800"
            >
              THAM DỰ LỄ CƯỚI CỦA LY & TÂM
            </span>
          </div>

          <div className="row mt-3 d-flex justify-content-center text-center">
            <div className="col-4 align-content-around">
              <img src={wedding3} alt="Wedding 3" loading="lazy" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" />
            </div>
            <div className="col-4 p-0">
              <img src={wedding1} alt="Wedding 1" className="mx-auto d-block" loading="lazy" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800" />
            </div>
            <div className="col-4 align-content-around">
              <img src={wedding2} alt="Wedding 2" loading="lazy" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800" />
            </div>
          </div>
        </div>

        <div
          className="min-h-screen flex flex-col justify-center items-center text-center p-4 z-10"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
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