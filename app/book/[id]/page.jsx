'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Home() {
  const params = useParams();
  const [book, setBook] = useState([]);
  const [infoVisible, setInfoVisible] = useState(false);
  const toggleInfoVisible = () => setInfoVisible(value => !value);
  useEffect(() => {
    fetch(`http://localhost:8000/api/books/${params.id}`)
    .then(res => res.json())
    .then(json => setBook(json))
    .catch(err => console.log(err));
  })
  
  let start_date = new Date(book.started_reading);
  let started_reading = start_date.toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' })

  return (
    <main className="mx-auto text-center">
      <Image className="mx-auto my-3" width={0} height={0} sizes="100vw" src={book.cover_image_url} alt="" style={{ width: '50%', height: 'auto' }}/>
      <h2 className="font-bold text-2xl">{book.title || ""}</h2>
      <p>by {book.authors_array?.join(', ')}</p>
      <hr className="my-3" />
      <p className="m-4 text-left" onClick={toggleInfoVisible}>More book info</p>
      {infoVisible ? (
        <div>
          <p>Published: {book.published}</p>
          <p>Genre(s): {book.genres_array?.join(', ')}</p>
        </div>
      ) : (<></>)}
      <div className="text-left m-4">
        <p>Progress: {parseInt((book.current_page / book.length_pages) * 100) || "0"}%</p>
        <p>Start date: {started_reading || "0"}</p>
        {book.finished_reading ? (<p>Finished reading: {book.finished_reading}</p>) : (<p>Current page: {book.current_page || "0"}</p>)}
      </div>
      <p className="m-4 font-bold">Mark complete: <input type="checkbox" /></p>
    </main>
  );
}
