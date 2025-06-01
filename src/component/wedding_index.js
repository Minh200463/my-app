import { useEffect, useRef, useState } from 'react';

import wedding4 from '../assets/images/image4.jpg';
import backgournd from '../assets/images/backgournd.jpg';
import codau from '../assets/images/codau.jpg';
import chure from '../assets/images/chure.jpg';
import wedding1 from '../assets/images/wedding-1.jpg';
import wedding2 from '../assets/images/wedding-2.jpg';
import wedding3 from '../assets/images/wedding-3.jpg';
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import { motion, AnimatePresence } from 'framer-motion'
import InvitationForm from './invitationForm';


function Carousel() {
const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Khóa cuộn khi modal mở
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccessModalOpen(false);
    document.body.style.overflow = "auto"; // Mở lại cuộn khi modal đóng
  };


  // Animation variants cho modal
  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3, ease: "easeIn" } },
  };

//googlemap
  const directionLink = "https://maps.app.goo.gl/dsY7U99mTDDKaRUx8";
  const handleOpenMap = () => {
    window.open(directionLink, '_blank');
  };
  const floatAnimation = {
    float: {
      y: [0, -10, 5], // Di chuyển lên xuống (từ 0 đến -10px rồi về 0)
      transition: {
        duration: 2, // Thời gian một chu kỳ animation
        repeat: Infinity, // Lặp lại vô hạn
        ease: 'easeInOut', // Hiệu ứng mượt mà
      },
    },
    float2: {
      y: [0, -10, 0], // Di chuyển lên xuống (từ 0 đến -10px rồi về 0)
      transition: {
        duration: 2, // Thời gian một chu kỳ animation
        repeat: Infinity, // Lặp lại vô hạn
        ease: 'easeInOut', // Hiệu ứng mượt mà
      },
    },
    float3: {
      y: [5, -10, 5], // Di chuyển lên xuống (từ 0 đến -10px rồi về 0)
      transition: {
        duration: 2, // Thời gian một chu kỳ animation
        repeat: Infinity, // Lặp lại vô hạn
        ease: 'easeInOut', // Hiệu ứng mượt mà
      },
    },
  };
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
                data-animate="fade"
                data-delay="2s"
              />
            </div>
            <div className="col-4 p-0">
              <img
                src={wedding1}
                alt="Ảnh cưới lãng mạn"
                className="mx-auto d-block animate"
                loading="lazy"
                data-animate="fade-up"
                data-delay="2s"
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

          <h1 className='text-center'>TIỆC MỪNG LỄ VU QUY</h1>
          <div >
            <span>Vào lúc <b>11h00 | CHỦ NHẬT</b></span>
            <div className="date-form d-flex justify-content-around align-content-center">
              <span className="label">Tháng 6</span>
              <span className='pipe'>|</span>
              22
              <span className="pipe">|</span>
              2025
            </div>
            <i>(Tức ngày 22 tháng 6 năm Giáp Ngọ)</i>
          </div>



          <div className='calendar-container'>
            <div className='left-section'>
              <h1 className='title'>Save</h1>
              <span className='title-middle'>the</span>
              <h1 className='title'>Date</h1>
            </div>
            <div className='right-section'>
              <div className='couple-info'>
                <h1>Tâm & Ly</h1>
                <p className='underline'>ARE GETTING MARRIED!</p>
              </div>
              <div className='date-info'>June 2025</div>
              <div className='calendar-grid'>
                <div className='day-name'>Sun</div>
                <div className='day-name'>Mon</div>
                <div className='day-name'>Tue</div>
                <div className='day-name'>Wed</div>
                <div className='day-name'>Thu</div>
                <div className='day-name'>Fri</div>
                <div className='day-name'>Sat</div>
                <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div>
                <div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div>
                <div>15</div><div>16</div><div>17</div><div>18</div><div>19</div><div>20</div><div>21</div>
                <div>22</div><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div><div>28</div>
                <div>29</div><div>30</div>
              </div>
              <div className='follow-note'>formal invitation to follow</div>
            </div>
          </div>



          <div className="map-container">
            <div>Địa điểm tổ chức</div>
            <p className="map-address">123 Wedding Road, Ho Chi Minh City, Vietnam</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.2266760293032!2d108.10078709678956!3d15.579533300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169f9004af3c39d%3A0x54da01d2d65995b!2zTmjDoCBow6BuZyBLw6wgSMawxqFuZw!5e0!3m2!1svi!2s!4v1748626215262!5m2!1svi!2s" width='100%' height='450' style={{ border: 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' title='đường đi'></iframe>
            <button
              onClick={handleOpenMap}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Xem đường đi
            </button>
          </div>

          <div className='album-wedding'>
            <span>Ablum ảnh cưới</span><span>---------</span>

            <div className='album-wedding container mx-auto p-4'>
              <h2 className="text-3xl font-great-vibes text-center text-gray-800 mb-6">Wedding Memories</h2>
              <div className='grid grid-cols-2 gap-2'>
                <motion.img src={wedding1} alt="Wedding 1" variants={floatAnimation} animate="float" className='w-full h-auto object-cover rounded-lg transform -translate-y-2 animate'
                  data-animate="fade-right"
                  data-delay="1s" />
                  <motion.img src={wedding2} alt="Wedding 2" variants={floatAnimation} animate="float2" className='w-full h-auto object-cover rounded-lg transform -translate-y-2 animate'
                  data-animate="fade-left"
                  data-delay="1s" />
                {/* <img src={wedding1} alt='Wedding 2' className='w-full h-auto object-cover rounded-lg transform -translate-y-2' /> */}
              </div>
              <div className='grid grid-cols-3 gap-2'>
                <motion.img src={wedding1} alt="Wedding 3" variants={floatAnimation} animate="float3" className='w-full h-auto object-cover rounded-lg transform -translate-y-2 animate'
                  data-animate="fade"
                  data-delay="1s"/>
                <motion.img src={wedding1} alt="Wedding 4" variants={floatAnimation} animate="float" className='w-full h-auto object-cover rounded-lg transform -translate-y-2 animate'
                  data-animate="fade"
                  data-delay="1s"/>
                
                <motion.img src={wedding1} alt="Wedding 5" variants={floatAnimation} animate="float3" className='w-full h-auto object-cover rounded-lg transform -translate-y-2 animate'
                  data-animate="fade"
                  data-delay="1s"/>

              </div>
              <div className="grid grid-cols-2">
                <div className="row-span-2">
                  <motion.img
                    src={wedding1}
                    alt="Wedding 5" style={{ width: '90%' }}
                    variants={floatAnimation}
                    animate="float3" 
                    className=' h-auto object-cover rounded-lg translate-y-42'
                  />
                </div>
                <div className='flex flex-col gap-2 '>
                  <motion.img
                    src={banner1}
                    variants={floatAnimation}
                    animate="float2"
                    alt="Wedding 7"
                    className='h-auto object-cover rounded-lg translate-y-4'
                  />
                  <motion.img
                    src={banner2}
                    animate="float3"
                    variants={floatAnimation}
                    alt="Wedding 8"
                    className=' h-auto object-cover rounded-lg translate-y-4'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

       
            <div className="relative w-full flex items-center justify-center" style={{height:'90vh'}}>
            {/* Background image mờ */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
                style={{
                    backgroundImage: `url(${banner1})`,
                }}
            />
            {/* Overlay để làm mờ thêm nếu cần */}
            <div className="absolute inset-0 bg-black opacity-40" />
            {/* Button */}
 <button
    onClick={openModal}
    className="relative z-10 bg-gray-400 text-white font-semibold py-3 px-6 rounded-1 hover:bg-gray-500 transition opacity-70"
    style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)' }} // Thêm box-shadow phía dưới
>
    Bạn có tham dự không?
</button>
           {/* Modal chứa form */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="bg-white p-6 rounded-lg w-11/12 max-w-md relative">
              {/* Nút đóng (dấu X) */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
              >
                ×
              </button>
              <InvitationForm
                onSuccess={() => {
                  setIsModalOpen(false); // Đóng modal form
                  setIsSuccessModalOpen(true); // Mở modal cảm ơn
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal cảm ơn */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="bg-white p-6 rounded-lg max-w-md w-11/12 text-center relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
              >
                ×
              </button>
              <h2 className="text-2xl font-great-vibes text-gray-800 mb-4">
                Cảm Ơn Bạn!
              </h2>
              <div className="flex justify-center mb-4">
            <img
              src="https://media.giphy.com/media/l0HlOotPq2M1o9oIg/giphy.gif" // GIF placeholder
              alt="Cô dâu chú rể cúi đầu cảm ơn"
              className="w-24 h-24"
            />
          </div>
              <p className="text-gray-600 mb-4">
                Chúng tôi rất vui vì bạn đã xác nhận tham dự. Chúc bạn một ngày vui vẻ!
              </p>
              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-pink-600 hover:to-rose-600 transition"
              >
                Đóng
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
export default Carousel;