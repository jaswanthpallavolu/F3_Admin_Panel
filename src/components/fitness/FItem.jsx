import React, { useState } from 'react'
import { Button, Modal, Fade, Box, Backdrop, Input } from '@mui/material'
import { useMutation } from 'react-query'
import axios from 'axios'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'min(25rem,70%)',
    bgcolor: 'background.paper',
    boxShadow: 20,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
};

export default function FItem({ item, setStatus }) {
    const [open, setOpen] = useState(false);
    const handleModal = () => setOpen(!open);

    const [title, setTitle] = useState()
    const [link, setLink] = useState()


    const DeleteItem = useMutation(id => axios.delete(process.env.REACT_APP_SERVER + 'fitness/item/' + id))
    const UpdateItem = useMutation((data) => axios.put(process.env.REACT_APP_SERVER + 'fitness/item/' + data.id, data.params))

    const handleDelete = () => {
        DeleteItem.mutate(item.itemId)
        setTimeout(() => {
            setStatus(item.title + 'deleted!')
        }, 500)
    }
    const handleUpdate = () => {
        if ((item.link === link) && (item.title === title)) {
            handleModal()
            return
        }
        const data = {
            id: item.itemId,
            params: { link: link, title: title }
        }
        UpdateItem.mutate(data)
        setTimeout(() => {
            setStatus(item.title + 'updated!')
            handleModal()
        }, 500)

    }
    const customBackdrop = () => {
        return (
            <Backdrop
                style={{ background: 'rgba(0,0,0,.7)' }}
                open={open}
                onClick={handleModal}
            ></Backdrop>
        )
    }

    return (
        <>
            <div className="frame" >
                <div className="item_title">{item.title}</div>
                <iframe
                    src={item.link}
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                <div>
                    <Button size="small" variant='outlined' sx={{ m: 1 }} color='error' onClick={handleDelete}>Delete</Button>
                    <Button size="small" variant='outlined' sx={{ m: 1 }} onClick={() => { setTitle(item.title); setLink(item.link); handleModal() }}>Update</Button>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleModal}
                closeAfterTransition
                BackdropComponent={customBackdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Input placeholder='title' size='small' value={title} onChange={(e) => setTitle(e.target.value)} />
                        <Input placeholder='link' size='small' value={link} onChange={(e) => setLink(e.target.value)} />
                        <Button variant="outlined" size='small' color='secondary' onClick={handleUpdate}>save changes</Button>
                    </Box>
                </Fade>
            </Modal>
        </>

    )
}
