"use client";
import React, { useEffect, useState } from "react";
import SinginButton from "./components/singin-button";

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Phodchara");

  useEffect(() => {
    setName(`phodchara ${count}`);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleRename = () => {
    setName("Phodchara Meeha");
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-red-500 hover:text-blue-500">ยินดีตอนรับเข้าสู่เว็บขายของออนไลน์</h1>
      <p className="text-xl py-3">This is my frist next.js project</p>
      <p className="text-lg font-bold">สร้างโดย พชร มีหา</p>
      <h2>จำนวนนับ: {count}</h2>
      <button onClick={() => handleClick()}>เพิ่มจำนวนนับ</button>
      <button onClick={() => handleRename()}>Update ชื่อ</button>
      <SinginButton />
    </div>
  );
};

export default HomePage;
