import { Heart, MessageCircle, ThumbsUp } from "lucide-react";

const blogList = [
  {
    id: 1,
    title: "Free 10 Mac Apps that you didn’t know you Needed",
    author: "Akshay S B",
    category: "Mac O’Clock",
    date: "Apr 15",
    readTime: "690",
    comments: "9",
    imageUrl: "/images/blog1.jpg",
    authorImage: "/images/author1.jpg",
    photoCredit: "Photo by Sora Sagano on Unsplash",
  },
  {
    id: 1,
    title: "Free 10 Mac Apps that you didn’t know you Needed",
    author: "Akshay S B",
    category: "Mac O’Clock",
    date: "Apr 15",
    readTime: "690",
    comments: "9",
    imageUrl: "/images/blog1.jpg",
    authorImage: "/images/author1.jpg",
    photoCredit: "Photo by Sora Sagano on Unsplash",
  },
  {
    id: 1,
    title: "Free 10 Mac Apps that you didn’t know you Needed",
    author: "Akshay S B",
    category: "Mac O’Clock",
    date: "Apr 15",
    readTime: "690",
    comments: "9",
    imageUrl: "/images/blog1.jpg",
    authorImage: "/images/author1.jpg",
    photoCredit: "Photo by Sora Sagano on Unsplash",
  },
  {
    id: 1,
    title: "Free 10 Mac Apps that you didn’t know you Needed",
    author: "Akshay S B",
    category: "Mac O’Clock",
    date: "Apr 15",
    readTime: "690",
    comments: "9",
    imageUrl: "/images/blog1.jpg",
    authorImage: "/images/author1.jpg",
    photoCredit: "Photo by Sora Sagano on Unsplash",
  },
  {
    id: 1,
    title: "Free 10 Mac Apps that you didn’t know you Needed",
    author: "Akshay S B",
    category: "Mac O’Clock",
    date: "Apr 15",
    readTime: "690",
    comments: "9",
    imageUrl: "/images/blog1.jpg",
    authorImage: "/images/author1.jpg",
    photoCredit: "Photo by Sora Sagano on Unsplash",
  },
  {
    id: 1,
    title: "Free 10 Mac Apps that you didn’t know you Needed",
    author: "Akshay S B",
    category: "Mac O’Clock",
    date: "Apr 15",
    readTime: "690",
    comments: "9",
    imageUrl: "/images/blog1.jpg",
    authorImage: "/images/author1.jpg",
    photoCredit: "Photo by Sora Sagano on Unsplash",
  },
  {
    id: 1,
    title: "Free 10 Mac Apps that you didn’t know you Needed",
    author: "Akshay S B",
    category: "Mac O’Clock",
    date: "Apr 15",
    readTime: "690",
    comments: "9",
    imageUrl: "/images/blog1.jpg",
    authorImage: "/images/author1.jpg",
    photoCredit: "Photo by Sora Sagano on Unsplash",
  },
  {
    id: 1,
    title: "Free 10 Mac Apps that you didn’t know you Needed",
    author: "Akshay S B",
    category: "Mac O’Clock",
    date: "Apr 15",
    readTime: "690",
    comments: "9",
    imageUrl: "/images/blog1.jpg",
    authorImage: "/images/author1.jpg",
    photoCredit: "Photo by Sora Sagano on Unsplash",
  },
  {
    id: 1,
    title: "Free 10 Mac Apps that you didn’t know you Needed",
    author: "Akshay S B",
    category: "Mac O’Clock",
    date: "Apr 15",
    readTime: "690",
    comments: "9",
    imageUrl: "/images/blog1.jpg",
    authorImage: "/images/author1.jpg",
    photoCredit: "Photo by Sora Sagano on Unsplash",
  },
  // Add more blog entries as needed
];

const LatestBlog = () => {
  return (
    <div className="lg:grid  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:flex xs:flex-col  gap-16 mt-8">
      {blogList.map((blog) => (
        <div
          key={blog.id}
          className="flex items-center mb-8 p-4 border-b border-gray-500"
        >
          <div className="w-4/5 pr-4">
            <div className="flex items-center text-gray-500 mb-2">
              <span className="capitalize mr-2 bg-gray-500 rounded-full text-center text-white py-1 px-2  text-sm font-semibold">
                {blog.author[0]}
              </span>
              <p className="text-sm text-gray-500">
                {blog.author} - {blog.date}
              </p>
            </div>

            <h2 className="text-md font-bold mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-600 mb-4 truncate">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              accusamus rem atque minus tempora iste! Amet veritatis id
              necessitatibus eaque.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex text-xs items-center">
                <MessageCircle size={14} color="#322f2f" strokeWidth={1.75} />{" "}
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
          <div className="w-1/5">
            <img
              src={
                "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg"
              }
              alt={blog.title}
              className="w-full h-24 object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestBlog;
