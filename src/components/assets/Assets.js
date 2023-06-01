import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { CompleteEvent, deleteEventId, getEventAll } from '../../services/admin.service';
import KeepMountedModal from './KeepMountedModal';
import Button from '@mui/material/Button';

const data = [
    {
        id: 1,
        name: "Stone Crusher",
        age: "01",
        phone: "roll jack",
        accessLevel: "200 TPH",

    },
    {
        id: 2,
        name: "Ajax Boom Pump",
        age: "01",
        phone: "-",
        accessLevel: "A30Zx",
    },
    {
        id: 3,
        name: "Concrete Batching Plant",
        age: "02 ",
        phone: "-",
        accessLevel: "-",
    },
    {
        id: 4,
        name: "Auto Level ",
        age: "03",
        phone: "-",
        accessLevel: "-",
    },
    {
        id: 5,
        name: "Water Tanker .",
        age: "06",
        phone: "-",
        accessLevel: "-",
    }
    ,
    {
        id: 6,
        name: "Excavator .",
        age: "02",
        phone: "Tata Hitachi ",
        accessLevel: "210 ",
    },
    {
        id: 7,
        name: "Excavator .",
        age: "02",
        phone: "Tata Hitachi ",
        accessLevel: "120 ",
    },
    {
        id: 8,
        name: "Excavator .",
        age: "01",
        phone: "Tata Hitachi ",
        accessLevel: "70 ",
    },
    {
        id: 9,
        name: "Excavator .",
        age: "02",
        phone: "Kamatsu ",
        accessLevel: "220 ",
    },
    {
        id: 10,
        name: "JCB .",
        age: "01",
        phone: "Ka-matsu ",
        accessLevel: "- ",
    },
    {
        id: 11,
        name: "JCB .",
        age: "01",
        phone: "Ka-matsu ",
        accessLevel: "- ",
    },
    {
        id: 12,
        name: "Breaker .",
        age: "02",
        phone: "- ",
        accessLevel: "Tata",
    }
]

function Assets() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "Sr no" },
        {
            field: "name",
            headerName: "Equipment",
            flex: 1,
            cellClassName: "name-column--cell",

        },
        {
            field: "age",
            headerName: "No of Unit",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Kind of Make",
            flex: 1,
        },
        {
            field: "accessLevel",
            headerName: "Capacity",
            flex: 1,

        },
        {
            field: "Location",
            headerName: "Location",
            flex: 1,

        },
        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            renderCell: (params) => (
                <Button variant="contained" color="primary">
                    Edit
                </Button>
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
        setDataRow(data.data.Events);
    }
    return (
        <>
            {/* <div className='main-Assets'>
                <h1>Assets project</h1>
                <p>As a Reputed company we have successfully Assets projects with all sefty norms </p>
                <table>
                    <tr>
                        <th>sr no</th>
                        <th>Name of Work</th>
                        <th>amount of work (in
                            lacks)</th>

                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Construction of Uddhat Barrage across Nira River Taq. Indapur,Dist. Pune. (
                            Sublet from Shri Hari Associates Pvt.Ltd)</td>
                        <td>15000</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Construction of Earthwork, C.C Lining & Structures of Minors & Distributories
                            in Km 33 to 37 of Left Bank Canal of Lower Dudhna Project</td>
                        <td>3839
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>construction of Earthwork, C.C Lining & Structures of Minors & Distributories
                            in Km 1 to 15 of Left Bank Canal of Lower Dudhna Project </td>
                        <td>2650</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>construction of Earthwork, C.C Lining & Structures of Minors & Distributories
                            in Km 1 to 15 of Left Bank Canal of Lower Dudhna Project </td>
                        <td>2600.4</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Construction of Earthwork, C.C Lining & Structures of Minors & Distributories
                            in Km 1 to 10 of Right Bank Canal of Lower Dudhna Project</td>
                        <td>2344</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Construction of Balance Structure in Km 0 to 21.76 of Tail Dy. On Right bank
                            Canal of Lower Dudhna Project.</td>
                        <td>800</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Parbhani I / A Construction of Built up Gutters in Phase - 1 </td>
                        <td>234
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Construction of C.C Road Word No 8 & 12 Parbhani </td>
                        <td>150</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Nimn Dudhna Right Bank Km 0 to 1 C.C Lining of Lower Dudhna Project
                        </td>
                        <td>115</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Construction of RCC drain situated at from Ramesh Kade to Girish Bansilal
                            Ganpati Chowk, Weekly Bazaar, Prabhag no. 4 Jintur Dist. Parbhani </td>
                        <td>95.32
                        </td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Construction of CC Road situated at from chowk to house of Bhaskar Rao
                            Ghuge, Prabhag no. 5 Jintur Dist. Parbhani for M.C.Jintur</td>
                        <td>62.28
                        </td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Consturction of CC Road from house of Shymsundar Despande situated at
                            Sambhaji Nagar, jprabhag no. 11 Jintur, Parbhani for M.C. Jintur </td>
                        <td>51.17</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>Consturction of CC Road situated at from Acha general store to Niwati
                            Mohalla Masjid prabhag no 5 Jintur Dist Parbhani for M.C. Jintur</td>
                        <td>45.13</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>Proposed Tree Plantation for Jintur Town for Municipal Council Jintur </td>
                        <td>37.64</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>Construction of RCC drain situated at from chowk to house ofBhaskar Rao
                            Ghuge, Prabhag no. 5 Jintur Dist. Parbhani for M.C.Jintur </td>
                        <td>33.45</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>Consturction of Samaj Mandir (Barbar Samaj) situated at. Green Park 2 for
                            M.C. Jintur Dist. Parbhani </td>
                        <td>10.77</td>
                    </tr>
                </table>
            </div> */}
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
                    <DataGrid rows={data} columns={columns} />
                </Box>
            </Box>
        </>
    )
}

export default Assets