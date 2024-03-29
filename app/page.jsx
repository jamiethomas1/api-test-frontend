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

  // complete 6 progress 120
  return (
    <main className="mx-auto text-center">
      <h1 className="text-4xl my-4">Reading List</h1>
      <div className="relative overflow-x-hidden shadow-md rounded-lg mx-4">
        <table className="w-full mx-auto text-sm text-gray-500 table-fixed">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 w-16">☑</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3 w-28">Progress</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {books.map(book => (
              <tr key={book.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 w-16">{book.complete ? (
                  <input type="checkbox" checked />
                ) : (
                  <input type="checkbox" />
                )}</td>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-28 overflow-hidden">{book.title || ""}</td>
                <td className="px-6 py-4">{parseInt((book.current_page / book.length_pages) * 100) || "0"}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
