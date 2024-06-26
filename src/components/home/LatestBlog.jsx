import { getBlogsByType } from "@/app/action";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import ListCard from "../card/ListCard";

const LatestBlog = async () => {

  const blogList = await getBlogsByType("latest", 10);

  return (
    <div className="container">
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-semibold">Latest Articles</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ea?
          </p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:flex xs:flex-col  gap-16 mt-8">
        {blogList.map((blog) => (
          <ListCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="flex justify-end">
        <p>
          <Link
            href={`/all-blog/latest`}
            className="flex gap-1 items-center text-gray-400 text-sm"
          >
            See all articles <ChevronsRight />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LatestBlog;
