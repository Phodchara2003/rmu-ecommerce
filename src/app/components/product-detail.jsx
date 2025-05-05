"use client";
import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/fechData";
import { products } from "@/lib/mock-data";
import useCardStore from "@/lib/store/card";
import Image from "next/image";
import React from "react";
import {toast} from 'sonner'
import useSWR from "swr";

const ProductDetail = ({ id }) => {
  
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);
  console.log(data);
  

  const product = data?.product
  //เก็บฟังก์ชั่นไว้ใช้งาน
  const addItem = useCardStore((state) => state.addItem);
  // ดึงสินค้าทั้งหมดในตะกร้า
  const items = useCardStore((state) => state.items);

  const handleAddtoCart = () => {
    try {
      const data = {
        id: product.id,
        name: product.name,
        image: product.image_url,
      };
      addItem(data);
      toast.success('เพิ่มสินค้าลงตะกร้าเรียบร้อย',{
        description:  `เพิ่ม ${product.name} ลงในตะกร้าเรียบร้อยแล้ว`
      })

    } catch (error) {
      toast.error('ไม่สามารถเพิ่มส้นค้าได้ ลองใหม่อีกครั้ง')
    }
  };
  // if (!product) return <div>ไม่พบสินค้า</div>;
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>{error.message}</div>
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-3 grid-cols-2">
        <div className="space-y-3">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="">
          <p className="text-3xl font-bold">{product.name}</p>
          <p>{product.price}</p>
          <Button onClick={handleAddtoCart}>เพิ่มลงตะกร้า</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
