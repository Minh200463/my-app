import { useEffect, useRef } from 'react';

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
    // Tạo bông tuyết động
    const snowContainer = document.querySelector('.snow-container');
    const snowCount = 10; // Giảm số bông tuyết để nhẹ hơn
    for (let i = 0; i < snowCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      snowflake.style.animationDuration = `${3 + Math.random() * 3}s`; // Nhanh hơn
      snowflake.style.opacity = `${0.5 + Math.random() * 0.5}`;
      snowContainer.appendChild(snowflake);
    }

    // IntersectionObserver cho bông tuyết
    const snowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          snowContainer.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
        });
      },
      { threshold: 0.1 }
    );

    // IntersectionObserver cho animation các phần tử
    const elements = document.querySelectorAll('.animate');
    const animateObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            animateObserver.unobserve(entry.target); // Chỉ chạy một lần
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => animateObserver.observe(el));

    const currentContainer = containerRef.current;
    if (currentContainer) {
      snowObserver.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        snowObserver.unobserve(currentContainer);
      }
      elements.forEach((el) => animateObserver.unobserve(el));
    };
  }, []);
  return (
     <div className="relative">
      <div className="snow-container"></div>

      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-rose-100 w-full overflow-x-hidden relative">
        <div
          className="min-h-screen bg-cover bg-center relative z-10"
          style={{ backgroundImage: `url(${wedding4})` }}
        >
          <div className="flex flex-col justify-center items-center">
            <div className="text-4xl text-white drop-shadow-lg mt-10 animate ballet-wedding" data-animate="fade-up">
              <h1 className="animate" data-animate="fade-up" data-delay="0.2s">
                Kiều Ly
              </h1>
              <h1 className="animate" data-animate="fade-up" data-delay="0.3s">
                &
              </h1>
              <h1 className="animate" data-animate="fade-up" data-delay="0.4s">
                Minh Tâm
              </h1>
            </div>
          </div>
          <div className="absolute bottom-4 w-full text-center text-white mb-10 drop-shadow-lg">
            <h1
              className="text-2xl font-dancing-script animate"
              data-animate="fade"
              data-delay="0.6s"
            >
              THƯ MỜI TIỆC CƯỚI
            </h1>
            <span
              className="absolute left-1/2 transform -translate-x-1/2 bottom-[75px] w-48 h-1 animate"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(255, 255, 255), transparent)',
              }}
              data-animate="fade"
              data-delay="0.8s"
            ></span>
            <span>
              <p
                className="text-xl font-playfair-display italic m-0 animate"
                data-animate="fade"
                data-delay="0.6s"
              >
                Chủ nhật - 11h00
              </p>
              <p
                className="text-xl font-playfair-display animate"
                style={{ letterSpacing: '5px', fontWeight: 'bold' }}
                data-animate="fade"
                data-delay="0.6s"
              >
                22.6.2025
              </p>
            </span>
          </div>
        </div>

        <div
          className="items-center text-center bg-cover bg-center relative z-10"
          style={{ backgroundImage: `url(${backgournd})` }}
        >
          <div
            className="font_loiyeu animate"
            style={{ fontSize: '1.3em' }}
            data-animate="fade"
            data-delay="0.1s"
          >
            <p className="pt-4 m-0">Yêu nhau là chuyện cả đời,</p>
            <span className="m-0">Yêu người vừa ý, cưới người mình thương.</span>
          </div>

          <div>
            <div className="cbox pt-3">
              <div className="row">
                <div className="col-6 text-center animate" data-animate="fade" data-delay="0.1s">
                  <h3 className="text-sm font-bold text-pink-600 mb-2">NHÀ TRAI</h3>
                  <p className="text-sm font-bold text-gray-700">Ông: PHẠM VĂN A</p>
                  <p className="text-sm font-bold text-gray-700">Bà: Lê Thị B</p>
                </div>
                <div className="col-6 col-md-6 text-center animate" data-animate="fade" data-delay="0.1s">
                  <h3 className="text-sm font-bold text-pink-600 mb-2">NHÀ GÁI</h3>
                  <p className="text-sm font-bold text-gray-700">Ông: PHẠM VĂN A</p>
                  <p className="text-sm font-bold text-gray-700">Bà: Lê Thị B</p>
                </div>
              </div>
              <div className="row mt-5 p-3">
                <div className="col-6 text-center animate" data-animate="fade" data-delay="0s">
                  <h3 className="text-sm font-bold text-pink-600 mb-2">Chú rể</h3>
                  <p
                    className="text-sm font-bold text-gray-700 animate"
                    data-animate="fade-up"
                    data-delay="0.1s"
                  >
                    Minh Tâm
                  </p>
                </div>
                <div className="col-6 col-md-6 text-center animate" data-animate="fade" data-delay="0s">
                  <h3 className="text-sm font-bold text-pink-600 mb-2">Cô dâu</h3>
                  <p
                    className="text-sm font-bold text-gray-700 animate"
                    data-animate="fade-up"
                    data-delay="0.1s"
                  >
                    Kiều Ly
                  </p>
                </div>
                <div
                  ref={containerRef}
                  className="container p-2 animate"
                  style={{ backgroundColor: '#003300' }}
                  data-animate="fade-in"
                >
                  <div className="row">
                    <div className="col-6">
                      <img
                        src={chure}
                        alt="Chú rể Minh Tâm"
                        className="img-fluid shadow animate"
                        loading="lazy"
                        data-animate="fade-right"
                        data-delay="0.1s"
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src={codau}
                        alt="Cô dâu Kiều Ly"
                        className="img-fluid shadow animate"
                        loading="lazy"
                        data-animate="fade-left"
                        data-delay="0.1s"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <span
              className="absolute left-1/2 transform -translate-x-1/2 w-36 h-1 animate"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(255, 255, 255), transparent)',
              }}
              data-animate="fade"
              data-delay="0.1s"
            ></span>
            <h1
              className="font_thumoi2 mt-3 text-white mb-0 animate"
              style={{ fontSize: '2.2em' }}
              data-animate="fade"
              data-delay="0.1s"
            >
              Thư Mời
            </h1>
            <span
              className="font_lecuoi text-white mt-0 animate"
              data-animate="fade"
              data-delay="0.2s"
            >
              THAM DỰ LỄ CƯỚI CỦA LY & TÂM
            </span>
          </div>

          <div className="row mt-3 d-flex justify-content-center text-center">
            <div className="col-4 align-content-around">
              <img
                src={wedding3}
                alt="Ảnh cưới kỷ niệm"
                loading="lazy"
                className="animate"
                data-animate="fade-right"
                data-delay="1s"
              />
            </div>
            <div className="col-4 p-0">
              <img
                src={wedding1}
                alt="Ảnh cưới lãng mạn"
                className="mx-auto d-block animate"
                loading="lazy"
                data-animate="fade-up"
                data-delay="0.2s"
              />
            </div>
            <div className="col-4 align-content-around">
              <img
                src={wedding2}
                alt="Ảnh cưới hạnh phúc"
                loading="lazy"
                className="animate"
                data-animate="fade-left"
                data-delay="1s"
              />
            </div>
          </div>
        </div>

        <div className="min-h-screen flex flex-col justify-center items-center text-center p-4 z-10 relative">
          <h2
            className="text-2xl font-bold text-pink-600 mb-4 animate"
            data-animate="fade-up"
            data-delay="0.1s"
          >
            Xác Nhận Tham Dự
          </h2>
          <button
            className="bg-pink-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform animate"
            data-animate="fade"
            data-delay="0.2s"
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