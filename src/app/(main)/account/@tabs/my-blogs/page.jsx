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

const MyBlogs = () => {
	
	return (
		<div className="lg:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:flex xs:flex-col  gap-16 mt-8">
        {blogList.map((blog) => (
          <ListCard key={blog.id} blog={blog} />
        ))}
      </div>
	);
}

export default MyBlogs;
