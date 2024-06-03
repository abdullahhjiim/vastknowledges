"use server";

import { Blog } from "@/model/blog-model";
import { dbConnect } from "@/service/mongo";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";
import { signIn } from "../../../auth";

export async function ceredntialLogin(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getBlogsByType(type = "latest", limit = 20) {
  try {
    await dbConnect();
    let blogs = [];
    if (type == "popular") {
      blogs = await Blog.aggregate([
        {
          $addFields: {
            likesCount: { $size: "$likes" },
          },
        },
        {
          $sort: { likesCount: -1 },
        },
        {
          $limit: limit,
        },
      ]);
    } else if (type == "latest") {
      blogs = await Blog.find({}).sort({ createdAt: 1 }).limit(limit).lean();
    }

    return replaceMongoIdInArray(blogs);
  } catch (err) {
    throw new Error(err);
  }
}

export async function getBlogsByCategories(
  category = "technology",
  limit = 20
) {
  try {
    await dbConnect();

    const blogs = await Blog.find({
      $or: [{ tags: { $regex: category, $options: "i" } }],
    }).lean();
    return replaceMongoIdInArray(blogs);
  } catch (err) {
    throw new Error(err);
  }
}


export async function blogById(id) {
  try{
      await dbConnect();

      const blog = await Blog.findOne({_id: id}).lean();
      return replaceMongoIdInObject(blog);
  } catch (error) {
    throw new Error(error);
  }
}