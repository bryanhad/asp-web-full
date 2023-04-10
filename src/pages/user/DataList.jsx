import { Link } from "react-router-dom"
import { MUITable } from "../../components/MUITable"
import { userColumns, users } from "../../data/dummyUsers"

export const DataList = ({title, data, columns}) => {
  return (
    <div className="bg-slate-100 w-full h-full p-4">
      <div className="bg-white p-4 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl text-slate-400 font-[600]">{title}</h1>
          <Link to='new'>
            <button
              className="border border-green-400 text-green-400 py-1 px-3 rounded-md"
              type="button"
            >
              Add New
            </button>
          </Link>
        </div>

        <div className=" w-full overflow-auto relative min-h-[500px]">
          <MUITable data={data} columns={columns} customHeight='500px'/>
        </div>

      </div>
    </div>
  )
}
