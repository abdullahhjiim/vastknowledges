/* eslint-disable @next/next/no-img-element */
import { getBlogsByType } from "@/app/action";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import GridCard from "../card/GridCard";

const MostPopular = async () => {
  const blogList = await getBlogsByType("popular", 10); 
  return (
    <div className="container my-16">
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-semibold">Most Popular Articles</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ea?
          </p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:flex xs:flex-col  gap-6 mt-8">
        {blogList.map((blog) => (
          <GridCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <p>
          <Link
            href={"/all-blog/popular"}
            className="flex gap-1 items-center text-gray-400 text-sm"
          >
            See all articles <ChevronsRight />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MostPopular;
