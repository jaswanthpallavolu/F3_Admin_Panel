import React, { useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import axios from 'axios'

import './items.css'

import { Button, Input, Alert } from '@mui/material/'


import ItemDetails from './ItemDetails';

export default function Items({ searchId }) {
    const [status, setStatus] = useState('')
    const getDetails = async () => {
        if (!searchId) return;

        return (
            await axios.get(process.env.REACT_APP_SERVER + 'nutrition/category/' + searchId)
        )
    }
    const { data, isLoading, error } = useQuery([searchId, status], getDetails)

    if (error) return <span>{error}</span>
    return (
        <div>
            {searchId ?
                <AddForm id={searchId} setStatus={setStatus} /> : ''}

            {!isLoading ? <>
                {data?.data?.map(i => (
                    <div key={i.id}>
                        <h1>{i.category}</h1>
                        <div className="items_list" >
                            {i.items.map(item => (
                                <ItemDetails key={item.id} item={item} setStatus={setStatus} />
                            ))}
                        </div>
                    </div>
                ))}
            </> : <h3>loading...</h3>}

        </div>
    )
}

const AddForm = ({ id, setStatus }) => {

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    const mutation = useMutation(async (obj) => {
        await axios.post(process.env.REACT_APP_SERVER + 'nutrition/item/add', obj)
    })
    const handleAdd = async () => {
        if (!name || !url) return window.alert('fill all the input fields')
        var obj = {
            categoryId: id,
            itemName: name,
            url: url
        }
        mutation.mutate(obj)
        setName('')
        setUrl('')
        setTimeout(() => {
            setStatus(Math.random())
        }, 300)

    }
    if (mutation.isLoading) return <span>Loading.....</span>

    return (
        <>
            {mutation.isSuccess ? <Alert sx={{ width: 1 / 4 }} severity="success">item added successfully </Alert> : ''}
            <form className="add_form" >
                <Input placeholder='Item name' size='small' value={name} onChange={(e) => { setName(e.target.value) }} />
                <Input placeholder='image url' size='small' value={url} onChange={(e) => { setUrl(e.target.value) }} />
                <Button variant="outlined" size='small' onClick={handleAdd}>Add Item</Button>
            </form>
        </>
    )
}