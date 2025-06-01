import { useState } from "react";
import axios from "axios";
import { motion } from 'framer-motion'
const InvitationForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
    isJoin: '', // Mặc định: "Chắc chắn sẽ đến"
    quantity: '', // Mặc định: 2 người
    whoYour: '', // Mặc định: "Cô dâu"
  });
    const [messgae,setMessage] = useState(""); // Sửa lỗi khai báo useState
    const [isSuccess, setIsSuccess] = useState(false);    


   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    // Kiểm tra giá trị hợp lệ
    if (formData.isJoin === '') {
      setMessage('Vui lòng chọn trạng thái tham dự.');
      return;
    }
    if (formData.quantity === '') {
      setMessage('Vui lòng chọn số lượng khách.');
      return;
    }
    if (formData.whoYour === '') {
      setMessage('Vui lòng chọn bạn là khách mời của ai.');
      return;
    }
    
    // Chuyển đổi quantity thành int, giữ isJoin và whoYour là chuỗi
    const submitData = {
      ...formData,
      quantity: parseInt(formData.quantity), // Chuyển thành int
    };
    
    try {
      const response = await axios.post('https://backendwedding-gnhaf5a9fse4czhh.eastus2-01.azurewebsites.net/api/guest', submitData);
      setMessage(response.data);
      setTimeout(() => {
        setIsSuccess(true);
        setMessage('');
        setFormData({
          name: '',
          phone: '',
          description: '',
          isJoin: '',
          quantity: '',
          whoYour: '',
        });
    }, 30);
} catch (error) {
    setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
}
    onSuccess();
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
  };
 return (
    <div className="form-container max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            {/* Tiêu đề */}
            <h3 className="text-3xl font-great-vibes text-center text-gray-800 mb-6">
                Xác nhận tham dự
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Họ và Tên */}
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Điền tên vào nhé người đẹp <span className="text-red-500">*</span>
                    </label>
                    <input
                    placeholder="Nguyễn Văn A"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 transition shadow-sm"
                        required
                    />
                </div>
               {/* Số Điện Thoại */}
                <div className="form-group">
                    <input
                    placeholder="Số điện thoại"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 transition shadow-sm"
                    />
                    <span style={{fontSize:'0.7em'}} className=" ms-2 d-flex justify-content-start text-danger">SĐT không bắt buộc*</span>
                </div>
                {/* Tham Dự */}
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                    </label>
                    <select
                        name="isJoin"
                        value={formData.isJoin}
                        onChange={handleInputChange}
                        className="form-input w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 transition shadow-sm"
                        required
                    >
                        <option value="" disabled>
                            Bạn sẽ đến chứ?
                        </option>
                        <option value="Tham dự">Chắc chắn sẽ đến!</option>
                        <option value="Bận">Xin lỗi, tôi bận mất rồi!</option>
                        <option value="Hên xui">Hên xui nha pà</option>
                    </select>
                </div>
                {/* Số Lượng Khách */}
                <div className="form-group">
                    <select
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="form-input w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 transition shadow-sm"
                        required
                    >
                        <option value="" disabled>
                            Bạn sẽ tham dự cùng ai?
                        </option>
                        <option value="1">Một mình tui</option>
                        <option value="2">Cùng người yêu =))</option>
                        <option value="3">Bạn bè</option>
                        <option value="4">Người thân</option>
                    </select>
                </div>
                {/* Khách Mời Của Ai */}
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                    </label>
                    <select
                        name="whoYour"
                        value={formData.whoYour}
                        onChange={handleInputChange}
                        className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 transition shadow-sm"
                        required
                    >
                        <option value="" disabled>
                            Bạn là khách mời của ai?
                        </option>
                        <option value="Cô dâu">Cô dâu</option>
                        <option value="Chú rể">Chú rể</option>
                    </select>
                </div>

                {/* Mô Tả */}
                <div className="form-group">
                    <textarea
                    placeholder='Gửi lời chúc đến cô dâu/chú rể'
                        type="text"
                        name="description"
                        rows="5" cols="50"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="form-input w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 transition shadow-sm"
                    />
                </div>
                {/* Button Gửi */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-3 rounded-lg hover:from-pink-600 hover:to-rose-600 transition shadow-md"
                >
                    Gửi Thông Tin
                </button>
            </form>
          
        </div>
  );
};
export default InvitationForm;