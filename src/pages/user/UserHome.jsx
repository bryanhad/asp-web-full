import { users, userColumns } from "../../data/dummyUsers";
import { blogs, blogColumns } from "../../data/blogs";
import { SummaryBlock } from "../../components/SummaryBlock";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import { MUITable } from "../../components/MUITable";

export const UserHome = () => {
  return (
    <div className="w-full h-full bg-slate-100">
      <div className="p-4 flex flex-col gap-6 items-center sm:flex-row">
        <SummaryBlock
          title="USERS"
          total={users.length}
          linkName="see all users"
          path="users"
          icon={<SupervisedUserCircleIcon fontSize="large" />}
        />
        <SummaryBlock
          title="BLOGS"
          total={blogs.length}
          linkName="see all blogs"
          path="blogs"
          icon={<VerticalSplitIcon fontSize="large" />}
        />
      </div>

      <div className="w-full p-4">
        <MiniTable title='MEMBER LIST'>
          <MUITable data={users} columns={userColumns} customHeight='370px'/>
        </MiniTable>
        <MiniTable title='BLOG LIST'>
          <MUITable data={blogs} columns={blogColumns} customHeight='370px' />
        </MiniTable>
      </div>
    </div>
  );
};

const MiniTable = ({ children, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="font-[600] text-slate-400">{title}</div>
        <button
          className="border border-green-400 text-green-400 py-1 px-3 rounded-md"
          type="button"
        >
          Add New
        </button>
      </div>
      <div className=" w-full overflow-x-auto relative min-h-[370px]">
        {children}
      </div>
    </div>
  );
};
