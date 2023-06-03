import React, { useEffect } from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { CompleteEvent, deleteEventId, getAllProject } from '../../services/admin.service';
import KeepMountedModal from './KeepMountedModal';
import Button from '@mui/material/Button';



function Projects() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field: "name",
            headerName: "Name of Work",
            flex: 1,
            cellClassName: "name-column--cell",

        },
        {
            field: "amount",
            headerName: "No of Unit",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "workDone",
            headerName: "Amount of Work(in lacks)",
            flex: 1,
        },
        {
            field: "balanceWork",
            headerName: "Work Done (in lacks) ",
            flex: 1,

        },
        {
            field: "Status",
            headerName: "Balance Works (in lacks)",
            flex: 1,

        },
        {
            field: "location",
            headerName: "Status",
            flex: 1,

        },
        
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: (params) => (
            
                <Button variant="contained" color="error">
                    Delete
                </Button>
            ),
        },
        {
            field: "completed",
            headerName: "Complete",
            sortable: false,
            renderCell: (params) => (
                <Button variant="contained" color="primary">
             Complete
                </Button>
            ),
        }


    ];
    const [dataRow, setDataRow] = React.useState([])

    const fetchData = async () => {
        const data = await getAllProject()
        setDataRow(data.data.Events);
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <>
            <div className='addCategoryDiv' style={{ textAlign: 'right', marginTop: '1rem', marginRight: '1.7rem' }}>
                <div className='addCategoryButton'>
                    <  KeepMountedModal refetch={fetchData} />
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

export default Projects