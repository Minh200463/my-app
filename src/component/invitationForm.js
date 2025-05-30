import React, { useState } from "react";
import axios from "axios";
const InvitationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
    isJoin: '', // Mặc định: "Chắc chắn sẽ đến"
    quantity: '', // Mặc định: 2 người
    whoYour: '', // Mặc định: "Cô dâu"
  });
  const [message, setMessage] = useState('');

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
        setMessage('');
        setFormData({
          name: '',
          phone: '',
          description: '',
          isJoin: '',
          quantity: '',
          whoYour: '',
        });
      }, 3000);
    } catch (error) {
      setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

 return (
    <div className="form-container">
      <h3>Xác Nhận Tham Dự</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Họ và Tên</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label>Số Điện Thoại</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label>Mô Tả (Ví dụ: Chúc mừng, v.v.)</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Tham Dự</label>
          <select
            name="isJoin"
            value={formData.isJoin}
            onChange={handleInputChange}
            className="form-input"
            required
          >
            <option value="" disabled>Bạn sẽ đến chứ?</option>
            <option value="Tham dự">Chắc chắn sẽ đến</option>
            <option value="Bận">Xin lỗi, tôi bận mất rồi!</option>
          </select>
        </div>
        <div className="form-group">
          <label>Số Lượng Khách</label>
          <select
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="form-input"
            required
          >
            <option value="" disabled>Bạn sẽ tham dự cùng ai?</option>
            <option value="1">1 người</option>
            <option value="2">2 người</option>
            <option value="3">3 người</option>
            <option value="4">4 người</option>
          </select>
        </div>
        <div className="form-group">
          <label>Bạn Là Khách Mời Của Ai</label>
          <select
            name="whoYour"
            value={formData.whoYour}
            onChange={handleInputChange}
            className="form-input"
            required
          >
            <option value="" disabled>Bạn là khách mời của ai?</option>
            <option value="Cô dâu">Cô dâu</option>
            <option value="Chú rể">Chú rể</option>
          </select>
        </div>
        <button type="submit" className="form-button">
          Gửi Thông Tin
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};
export default InvitationForm;