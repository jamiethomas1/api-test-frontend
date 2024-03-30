import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function Table({data}) {
  return (
    <div className="relative overflow-x-hidden shadow-md rounded-lg mx-4">
      <table className="w-full mx-auto text-sm text-gray-500 table-fixed">
        <TableHead />
        <TableBody data={data} />
      </table>
    </div>
  )
}
