"use client";

import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function WriteBlog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setMessage("");
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("file", data.image[0]);
    // formData.append("imageAlt", data.imageAlt);
    formData.append("tags", data.tags);
    formData.append("description", data.description);
    formData.append("content", content);
    formData.append("allowedMimeTypes", ["image/jpeg", "image/png", "image/jpg"]);
    formData.append("fileSizeLimit", "1048576");

  
    try {
      setLoading(true);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data.message);

      reset();
      setContent("");
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-[700px]">
      <Head>
        <title>Blog Editor</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Write a New Blog</h1>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Image File
          </label>
          <input
            type="file"
            {...register("image", { required: "Image file is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>
        {/* <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Image Alt 
          </label>
          <input
            type="text"
            placeholder="Alt text for the image"
            {...register("imageAlt", { required: "Image Alt Tag is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.imageAlt && (
            <p className="text-red-500 text-sm mt-1">
              {errors.imageAlt.message}
            </p>
          )}
        </div> */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            placeholder="Category  [technology, health-fitness, beauty-fashion, recipe, reviews]"
            {...register("tags", { required: "Tag is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          />
          {errors.tags && (
            <p className="text-red-500 text-sm mt-1">
              {errors.tags.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
             placeholder="Enter short description"
            {...register("description", {
              required: "Description is required",
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="mb-4 h-72">
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <ReactQuill
            value={content}
            onChange={setContent}
            className="bg-white h-48"
            theme="snow"
            placeholder="Enter content of your article"
            // modules={modules}
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>
        {message && <p className="text-right text-gray-500">{message}</p>}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#1791c8] text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {loading ? 'Publishing...' : 'Publish'}
          </button>
        </div>
      </form>
    </div>
  );
}
