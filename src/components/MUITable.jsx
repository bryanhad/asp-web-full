import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export const MUITable = ({ data, columns, customHeight }) => {

  return (
    <div className="absolute top-0 left-0 bg-white shadow-md" style={{ height: `${customHeight}`, minWidth: '100%'}}>
      <DataGrid
        rows={data}
        columns={columns}
        options={{ 
          pageSizeOptions: [5, 10, 20],
        }}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'bg-slate-100/70'
          }
      />
    </div>
  );
};
