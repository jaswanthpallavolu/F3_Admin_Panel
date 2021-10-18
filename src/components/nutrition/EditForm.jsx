import React, { useRef, useEffect, useState } from 'react'

import { TextareaAutosize, TextField, FormLabel, Button } from '@mui/material'
import { useMutation } from 'react-query'
import axios from 'axios'

export default function EditForm({ item, setToggle, setSup }) {
    const [blogs, setBlogs] = useState([])
    const itemNRef = useRef()
    const urlRef = useRef()
    const desRef = useRef()
    const b_nameRef = useRef()
    const b_linkRef = useRef()

    const UpdateItem = useMutation((data) => axios.put(process.env.REACT_APP_SERVER + 'nutrition/item/' + data.id, data.params))

    const handleUpdate = () => {
        const obj = {
            name: itemNRef.current.value,
            url: urlRef.current.value,
            more: {
                description: desRef.current.value,
                blogs: blogs
            }
        }

        if (item === obj) return
        console.log(obj)
        var data = {
            id: item.itemId,
            params: obj
        }
        UpdateItem.mutate(data)
        setTimeout(() => {
            setSup(Math.random() * 10 + item.itemId)
        }, 500)
    }
    const deleteLink = async (e) => {
        const n = e.target.closest('button').name
        const list1 = blogs.filter(x => x.name !== n)
        setBlogs(list1)
    }
    const addLink = () => {
        const a = b_nameRef.current.value
        const b = b_linkRef.current.value
        if (!a && !b) return
        const obj = { name: a, link: b }
        setBlogs([...blogs, obj])
    }
    useEffect(() => {
        itemNRef.current.value = item.itemName
        urlRef.current.value = item.url
        desRef.current.value = item.more?.description
        if (item.more?.blogs) setBlogs(item.more?.blogs)
    }, [])//eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="form">

            <div className="formG">
                <FormLabel>Name</FormLabel>
                <TextField size='small' placeholder='enter item name' inputRef={itemNRef} />
            </div>
            <div className="formG">
                <FormLabel>URL</FormLabel>
                <TextField size='small' placeholder='enter item name' inputRef={urlRef} />
            </div>
            <div className="formG">
                <FormLabel>Description</FormLabel>
                <TextareaAutosize placeholder='enter description' minRows={3} style={{ width: '30rem' }} ref={desRef} />
            </div>

            <div className="list_links">
                <h3>Links :</h3>
                <div className="formG">
                    <div className="formG">
                        <FormLabel>Link name</FormLabel>
                        <TextField size='small' inputRef={b_nameRef} placeholder='enter item name' />
                    </div>
                    <div className="formG">
                        <FormLabel>url</FormLabel>
                        <TextField size='small' inputRef={b_linkRef} placeholder='enter item name' />
                    </div>
                    <Button onClick={addLink} size='small' variant='outlined' color='success'><i className="fas fa-plus"></i>add</Button>
                </div>
                <div className="links">
                    {blogs.map(i => (
                        <div className="link" key={i.name} >
                            <a href={i.link} target='_blank' rel="noreferrer">{i.name}</a>
                            <button name={i.name}><i className="far fa-times-circle" onClick={deleteLink}></i></button>
                        </div>

                    ))}
                </div>
            </div>
            <div className="e_btns">
                <Button variant='contained' onClick={handleUpdate}>Save</Button>
                <Button variant='outlined' onClick={() => { setToggle(true) }}>cancel</Button>
            </div>
        </div>
    )
}
