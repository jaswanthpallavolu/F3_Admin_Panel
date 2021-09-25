import React, { useState } from 'react'
import { Button, Modal, Fade, Box, Backdrop, Input } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'min(25rem,70%)',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 20,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
};

export default function ItemDetails({ item, setStatus, UpdateItem, DeleteItem }) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(item.name);
    const [url, setUrl] = useState(item.url);

    const handleModal = () => setOpen(!open);


    const handleDelete = () => {
        DeleteItem.mutate(item.id)
        setTimeout(() => {
            setStatus(Math.random() * 1000)
        }, 500)
    }
    const handleUpdate = () => {
        if (name === item.name && url === item.url) return
        var data = {
            id: item.id,
            params: { name, url }
        }
        UpdateItem.mutate(data)
        setTimeout(() => {
            setStatus(Math.random() * 10)
        }, 500)
    }
    return (
        <>
            <div className="item-card" >
                <h2>{item.name}</h2>
                <img src={item.url} alt={item.name} />
                <div className="bottom">
                    <Button size='small' variant='outlined' color='error' onClick={handleDelete}>Delete</Button>
                    <Button size='small' variant='outlined' color='secondary' onClick={handleModal} >update</Button>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Input placeholder='Item name' size='small' value={name} onChange={(e) => { setName(e.target.value) }} />
                        <Input placeholder='Item name' size='small' value={url} onChange={(e) => { setUrl(e.target.value) }} />
                        <Button variant="outlined" size='small' color='secondary' onClick={handleUpdate}>save changes</Button>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
