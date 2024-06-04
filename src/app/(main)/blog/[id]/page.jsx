/* eslint-disable react/no-danger-with-children */
import { blogById } from "@/app/action";
import CommentBox from "@/components/Write/CommentBox";
import { formatHumanReadableDate } from "@/utils/data-util";
import { Heart, MessageCircle, ThumbsUp } from "lucide-react";

const BlogDetail = async ({params}) => {
  const blog = await blogById(params.id);
  return (
    <div className="flex items-center justify-center">
      <div className="w-[700px] mx-auto p-6 mt-8">
        <h2 className="text-3xl font-bold leading-10">
          {blog?.title}
        </h2>
        <div className="flex items-center mt-8 gap-4">
          <div className="w-16 h-16">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="capitalize" >{blog?.author?.name}</p>
            <p className="text-sm">Published in {formatHumanReadableDate(new Date(blog?.createdAt))}.</p>
          </div>
        </div>
        <div className="mt-8 border-y border-gray-200">
          <div className="py-3">
            <div className="flex items-center gap-8">
              <div className="flex text-sm items-center">
                <MessageCircle size={20} color="#322f2f" strokeWidth={1.75} />{" "}
                <span className="ml-1">12</span>
              </div>
              <div className="flex text-sm items-center">
                <ThumbsUp size={20} color="#322f2f" strokeWidth={1.75} />{" "}
                <span className="ml-1">12</span>
              </div>

              <div className="flex text-sm items-center">
                <Heart size={20} strokeWidth={1.75} />{" "}
                <span className="ml-1">16</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
            <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
        </div>
        <div className="" id="CommentSection">
          <CommentBox />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
