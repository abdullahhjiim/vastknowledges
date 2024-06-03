/* eslint-disable @next/next/no-img-element */

import { getBlogsByType } from "@/app/action";
import ListCard from "@/components/card/ListCard";

const Profile = async ({ params }) => {
  const blogList = await getBlogsByType(params.type);
  return (
    <div className="container p-4">
      <div className="max-w-[800px] mx-auto">
        <div className="">
          <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
            <h4 className="capitalize text-center">All {params.type} Blog</h4>
          </div>
          <div className="flex flex-col  gap-16 mt-8">
            {blogList.map((blog) => (
              <ListCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
