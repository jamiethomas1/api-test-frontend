'use client'

import { useEffect, useState } from "react";
import Table from "./_components/Table";

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
      <Table data={books}/>
    </main>
  );
}
