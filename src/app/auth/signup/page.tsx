"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="w-full h-[708px] flex flex-row  align-middle ">
      <div className="w-1/2 h-[708px]"></div>
      <div className="w-1/2 p-10 flex flex-col items-center justify-center">
        <h1 className="text-2xl text-center text-white font-bold mb-6">
          Sign Up
        </h1>
        <Input
          className="bg-white w-4/5 mb-5 rounded-full placeholder:text-xs"
          placeholder="Email"
        />
        <Input
          className="bg-white w-4/5 mb-5 rounded-full placeholder:text-xs"
          type="password"
          placeholder="Password"
        />
        <Input
          className="bg-white w-4/5 mb-4 rounded-full placeholder:text-xs"
          type="password"
          placeholder="Confirm Password"
        />
        <Button className="bg-blue-600 rounded-full mb-4 hover:bg-gray-400 hover:text-black" size="sm">
          Sign Up
        </Button>
        <div className="text-xs flex flex-col text-white items-center justify-center">
          <h2>
            Already have an account?{" "}
            <Link href="/auth/signin" ><div className="text-blue-400">
              Sign In</div>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
