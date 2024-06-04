"use client";
import { useState } from 'react';

export default function CommentBox() {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') {
      setError('Comment cannot be empty');
    } else {
      setError('');
      // Handle the comment submission, e.g., send it to an API
      console.log('Submitted comment:', comment);
      setComment('');
    }
  };

  return (
    <div className="max-w-full mt-10">
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Your Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your comment"
          ></textarea>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1791c8] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
