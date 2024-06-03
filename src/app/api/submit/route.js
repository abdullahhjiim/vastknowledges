import { Blog } from "@/model/blog-model";
import { User } from "@/model/user-model";
import { dbConnect } from "@/service/mongo";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import { auth } from "../../../../auth";

// Function to validate file mime type
const isValidMimeType = (file, allowedMimeTypes) => {
  return allowedMimeTypes.includes(file.type);
};

// Function to validate file size
const isValidFileSize = (file, fileSizeLimit) => {
  return file.size <= fileSizeLimit;
};

export const POST = async (request) => {
  const session = await auth();

  console.log(session);
  if (!session) {
    return NextResponse.json({ Message: "Unauthorized", status: 401 });
  }

  const formData = await request.formData();

  const file = formData.get("file");
  const title = formData.get("title");
  const description = formData.get("description");
  const tags = formData.get("tags");
  const content = formData.get("content");
  const allowedMimeTypes = formData.get("allowedMimeTypes");
  const fileSizeLimit = formData.get("fileSizeLimit");

  if (!isValidMimeType(file, allowedMimeTypes)) {
    return NextResponse.json({ Message: "Invalid file type", status: 422 });
  }

  if (!isValidFileSize(file, fileSizeLimit)) {
    return NextResponse.json({ Message: "Invalid file size", status: 422 });
  }

  const { size, type } = file;

  console.log(size, type);

  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const file_extension = file.name.split(".").pop();
  const fileName = Date.now() + "." + file_extension;
  const filePath = "uploads/" + fileName;

  try {
    await writeFile(path.join(process.cwd(), "public/" + filePath), buffer);

    await dbConnect();
    
    const user = await User.findOne({email : session?.user?.email});

    const newBlog = {
      title,
      description,
      content,
      tags,
      thumbnail : filePath,
      author : {
        _id : user?._id,
        name: user.name,
      }
    };

    await Blog.create(newBlog);

    return new NextResponse(JSON.stringify({ message: "Submitted Successfully" }), {status : 201});
  } catch (error) {
    console.log("Error occured ", error);
    return new NextResponse(JSON.stringify({ message: "Failed to submit"}, {status: 500}));
  }
};
