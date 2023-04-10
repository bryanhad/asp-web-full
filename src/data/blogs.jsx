import { users } from "./dummyUsers";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";

export const blogColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 280,
    renderCell: (params) => (
      <div className="flex items-center">
        <img
          className="w-[30px] h-[30px] rounded-md object-cover"
          src={params.row.image}
          alt=""
        />
        <p className="ml-2">{params.row.title}</p>
      </div>
    ),
  },
  {
    field: "createdBy",
    headerName: "By",
    width: 200,
    renderCell: (params) => (
      <div className="flex items-center">
        <img
          className="w-[30px] h-[30px] rounded-full object-cover"
          src={params.row.createdBy.image}
          alt=""
        />
        <p className="ml-2">{params.row.createdBy.name}</p>
      </div>
    ),
  },
  { field: "desc", headerName: "Description", width: 340 },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => (
      <div className="flex gap-4 items-center">
        <Link to={`/user/blogs/${params.row.id}`}>
          <button
            className="bg-transparent hover:bg-blue-100 border border-blue-400 text-blue-400 rounded-md py-1 px-4"
            type="button"
          >
            View
          </button>
        </Link>
        <button
          className="bg-transparent hover:bg-red-100 border border-red-400 text-red-400 rounded-md py-1 px-6 flex items-center"
          type="button"
        >
          <DeleteOutlineIcon sx={{ fontSize: 20 }} />
        </button>
      </div>
    ),
  },
];

export const blogs = [
  {
    id: 1,
    title: "Lorem ipsum",
    image:
      "https://images.unsplash.com/photo-1616414627817-42b4d91bcb5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
    createdBy: { image: users[1].image, name: users[1].username },
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla.",
  },
  {
    id: 2,
    title: "Nemo enim ipsam",
    image:
      "https://t3.ftcdn.net/jpg/04/45/40/12/360_F_445401212_PEDNESWvENUbesA25i8E42auVqffefxY.jpg",
    createdBy: { image: users[2].image, name: users[2].username },
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla.",
  },
  {
    id: 3,
    title: "Nam libero tempore",
    image:
      "https://media.istockphoto.com/id/1285745629/vector/supreme-courthouse-flat-color-vector-illustration.jpg?s=612x612&w=0&k=20&c=1TpJ_OhGY2qRHPEhbfuYig3Wg2Vo6YxygHJocbG9uRg=",
    createdBy: { image: users[4].image, name: users[4].username },
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla.",
  },
];
