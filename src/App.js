import React, { useEffect } from 'react'; // <- Nhớ import useEffect
import logo from './logo.svg';
import 'aos/dist/aos.css';
import './App.css';
import Carousel from './component/wedding_index';
import InvitationForm from './component/invitationForm';
import AOS from 'aos';

function App() {
  useEffect(() => {
  AOS.init({
    once: true, // chỉ chạy 1 lần
  });
}, []);
  return (
    <div className="App">
      <Carousel/>
      <InvitationForm/>
    </div>
  );
}

export default App;
