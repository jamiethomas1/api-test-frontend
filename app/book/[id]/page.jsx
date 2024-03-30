'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const params = useParams();
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/books/${params.id}`)
    .then(res => res.json())
    .then(json => setBook(json))
    .catch(err => console.log(err));
  })

  return (
    <main className="mx-auto text-center">
      <p>The book title is: {book.title || ""}</p>
    </main>
  );
}
