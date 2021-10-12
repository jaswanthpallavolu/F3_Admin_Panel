import React, { useRef, useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import { Input, Button, Typography, CircularProgress } from '@mui/material'
import './section.css'
import axios from 'axios'

import FItem from './FItem'

export default function Section({ searchId }) {
    const [status, setStatus] = useState()
    const { data, isLoading, error } = useQuery([searchId, status], () => {
        if (!searchId) return
        const url = process.env.REACT_APP_SERVER + 'fitness/categories/' + searchId
        return axios.get(url)
    })


    if (error) return <span>{error}</span>
    return (
        <div className="fsection">
            {searchId ? <ItemForm setStatus={setStatus} searchId={searchId} /> : ''}
            {!isLoading ?
                <>
                    {data?.data?.map(i => (

                        <div className="content" key={i.id}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '.5rem' }}>
                                <Typography variant='h4' style={{ textTransform: 'capitalize' }}>{i.name}</Typography>
                                <Typography variant='h7'>result : {i.items.length}</Typography>
                            </div>
                            <div className="list">
                                {Array.from(i.items).reverse().map(item => (
                                    <FItem item={item} key={item.itemId} setStatus={setStatus} />
                                ))}
                            </div>
                        </div>
                    ))}


                </>
                : <CircularProgress color='primary' sx={{ mt: 5 }} />}

        </div>
    )
}

export function ItemForm({ searchId, setStatus }) {
    const titleRef = useRef()
    const linkRef = useRef()
    const AddItem = useMutation((obj) => axios.post(process.env.REACT_APP_SERVER + 'fitness/add/item/', obj))

    const handleAdd = (e) => {
        e.preventDefault()
        var title = titleRef.current.value
        var link = linkRef.current.value
        if (!title || !link) return
        const obj = { title, link, categoryId: searchId }
        AddItem.mutate(obj)
        titleRef.current.value = ''
        linkRef.current.value = ''
        setTimeout(() => {
            setStatus(Math.random)
        }, 300)

    }
    return (
        <form className='iform'>
            <Input type="text" size="small" color="secondary" placeholder="enter title" inputRef={titleRef} />
            <Input size="small" placeholder="enter link" color="secondary" inputRef={linkRef} />
            <Button size='small' variant='contained' color="secondary" type="submit" onClick={handleAdd}>Add Item</Button>
        </form>
    )
}
