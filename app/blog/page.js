import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image"; // Import the Image component

const dirContent = fs.readdirSync("content", "utf-8");

const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

// const blogs = [
//   {
//     title: 'First Blog Post',
//     description: 'This is the description for the first blog post.',
//     slug: 'first-blog-post',
//     date: '2023-10-01',
//     author: 'Author One',
//     image: '/code.webp',
//   },
//   {
//     title: 'Second Blog Post',
//     description: 'This is the description for the second blog post.',
//     slug: 'second-blog-post',
//     date: '2023-10-02',
//     author: 'Author Two',
//     image: '/content.webp',
//   },
//   {
//     title: 'Third Blog Post',
//     description: 'This is the description for the third blog post.',
//     slug: 'third-blog-post',
//     date: '2023-10-02',
//     author: 'Author Two',
//     image: '/typescript1.webp',
//   },
//   // Add more blog objects as needed
// ];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="rounded-lg shadow-md overflow-hidden dark:border-2"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500} 
              height={300} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <p className="text-sm">{`By ${blog.author} on ${blog.date}`}</p>
            </div>

            <Link
              href={`/blogpost/${blog.slug}`}
              className={buttonVariants({ variant: "outline" })}
            >
              Click here
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;