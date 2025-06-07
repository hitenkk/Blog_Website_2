"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="hero">
      <div className=" bg-gray-400 mb-8 p-48 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4">
          Welcome to our programming blog! Here you can find more information
          about us and our projects.
        </p>
      </div>
      <div className="showcase grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            className="image-placeholder bg-gray-300 h-40 rounded-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className="text-xl font-semibold border-2">Project {index + 1}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutHero;
