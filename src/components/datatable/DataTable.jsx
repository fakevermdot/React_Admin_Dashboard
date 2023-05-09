import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumn, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {db} from "../../firebase"
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
const DataTable = () => {
  const [data, setData] =useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      let list = []
      try{
        const querySnapshot = await getDocs(collection (db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()})
        });
        setData(list)
      }catch(err){
        console.log(err)
      }
    };
    fetchData()
  },[])
  console.log(data)
  const handleDelete = async(id) => {
    try{
      await deleteDoc(doc(db, "users", id))
      setData(data.filter(item=> item.id !== id))
    }catch(error){
      console.log(error)
    }
    
  }
    const actionColumn = [
        {field: "action", headerName:"Action", width:200, renderCell: (params)=>{
            return(
                <div className="cellAction">
                  <Link to="/users/test" style={{textDecoration:"none"}}>
                    <div className="viewButton">
                        View
                    </div>
                    </Link>
                    <div className="deleteButton" onClick={()=> handleDelete(params.row.id)}>
                        Delete
                    </div>
                </div>
            )
        }}
    ]
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new"  className="link">
          Add New
        </Link>
      </div>
      <DataGrid
      className="datagrid"
        rows={data}
        columns={userColumn.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
