import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "John Doe",
    date: "March 1, 2024",
    description:
      "An introduction to React Hooks and how to use them effectively.",
    imageUrl: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "Getting Started with Next.js",
    author: "Jane Smith",
    date: "March 5, 2024",
    description: "A beginner's guide to building applications with Next.js.",
    imageUrl: "/images/blog2.jpg",
  },
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "John Doe",
    date: "March 1, 2024",
    description:
      "An introduction to React Hooks and how to use them effectively.",
    imageUrl: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "Getting Started with Next.js",
    author: "Jane Smith",
    date: "March 5, 2024",
    description: "A beginner's guide to building applications with Next.js.",
    imageUrl: "/images/blog2.jpg",
  },
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "John Doe",
    date: "March 1, 2024",
    description:
      "An introduction to React Hooks and how to use them effectively.",
    imageUrl: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "Getting Started with Next.js",
    author: "Jane Smith",
    date: "March 5, 2024",
    description: "A beginner's guide to building applications with Next.js.",
    imageUrl: "/images/blog2.jpg",
  },
];

const TabContentCom = () => {
  return (
    <>
      <h3 className=" text-2xl">Technology Description</h3>
      <p className="mt-4">
        This tutorial will help you learn quickly and thoroughly. Lorem ipsum,
        or lipsum as it sometimes known, is dummy text used in laying out print,
        graphic or web designs. Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit. Donec odio. Quisque volutpat mattis eros.
        <br /> <br /> You’ll be exposed to principles and strategies, but, more
        importantly, you’ll learn how actually apply these abstract concepts by
        coding three different websites for three very different the audiences.
        Lorem ipsum is dummy text used in laying out print, graphic or web
        designs Lorem ipsum blinding shot chinwag knees.
      </p>
      <div className="space-y-6 rounded-md mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-md font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{blog.description}</p>
                <p className="text-sm text-gray-500">
                  {blog.author} - {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Link
            className="flex gap-1 items-center text-sm text-gray-400"
            href={"/"}
          >
            See all blogs <ChevronsRight size={20} strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TabContentCom;
