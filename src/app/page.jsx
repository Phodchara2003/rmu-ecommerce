"use client";
import React, { useEffect, useState } from "react";
import SinginButton from "./components/singin-button";
import useCardStore from "@/lib/store/card";

const HomePage = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Phodchara");
  
  //global state
  const {item} = useCardStore();
  console.log(item);


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
      <h1 className="text-3xl font-bold text-red-500 hover:text-blue-500 mb-6">
        ยินดีต้อนรับเข้าสู่เว็บขายของออนไลน์
      </h1>
      {/* <h2>จำนวนนับ : {count}</h2>
      <Button onClick={() => handleClick()}>เพิ่มจำนวนนับ</Button>
      <Button onClick={() => handleRename()}>ubdate ชื่อ</Button>
      <h2>ชื่อ : {name}</h2>
      <p className="text-xl py-3">This is my frist next.js project</p>
      <p className="text-lg font-bold">สร้างโดย พชร มีหา</p> */}
      <SinginButton />
    </div>
  );
};

export default HomePage;
