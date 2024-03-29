'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/books/")
    .then(res => res.json())
    .then(json => setBooks(json))
    .catch(err => console.log(err));
  })

  return (
    <main className="mx-auto text-center">
      <h1 className="text-4xl my-4">Reading List</h1>
      <div className="relative overflow-x-auto shadow-md rounded-lg mx-4">
        <table className="w-full mx-auto text-sm text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Book Title</th>
              <th scope="col" className="px-6 py-3">Author(s)</th>
              <th scope="col" className="px-6 py-3">Published Date</th>
              <th scope="col" className="px-6 py-3">Genre(s)</th>
              <th scope="col" className="px-6 py-3">Length</th>
              <th scope="col" className="px-6 py-3">Current Page</th>
              <th scope="col" className="px-6 py-3">Current Chapter</th>
              <th scope="col" className="px-6 py-3">Start Date</th>
              <th scope="col" className="px-6 py-3">Finish Date</th>
              <th scope="col" className="px-6 py-3">Completed</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {books.map(book => (
              <tr key={book.id} className="bg-white border-b hover:bg-gray-50">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{book.title || ""}</td>
                <td className="px-6 py-4">{book.authors_array.join(', ') || ""}</td>
                <td className="px-6 py-4">{book.published || ""}</td>
                <td className="px-6 py-4">{book.genres_array.join(', ') || ""}</td>
                <td className="px-6 py-4">{book.length_pages || ""}</td>
                <td className="px-6 py-4">{book.current_page || ""}</td>
                <td className="px-6 py-4">{book.current_chapter || ""}</td>
                <td className="px-6 py-4">{book.started_reading || ""}</td>
                <td className="px-6 py-4">{book.finished_reading || ""}</td>
                <td className="px-6 py-4">{book.complete}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
