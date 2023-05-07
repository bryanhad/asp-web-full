import { users, userColumns } from '../../data/dummyUsers'
import { blogs, blogColumns } from '../../data/blogs'
import { SummaryBlock } from '../../components/SummaryBlock'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit'
import { MUITable } from '../../components/MUITable'

import { useContext, useEffect, useState } from 'react'
import { DatasContext } from '../../context/DatasContext'
import { Link } from 'react-router-dom'

export const UserHome = () => {

  const {datas, setDatas} = useContext(DatasContext)

  return (
    <div className="w-full h-full bg-slate-100">
      <div className="p-4 flex flex-col sm:flex-row gap-6 items-center">
        <SummaryBlock
          title="USERS"
          total={datas.length}
          linkName="see all users"
          path="members"
          icon={
            <SupervisedUserCircleIcon
              className="text-asp-yellow"
              fontSize="large"
            />
          }
        />
        <SummaryBlock
          title="BLOGS"
          total={blogs.length}
          linkName="see all blogs"
          path="blogs"
          icon={
            <VerticalSplitIcon className="text-asp-yellow" fontSize="large" />
          }
        />
      </div>

      <div className="w-full p-4">
        <MiniTable title="MEMBER LIST" link='/user/members/new'>
          <MUITable data={datas} columns={userColumns} customHeight="372px" />
        </MiniTable>
        <MiniTable title="BLOG LIST" link='/user/blogs/new'>
          <MUITable data={blogs} columns={blogColumns} customHeight="370px" />
        </MiniTable>
      </div>
    </div>
  )
}

const MiniTable = ({ children, title, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="font-[600] text-slate-400">{title}</div>
        <Link to={link}>
          <button
            className="border border-green-400 text-green-400 py-1 px-3 rounded-md"
            type="button"
          >
            Add New
          </button>
        </Link>
      </div>
      <div className=" w-full overflow-x-auto relative min-h-[372px]">
        {children}
      </div>
    </div>
  )
}
