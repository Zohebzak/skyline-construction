import React from 'react'
import './Completed.scss'
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";


function Completed() {

    return (
        <>
            <table>
                <tr>
                    <th>sr no</th>
                    <th>Name of work</th>
                    <th>Amount of
                        Work ( In Lacs)</th>
                    <th>Work Done
                        (In lacs)
                    </th>
                    <th>Balance
                        work (In
                        lacs)
                    </th>

                </tr>
                <tr>
                    <td> 1</td>
                    <td>Construction of Uddhat Barrage across Nira River Taq. Indapur,Dist. Pune. (
                        Sublet from Shri Hari Associates Pvt.Ltd)</td>
                    <td>15000</td>
<td></td>
<td></td>

                </tr>
            </table >
        </>
    )
}

export default Completed