export default function TableHead() {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 w-16">☑</th>
        <th scope="col" className="px-6 py-3">Title</th>
        <th scope="col" className="px-6 py-3 w-28">Progress</th>
      </tr>
    </thead>
  )
}
