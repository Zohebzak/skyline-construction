import * as React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Input, InputLabel, TextField } from '@mui/material';
import './CreateModal.css'
import { addAssets, addEvent } from '../../services/admin.service';
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

export default function KeepMountedModal({ refetch }) {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('6416bb61115dc8d869fde3e1')
    const [madeBy, setMadeBY] = useState('')
    const [unit, setUnit] = useState()
    const [capacity, setCapacity] = useState('')
    const [response, setResponse] = useState(null)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let notify


    async function getFormData(e) {
        e.preventDefault()
        // const formData = new FormData();
        // formData.append("image", img)
        // formData.append("name", name)
        // formData.append("location", location)
        // formData.append("date", date)
        const  payLoad = {
            name: name,
            noUnits:unit,
            madeBy:madeBy,
            capacity:capacity,
            location:location
        }
        const data = await addAssets(payLoad).then((res) => {
            setResponse(res)
            console.log("this is status.......", res.status)
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
                <Button onClick={handleOpen}>Add Event</Button>
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
                                <InputLabel htmlFor='name'>Event Name</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} onChange={(e) => setName(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                            </div>
                            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='name'>Location</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} onChange={(e) => setLocation(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                            </div>
                            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='name'>No Unit</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} type="number" onChange={(e) => setUnit(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                            </div>
                            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='name'>Made By</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} type="text" onChange={(e) => setMadeBY(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                            </div>
                            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='name'>Capacity</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} type="text" onChange={(e) => setCapacity(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                            </div>
                            {/* <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='adminid'>Admin Id</InputLabel>
                                <TextField onChange={(e) => setAdminId(e.target.value)} value={adminid} required id='name' vatiant=' outlined' placeholder="" />
                            </div> */}
                                {/* Made BY  */}
                                {/* <Input className='imgInput' onChange={(e) => setMadeBY(e.target.value)} type="text"  /> */}
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
