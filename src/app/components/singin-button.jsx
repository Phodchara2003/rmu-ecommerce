'use client';
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const SinginButton = () => {
  const router = useRouter()
  return (
    <div className="flex gap-1 justify-center">
      <Button
        onClick={() => {
          router.push("/login");
          }}
          
          className="bg-green-500 hover:bg-green-800"
          >
          เข้าสู่ระบบ
          </Button>
          <Button
          onClick={() => {
            router.push("/register");
        }}
        variant="secondary"
      >
        สมัครสมาชิก
      </Button>
      <Button
          onClick={() => {
            signOut()
        }}
        variant="destructive"
      >
        ออกจากระบบ
      </Button>
    </div>
  );
};

export default SinginButton;
