export default function TableBody({data}) {
  return (
    <tbody className="text-left">
      {data.map(book => (
        <tr key={book.id} className="bg-white border-b hover:bg-gray-50">
          <td className="px-6 py-4 w-16">{book.complete ? (
            <input type="checkbox" checked />
          ) : (
              <input type="checkbox" />
            )}</td>
          <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-28 overflow-hidden">{book.title ? (
            <a href={`/book/${book.id}`}>{book.title}</a> 
          ) : (
            ""
          )}</td>
          <td className="px-6 py-4">{parseInt((book.current_page / book.length_pages) * 100) || "0"}%</td>
        </tr>
      ))}
    </tbody>
  )
}
