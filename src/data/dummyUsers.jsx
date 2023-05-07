import SettingsIcon from "@mui/icons-material/Settings";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "User",
    width: 200,
    renderCell: (params) => (
      <div className="flex">
        <div className="relative">
          {params.row.isAdmin === "true" && (
            <SettingsIcon
              className="absolute top-0 left-0 translate-x-[-50%] text-asp-yellow"
              sx={{ fontSize: 15 }}
            />
          )}
          <img
            className="w-[30px] h-[30px] rounded-full object-cover"
            src={params.row.profilePic}
            alt=""
          />
        </div>
        <p className="ml-2">{params.row.username}</p>
      </div>
    ),
  },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 140 },
  { field: "position", headerName: "Position", width: 160 },
  {
    field: "isAdmin",
    headerName: "Role",
    width: 70,
    renderCell: (params) => (
      <span
        className={
          params.row.isAdmin === "true"
            ? "text-asp-yellow font-semibold"
            : "text-slate-500 text-semibold"
        }
      >
        {params.row.isAdmin === 'true' ? 'Admin' : 'User'}
      </span>
    ),
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => (
      <div className="flex gap-4 items-center">
        <Link to={`/user/members/${params.row.username}`}>
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

export const users = [
  {
    id: 1,
    image: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    fullname: "John Doe",
    username: "JohnD",
    phone: "085216165452",
    email: "JohnDoe@gmail.com",
    address: "10 Melody Lane, Richardson,tx, 35081  United States",
    password: "iLike2Cats",
    position: "Managing Associate",
    role: "admin",
  },
  {
    id: 2,
    image:
      "https://pbs.twimg.com/profile_images/1002416157280727040/7SjA9KTJ_400x400.jpg",
    fullname: "Jessica Lau",
    username: "JessLau",
    phone: "0829930949",
    email: "JessLau@gmail.com",
    address: "34 Davis Street, Fenton,mi, 48430  United States",
    password: "iLike3Cats",
    position: "Senior Associate",
    role: "user",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1191348064/photo/young-man-look-to-you.jpg?s=612x612&w=0&k=20&c=wAPlsmVwcMLiI0sJ_lyvOz5G2iHRujNtKZg3LJWhwFQ=",
    fullname: "Billy Dan",
    username: "BillDn",
    phone: "085922734057",
    email: "BillyDan19@gmail.com",
    address: "21 Lagoon Road, Seaford,de, 19933  United States",
    password: "iLike4Cats",
    position: "Managing Partner",
    role: "user",
  },
  {
    id: 4,
    image:
      "https://www.forbesindia.com/media/photogallery/2018/Aug/05_sanjivmehta_tcm1255-432827_20180823035517_930x584.jpg",
    fullname: "Rakesh Don",
    username: "Rakesh",
    phone: "0899205597",
    email: "RakeshDon48@gmail.com",
    address: "16 Morton Avenue, Saugus,ma, 1906  United States",
    password: "iLike5Cats",
    position: "Partner",
    role: "user",
  },
  {
    id: 5,
    image:
      "https://images.squarespace-cdn.com/content/v1/5a99d01c5ffd206cdde00bec/7e125d62-e859-41ff-aa04-23e4e0040a33/image-asset.jpeg?format=1000w",
    fullname: "Saanvi Julia",
    username: "SaanJ",
    phone: "08682256956",
    email: "Saanvii@gmail.com",
    address: "16 Todds Point Road, Simpsonville,ky, 40063  United States",
    password: "iLike6Cats",
    position: "Associate",
    role: "user",
  },
  {
    id: 6,
    image:
      "https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A=",
    fullname: "Dina Putri",
    username: "DinaPut",
    phone: "08724720918",
    email: "DinaPutt@gmail.com",
    address: "33 Rucker Road, Grosse Ile,mi, 48138  United States",
    password: "iLike7Cats",
    position: "Junior Assoociate",
    role: "admin",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCulVgTjoBGZ_QfGzZeQjfVLLN-R9Tt5mIf1fgnaVhXoKd8lNbTaGceQp8mdalrpgjRE&usqp=CAU",
    fullname: "Brodi Jenggot",
    username: "BrodJengg",
    phone: "089181962522",
    email: "BrodiJenggote@gmail.com",
    address: "4 Owens Road, Hillsboro,al, 35643  United States",
    password: "iLike8Cats",
    position: "Junior Assoociate",
    role: "user",
  },
];
