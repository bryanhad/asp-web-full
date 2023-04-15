import { MUITable } from '../../components/MUITable'
import { TitlePage } from '../../components/TitlePage'
import { user } from '../../data/NavSource'
import { blogColumns, blogs } from '../../data/blogs'
import EditIcon from '@mui/icons-material/Edit'

export const Profile = () => {
  return (
    <div className="bg-slate-100 w-full h-full p-4">
      <TitlePage>Profile</TitlePage>
      <div className="bg-white shadow-md rounded-md relative mb-4">
        <div className="relative">
          <img
            className="h-[180px] w-full object-cover rounded-t-md"
            src="https://images.unsplash.com/photo-1616414627817-42b4d91bcb5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
          <img
            className="rounded-full w-[120px] h-[120px] object-cover absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%]"
            src={user.image}
            alt=""
          />
        </div>
        <div className="mt-16 p-4 flex flex-col items-center">
          <div className="flex items-center">
            <h1 className="font-semibold">{user.username}</h1>
          </div>
          <div className="my-2 text-center">
            <h4 className="text-sm text-slate-400 tracking-wide	">
              {user.email}
            </h4>
            <h4 className="text-sm text-slate-400 tracking-wide	">
              {user.phone}
            </h4>
          </div>
          <p className="text-asp-yellow font-semibold tracking-wider">
            {user.position}
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-4 mb-4">
        <h1 className="text-slate-400">Blogs Posted:</h1>
        <div className="w-full overflow-x-auto relative min-h-[372px]">
          <MUITable data={blogs} columns={blogColumns} customHeight="372px" />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-4 mb-4">
        <h1 className="text-slate-400">Detail:</h1>
        <div className="py-4 flex flex-col gap-2">
          <div>
            <h1 className="font-semibold tracking-wide text-slate-500">
              Address
            </h1>
            <p className="text-sm ">{user.address}</p>
          </div>
          <div>
            <h1 className="font-semibold tracking-wide text-slate-500">
              Birthday
            </h1>
            <p className="text-sm ">24 December 2000</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-max flex items-center gap-6">
        <button
          type="button"
          className="bg-white shadow-md max-w-max rounded-full cursor-pointer p-4"
        >
          <EditIcon className="text-slate-500 " />
        </button>
      </div>
    </div>
  )
}
