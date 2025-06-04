import { useEffect, useRef, useState } from 'react';

import wedding4 from '../assets/images/battle_wedding1.jpg';
import backgournd from '../assets/images/background_2img.jpg';
import backgournd2 from '../assets/images/backg.png';
import kieuly from '../assets/images/kieuly3.jpg';
import wedding1 from '../assets/images/wedding-1.jpg';
import wedding2 from '../assets/images/wedding-2.jpg';
import wedding3 from '../assets/images/wedding-3.jpg';
import banner1 from '../assets/images/banner1.jpg';
import tim from '../assets/images/tim.png';
import banner2 from '../assets/images/banner2.jpg';
import weddingsong from '../assets/images/emdongy.mp3';
import { motion, AnimatePresence } from 'framer-motion'
import InvitationForm from './invitationForm';


function Carousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const audioRef = useRef(null);

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
  // Hiệu ứng animation cho thông báo thành công
  const successVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        scale: {
          duration: 0.3,
          repeat: 3, // Rung nhẹ 3 lần
          repeatType: "reverse", // Rung qua lại
          ease: "easeInOut",
        },
      },
    },
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
    shake: {
    y: [0, -1, 1, -1, 1, 0], // Di chuyển lên xuống
    rotate: [0, 2, -2, 2, -2, 0], // Rung lắc qua lại
    scale: [1, 1, 1, 1., 1, 1], // Phóng to/thu nhỏ nhẹ
    transition: {
      duration: 2, // Thời gian 1 chu kỳ
      repeat: Infinity, // Lặp vô hạn
      ease: "easeInOut",
    },
    
  },
  scaleFade: {
  scale: [1, 1.05, 1], // Phóng to/thu nhỏ nhẹ
  opacity: [1, 0.9, 1], // Fade nhẹ
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
},
  };
  const containerRef = useRef(null);

  useEffect(() => {
const audio = audioRef.current;
    if (audio) {
      audio.muted = true; // Bắt đầu với muted để vượt qua chính sách autoplay
      audio
        .play()
        .then(() => {
          // Nếu play thành công, bỏ mute sau 1 giây
          setTimeout(() => {
            audio.muted = false;
          }, 1000);
        })
        .catch((error) => {
          console.log("Autoplay blocked by browser, user interaction required:", error);
          // Nếu bị chặn, cung cấp tùy chọn thủ công (dù bạn muốn tránh)
        });
    }

    // Tạo bông tuyết động
    const snowContainer = document.querySelector('.snow-container');
    const snowCount = 10; // Giảm số bông tuyết để nhẹ hơn
    for (let i = 0; i < snowCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDelay = `${Math.random() * 10}s`;
      snowflake.style.animationDuration = `${6 + Math.random() * 8}s`; // Nhanh hơn
      snowflake.style.opacity = `${5 + Math.random() * 0.5}`;
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

      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);
  return (
    <div className="relative">
      <button className='bg-white' onClick={() => audioRef.current.play()} style={{ position: "absolute", top: 10, left: 10, zIndex:9999 }}>
  Bật nhạc
</button>
      {/* Audio element để phát nhạc */}
      <audio ref={audioRef} loop>
       <source src={weddingsong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="snow-container"></div>

      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-rose-100 w-full overflow-x-hidden relative"
      
      >
        <div
          className="min-h-screen bg-cover bg-center relative z-10"
          style={{ backgroundImage: `url(${wedding4})` }}
        >
          <div className="flex flex-col align-items-center mx-4 pt-1">
            <div className="text-4xl drop-shadow-lg mt-3 animate ballet-wedding">
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
          <div className="absolute bottom-4 w-full text-center text-black mb-10 drop-shadow-lg font_thumoitiecuoi">
            <motion.h1
              className="text-2xl animate"
             data-animate="fade-up"
                data-delay="2s"
            >
              THƯ MỜI TIỆC CƯỚI
            </motion.h1>
            <span
              className="absolute transform -translate-x-1/2 bottom-[53px] w-48 h-1 animate"
              data-animate="fade"
                data-delay="4s"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(0, 0, 0), transparent)',
              }}
            ></span>
            <span>
              <p
                className="text-xl font-playfair-display italic m-0 animate"
                data-animate="fade-up"
                data-delay="2.5s"
              >
                Chủ nhật - 11h00
              </p>
              <p
                className="text-xl font-playfair-display animate"
                style={{ letterSpacing: '5px', fontWeight: 'bold' }}
                data-animate="fade-up"
                data-delay="2.5s"
              >
                22.6.2025
              </p>
            </span>
          </div>
        </div>

        <div
          className="items-center text-center bg-cover bg-center relative z-10"
          style={{ backgroundImage: `url(${backgournd2})` }}
        >
          <div
            className="font_loiyeu"
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
                  <p className="text-sm font-bold text-gray-700 m-0">Ông: PHẠM VĂN A</p>
                  <p className="text-sm font-bold text-gray-700">Bà: Lê Thị B</p>
                </div>
                <div className="col-6 col-md-6 text-center animate" data-animate="fade" data-delay="0.1s">
                  <h3 className="text-sm font-bold text-pink-600 mb-2">NHÀ GÁI</h3>
                  <p className="text-sm font-bold text-gray-700 m-0">Ông: ĐẶNG XUÂN TOÀN</p>
                  <p className="text-sm font-bold text-gray-700">Bà: TĂNG THỊ HẠNH</p>
                </div>
              </div>
              <div className='d-flex justify-content-center'>
 <motion.img
                        src={tim}
                        alt="icon-tim"
                        className="w-25 img-fluid"
                        variants={floatAnimation} animate="float2"
                        loading="lazy"
                      />              </div>
              <div className="row">
                <div className="col-6 text-center animate" data-animate="fade" data-delay="0s">
                  <h3 className="text-sm font_thumoitiecuoi text-pink-600 mb-1">Chú Rể</h3>
                  <p
                    className="text-lg font-bold fw-bold text-gray-700 animate font_thumoi2"
                    data-animate="fade-up"
                    data-delay="0.1s"
                  >
                   Nguyễn Minh Tâm
                  </p>
                </div>
                <div className="col-6 col-md-6 text-center animate" data-animate="fade" data-delay="0s">
                  <h3 className="text-sm font_thumoitiecuoi text-pink-600 mb-1">Cô dâu</h3>
                  <p
                    className="text-lg font_thumoi2 fw-bold text-gray-700 animate"
                    data-animate="fade-up"
                    data-delay="0.1s"
                  >
                    Đặng Thị Kiều Ly
                  </p>
                </div>
                <div
                  ref={containerRef}
                  className="container p-3 animate"
                style={{ backgroundImage: `url(${backgournd})`,backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat" }}
                  data-animate="fade"
                >
                  <div className="row">
                     <div className="col-6 m-0">
                      <img
                        src={kieuly}
                        alt="chure"
                        className="img-fluid shadow animate"
                        loading="lazy"
                        data-animate="fade-rig"
                        data-delay="0.6s"
                      />
                    </div>
                    <div className="col-6 m-0">
                      <img
                        src={kieuly}
                        alt="codau"
                        className="img-fluid shadow animate"
                        loading="lazy"
                        data-animate="fade-left"
                        data-delay="0.6s"
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
            ></span>
            <h1
              className="font_thumoi2 mt-4 p-2 text-white mb-0 animate"
              style={{ fontSize: '2.2em' }}
              data-animate="fade"
              data-delay="0.2s"
            >
              Thư Mời
            </h1>
            <span
              className="font_lecuoi text-white font_thumoitiecuoi mt-0 animate"
              data-animate="fade"
              data-delay="0.2s"
            >
              THAM DỰ LỄ CƯỚI CỦA LY & TÂM
            </span>
          </div>

          <div className="row mt-3 mb-4 d-flex justify-content-center text-center">
            <div className="col-4 align-content-around">
              <img
                src={wedding3}
                alt="Ảnh cưới kỷ niệm"
                loading="lazy"
                className="animate"
                data-animate="fade-rig"
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
                data-delay="1s"
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

           <span
              className="font_lecuoi text-white font_thumoitiecuoi m-3 animate"
              data-animate="fade-up"
              data-delay="0.2s"
            >
              TIỆC MỪNG LỄ VU QUY
            </span>
 <motion.div
  className="wedding-date-container mt-2 animate"
  variants={floatAnimation}
  animate="shake" // Áp dụng hiệu ứng rung lắc
   data-animate="fade"
>
    <span className="wedding-time">Vào lúc <span className="wedding-time-bold">10h30 | CHỦ NHẬT</span></span>
    <div className="date-form d-flex justify-content-around align-content-center m-0 p-0">
      <span className="date-day">22</span>
      <span className="date-pipe">|</span>
      <span className="date-label">Tháng 6</span>
      <span className="date-pipe">|</span>
      <span className="date-year">2025</span>
    </div>
    <span className="wedding-note">(Tức ngày 22 tháng 6 năm Giáp Ngọ)</span>
  </motion.div>


<div className="calendar-container">
  <div className="left-section animate" data-animate="fade-down" data-delay="0.1s">
    <span style={{fontSize:'2.7rem'}} className="title title-large">Save</span>
    <span className="title title-large" style={{color:'#d36b7f', fontSize:'2rem'}}>the</span>
    <span style={{fontSize:'2.7rem'}} className="title title-large">Date</span>
  </div>
  <div className="right-section">
    <div className="couple-info">
      <h1 className="couple-name fs-3 animate " data-animate="fade-up" data-delay="0.6s">Tâm & Ly</h1>
      <p className=" wedding-text animate" data-animate="fade" data-delay="0.1s">Are Getting Married!</p>
    </div>
    <div className="date-info fs-1 mt-2 p-0 animate " data-animate="fade-left" data-delay="0.1s">June <span className='fs-3'>2025</span></div>
    <div className="calendar-grid animate" data-animate="fade-up" data-delay="0.1s">
      <div className="day-name">Sun</div>
      <div className="day-name">Mon</div>
      <div className="day-name">Tue</div>
      <div className="day-name">Wed</div>
      <div className="day-name">Thu</div>
      <div className="day-name">Fri</div>
      <div className="day-name">Sat</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <div>14</div>
      <div>15</div>
      <div>16</div>
      <div>17</div>
      <div>18</div>
      <div>19</div>
      <div>20</div>
      <div>21</div>
      <div className="highlight heart-highlight">22</div>
      <div>23</div>
      <div>24</div>
      <div>25</div>
      <div>26</div>
      <div>27</div>
      <div>28</div>
      <div>29</div>
      <div>30</div>
    </div>
    <div className="follow-note">Formal Invitation to Follow</div>
  </div>
</div>



          <div className="map-container">
            <motion.div className='h1 font_thumoi2' variants={floatAnimation} animate="shake">Địa điểm tổ chức</motion.div>
           <div className='p-3 text-white animate' data-animate="fade" style={{backgroundColor:'rgb(160,160,160,0.7)'}}>
            <p className="map-address text-white font_thumoitiecuoi m-0 p-0 "><i className="bi bi-geo-alt fs-5" 
             
            ></i> NHÀ HÀNG KÌ HƯƠNG</p>
            <i style={{fontSize:'0.8em'}}>244 QL14E, Khối phố An Tây, thị trấn Tâm Bình, Hiệp Đức, Quảng Nam</i>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.2266760293032!2d108.10078709678956!3d15.579533300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169f9004af3c39d%3A0x54da01d2d65995b!2zTmjDoCBow6BuZyBLw6wgSMawxqFuZw!5e0!3m2!1svi!2s!4v1748626215262!5m2!1svi!2s" width='100%' height='300' style={{ border: 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' title='đường đi'></iframe>
            <button
              onClick={handleOpenMap}
              style={{
                marginTop: '10px',
                padding: '5px 20px',
                backgroundColor: 'rgb(112,25,21,0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize:'0.8em',
                cursor: 'pointer',
                fontFamily:'Cal Sans'
              }}
            >
              XEM TRÊN GOOGLE MAP
            </button>
           </div>
           
          </div>

          <div className='album-wedding'>
          <div className="album-title-container">
  <motion.span className="album-title" animate="scaleFade"
  variants={floatAnimation} 
  data-animate="fade-up" data-delay="0.3s"
  >Album ảnh cưới</motion.span>
  <span className="decorative-line">
    <span className="heart-on-line">♥</span>
  </span>
</div>

            <div className='album-wedding container mx-auto '>
              <div className='grid grid-cols-2 gap-2'
                >
               <span className='animate' data-animate="fade-rig"
                data-delay="0.6s">
                 <motion.img src={wedding1} alt="Wedding 1" variants={floatAnimation} animate="float3" className='w-full h-auto object-cover rounded-lg transform -translate-y-2'/>
               </span>
               <span className='animate' data-animate="fade-left"
                data-delay="0.6s">
                  <motion.img src={wedding2} alt="Wedding 2" variants={floatAnimation} animate="float2" className='w-full h-auto object-cover rounded-lg transform -translate-y-2'/>
               </span>
              </div>
              <div className='grid grid-cols-3 gap-2'>
                <span className='animate' data-animate="fade-rig"
                data-delay="0.6s">
                  <motion.img src={wedding1} alt="Wedding 3" variants={floatAnimation} animate="float3" className='w-full h-auto object-cover rounded-lg transform -translate-y-2'
                  data-animate="fade"
                  data-delay="1s"/>
                </span>
               <span className='animate' data-animate="fade-up"
                data-delay="0.6s">
                 <motion.img src={wedding1} alt="Wedding 4" variants={floatAnimation} animate="float2" className='w-full h-auto object-cover rounded-lg transform -translate-y-2'
                  data-animate="fade"
                  data-delay="1s"/>
               </span>
                <span className='animate' data-animate="fade-left"
                data-delay="0.6s">
                <motion.img src={wedding1} alt="Wedding 5" variants={floatAnimation} animate="float3" className='w-full h-auto object-cover rounded-lg transform -translate-y-2 '
                  data-animate="fade"
                  data-delay="1s"/>
                </span>

              </div>
              <div className="grid grid-cols-2">
                <div className="row-span-2 animate" data-animate="fade-rig"
                data-delay="0.6s">
                  <motion.img
                    src={wedding1}
                    alt="Wedding 5" style={{ width: '90%' }}
                    variants={floatAnimation}
                    animate="float2" 
                    className=' h-auto object-cover rounded-lg translate-y-4'
                  />
                </div>
                <div className='flex flex-col animate' data-animate="fade-left"
                data-delay="0.6s">
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
                className="fixed inset-0 z-50 flex items-center justify-center"
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
                    onSubmit={() => {
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
                className="fixed inset-0 z-50 flex items-center justify-center"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={successVariants}
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
