import React, { useEffect } from 'react'
import { Box, ImageList, ImageListItem, ImageListItemBar, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { CompleteEvent, deleteEventId, getAllGalery, getEventAll } from '../../services/admin.service';
import Button from '@mui/material/Button';
import './AddGallery.css'
import MountedModal from './MountedModal'


function AddGallery() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [dataRow, setDataRow] = React.useState([])

    const fetchData = async () => {
        const data = await getAllGalery()
        setDataRow(data.data.Events);
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>

            <div className='addCategoryDiv' style={{ textAlign: 'right', marginTop: '1rem', marginRight: '1.7rem' }}>
                <div className='addCategoryButton'>
                    <  MountedModal refetch={fetchData} />
                </div>
            </div>
            <Box m="20px">
                <div className='image-galley'>

                    <ImageList sx={{ width: 600, height: 350 }} >
                        {dataRow.map((item) => (
                            <>
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.image}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item._id}
                                        loading="lazy"
                                    />

                                    <ImageListItemBar
                                        title={item.title}
                                        position="below"
                                    />
                                    <Button
                                        variant="contained"
                                        color="error"
                                        type="submit"
                                        sx={{ margin: "2rem" }}
                                    >
                                        delete
                                    </Button>
                                </ImageListItem>
                            </>
                        ))}
                    </ImageList>

                </div>
            </Box>
        </>
    )
}

export default AddGallery