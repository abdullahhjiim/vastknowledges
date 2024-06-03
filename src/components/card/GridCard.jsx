/* eslint-disable @next/next/no-img-element */
import blogImage from "@/assets/blogimage.jpg";
import { formatHumanReadableDate } from "@/utils/data-util";
import { Heart, MessageCircle, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GridCard = ({blog}) => {
    return (
        <div
            className="hover:scale-[1.02] duration-500 max-w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Link href={`/blog/${blog.id}`}>
              <Image
                className="w-full h-48 object-cover"
                src={blogImage}
                alt="Card Image"
              />
            </Link>
            <div className="p-3">
              <Link href={`/blog/${blog.id}`}>
                <h2 className="text-md font-semibold mb-2 truncate">
                  {blog?.title}
                </h2>
              </Link>
              <p className="text-gray-700 text-sm mb-4 truncate">
                {blog?.description}
              </p>

              <div className="flex justify-between">
                <div className="flex items-center text-gray-500 mb-2">
                  <Link href={`/profile/${blog?.author._id}`}>
                    <span className="capitalize mr-2 bg-gray-500 rounded-full text-center text-white py-1 px-2  text-sm font-semibold">
                      {blog?.author?.name[0]}
                    </span>
                  </Link>
                  <p className="text-sm text-gray-500">
                    <Link href={`/profile/${blog?.author?._id}`}>
                      {" "}
                      {blog?.author?.name}{" "}
                    </Link>{" "}
                    - {formatHumanReadableDate(new Date(blog?.createdAt))}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex text-xs items-center">
                    <MessageCircle
                      size={14}
                      color="#322f2f"
                      strokeWidth={1.75}
                    />{" "}
                    <span className="ml-1">12</span>
                  </div>
                  <div className="flex text-xs items-center">
                    <ThumbsUp size={14} color="#322f2f" strokeWidth={1.75} />{" "}
                    <span className="ml-1">12</span>
                  </div>

                  <div className="flex text-xs items-center">
                    <Heart size={14} strokeWidth={1.75} />{" "}
                    <span className="ml-1">16</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default GridCard;