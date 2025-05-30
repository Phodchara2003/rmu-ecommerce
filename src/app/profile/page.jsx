'use client';
import { useSession } from 'next-auth/react';
import React from 'react'

const ProfilePage = () => {
    const {data:session,status} = useSession();
    if(status === "loading"){
        return <div>Loading...</div>
    }
    if(status === "unauthenticated"){
        return <div>คณยังไม่เข้าสู่ระบบ</div>
    }
    
  return (
    <div>เข้าสู่ระบบแล้ว :{session.user.email}</div>
  )
}

export default ProfilePage