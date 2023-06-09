import * as React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Input, InputLabel, TextField } from '@mui/material';
import './AddGallery.css'
import { AddGallery, addAssets } from '../../services/admin.service';
// import { adminServices } from '../services/admin.services'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'
};

export default function MountedModal({ refetch }) {
    const [title, setTitle] = useState('')
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let notify


    async function getFormData(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", img)
        formData.append("title", title)
   
  
        const data = await AddGallery(formData).then((res) => {
            if (res.status === 201 || res.status === 200) {
                notify = () => { toast("Event Added Successfully") }
                notify()
                handleClose()
                refetch()
            } else {
                console.log('something went wrong')
            }
        }).catch((error) => {
            console.log("this is an error....", error)
            notify = () => { toast("An Error Occured") }
            notify()
        })
    }

    return (
        <>
            <div >
                <Button onClick={handleOpen}>Add Image</Button>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box component='form'
                        onSubmit={
                            getFormData

                        } Validate autoComplete="off" sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                            Enter Event Details
                        </Typography>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='name'>Event Image</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} onChange={(e) => setTitle(e.target.value)} required vatiant=' outlined' placeholder="" type='text' />
                                <TextField style={{ padding: "0.2rem" }} onChange={(e) => setImg(e.target.files[0])} required id='adminid' vatiant=' outlined' placeholder="" type='file' />
                            </div>
                           
                           
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{ margin: "2rem" }}
                            >
                                ADD
                            </Button>
                        </div>
                    </Box >

                </Modal >
            </div >
            <ToastContainer />
        </>
    );
}
