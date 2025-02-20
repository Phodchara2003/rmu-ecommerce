"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const SinginButton = () => {
  return (
    <div className="flex gap-1 justify-center">
      <Button
        onClick={() => {
            return alert("You are signed in");
          }}
          
          className="bg-green-500 hover:bg-green-800"
          >
          Sign in
          </Button>
          <Button
          onClick={() => {
          return alert("You are signed out");
        }}
        className="bg-red-500 hover:bg-red-800"
      >
        Sign out
      </Button>
    </div>
  );
};

export default SinginButton;
