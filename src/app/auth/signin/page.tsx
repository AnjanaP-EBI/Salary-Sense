"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <div className="w-full h-[708px] flex flex-row  align-middle ">
      <div className="w-1/2 h-[708px]"></div>
      <div className="w-1/2 p-10 flex flex-col items-center justify-center">
        <h1 className="text-2xl text-center text-white font-bold mb-6">
          Sign In
        </h1>
        <Input
          className="bg-white w-4/5 mb-5 rounded-full placeholder:text-xs"
          placeholder="Username/Email"
        />
        <Input
          className="bg-white w-4/5 mb-5 rounded-full placeholder:text-xs"
          type="password"
          placeholder="Password"
        />
        <Button className="bg-blue-600 rounded-full mb-4 hover:bg-gray-400 hover:text-black" size="sm">
          Sign In
        </Button>
        <div className="text-xs flex flex-col text-white items-center justify-center">
          <h2 className="flex justify-center text-blue-400 mb-1">
            <a href="">Forgot Password</a>
          </h2>
          <h2>
            Don't have an account?{" "}
            <a href="" className="text-blue-400">
              Sign Up
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
