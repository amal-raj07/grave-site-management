import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import "./style.css";
import { Button } from "../Buttons";
import { useNavigate, useParams } from "react-router-dom";
const rows = [
  { id: 1, col1: "1", col2: "B1" },
  { id: 2, col1: "2 X", col2: "B2" },
  { id: 3, col1: "2 ", col2: "B3" },
  { id: 4, col1: "4", col2: "B4" },
  { id: 5, col1: "5", col2: "B5" },
  { id: 6, col1: "6", col2: "B6" },
];

const columns = [
  { field: "col1", headerName: "Code", width: 500 },
  { field: "col2", headerName: "Description", width:500 },
  { field: "col3", headerName: "Action", width:500 },
];

export default function Table() {
    const navigate = useNavigate();
    const NavigateFunction=()=>{
        navigate("/form")
    }
  return (
    <div className="col-md-12">
      <div className=" flex  bg-slate-300 w-full h-[5rem] text-white text-xl">
        <div className="items-center ml-10 pt-5 font-bold text-[#144332]">
          SECTION CODE
        </div>
        <div>
          <div className=" justify-end input-icons items-center ml-96 pt-5">
            <i className="fa fa-search icon"></i>
            <input className="input-field text-sm" type="text" placeholder="Search By Code or Description" />
          </div>
        </div>
        <div className="items-center ml-48 pt-5 ">
          <Button onClick={NavigateFunction}>
           + Section code
          </Button>
          </div>
      </div>
      <div className="items-center ml-10 w-full mt-5">
      <div style={{ height: 300, width: "90%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
      </div>
    </div>
  );
}
