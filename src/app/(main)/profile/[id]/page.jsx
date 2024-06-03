/* eslint-disable @next/next/no-img-element */

import ListCard from "@/components/card/ListCard";

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

const Profile = ({ params }) => {
  return (
    <div className="container p-4">
      <div className="max-w-[800px] mx-auto">
        <div className="">
          <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
            <div className="flex justify-center gap-16 items-center">
              <div className="">
                <img
                  className="object-cover object-center rounded-full h-32 w-32"
                  src="https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/647c1064ebf1c6171bfd3a87_profile-picture-feature-1.webp"
                  alt=""
                />
              </div>
              <div className="">
                <p>Antara Afreen</p>
                <p>afreen@gmail.com</p>
              </div>
            </div>
            <p className="px-16 py-8 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              qui optio voluptates ea dolor esse, repellat minima iusto animi
              harum eius incidunt iure odio eaque saepe quaerat deleniti culpa!
              Necessitatibus quos magni sint impedit consequatur, expedita
              eaque, ipsum nihil hic a, non laborum. Tenetur deleniti, quas
              officia vitae adipisci ad reprehenderit repellendus aperiam harum
              obcaecati culpa natus sint nisi, eos at quos. Tempore laudantium
              nesciunt provident alias expedita odio molestiae, ullam fugiat
              doloribus eligendi inventore dignissimos culpa quae voluptate rem
              cumque excepturi esse commodi. Quisquam corporis saepe eius
              
            </p>
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
