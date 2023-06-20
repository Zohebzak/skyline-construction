import React, { useEffect } from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { CompleteEvent, deleteEventId, getEventAll } from '../../services/admin.service';
import Button from '@mui/material/Button';
import './AddGallery.css'
import MountedModal from './MountedModal'


function AddGallery() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "Sr no" ,
       },
       
       {
        field: "Image",
        headerName: "Image",
        sortable: false,
        renderCell: (params) => (
            <img src='' alt='site image' variant="contained" color="secondary"/>
                
        ),
    },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: (params) => (
                <Button variant="contained" color="secondary">
                    Delete
                </Button>
            ),
        },


    ];
    const [dataRow, setDataRow] = React.useState([])

    const fetchData = async () => {
        const data = await getEventAll()
        console.log("hello");
        setDataRow(data.data.Events);
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <>
       
            <div className='addCategoryDiv' style={{ textAlign: 'right', marginTop: '1rem', marginRight: '1.7rem' }}>
                <div className='addCategoryButton'>
                    <  MountedModal refetch={fetchData} />
                </div>
            </div>
            <Box m="20px">
                {/* <Header title="TEAM" subtitle="Managing the Team Members" /> */}
                <Box
                    m="40px 0 0 0"
                    height="75vh"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                        },
                        "& .name-column--cell": {
                            color: colors.greenAccent[300],
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.blueAccent[700],
                            borderBottom: "none",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: colors.primary[400],
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: colors.blueAccent[700],
                        },
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                    }}
                >
                    <DataGrid rows={dataRow}  columns={columns}  getRowId={(row) => row._id }/>
                </Box>
            </Box>
        </>
    )
}

export default AddGallery