"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { SignIn, SignUp, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(30);

    setTimeout(() => {
      setProgress(70);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 800);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 900);
  }, []);

  const triggerSignin = () => {
    setShowSignin(true);
    setShowSignup(false); // Hide SignUp when SignIn is triggered
  };

  const triggerSignup = () => {
    setShowSignup(true);
    setShowSignin(false); // Hide SignIn when SignUp is triggered
  };

  useEffect(() => {
    // Hide SignIn and SignUp when the pathname changes
    setShowSignin(false);
    setShowSignup(false);
  }, [pathname]);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <LoadingBar
        color="#933ce6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-lg font-bold">HitenkBlog</div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Home</Link>
          <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">About</Link>
          <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Blog</Link>
          <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Contact</Link>
          <div className="flex items-center">
            <Button onClick={triggerSignin} className="mx-1" variant="outline">Login</Button>
            <Button onClick={triggerSignup} className="mx-1" variant="outline">SignUp</Button>
            <ModeToggle />
            <span className="mx-2"><UserButton /></span>
          </div>
        </div>
        <div className="md:hidden">
          <span className="mx-2">
            <ModeToggle />
            <UserButton />
          </span>
          <Sheet>
            <SheetTrigger>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">HitenkBlog</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6 items-center">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <div className="flex flex-col items-center">
                      <Button onClick={triggerSignin} className="mx-1 text-xs" variant="outline">Login</Button>
                      <Button onClick={triggerSignup} className="mx-1 text-xs" variant="outline">SignUp</Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {showSignin && <div className="flex justify-center"><SignIn /></div>}
      {showSignup && <div className="flex justify-center"><SignUp /></div>}
    </nav>
  );
};

export default Navbar;