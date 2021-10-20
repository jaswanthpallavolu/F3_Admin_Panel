import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from 'react-query'
import axios from 'axios'

import './items.css'

import { Button, Input, CircularProgress } from '@mui/material/'
import ItemDetails from './ItemDetails';

export default function Items({ searchId }) {

    const [status, setStatus] = useState(null)

    const getDetails = async () => {
        if (!searchId) return;
        return (
            await axios.get(process.env.REACT_APP_SERVER + 'nutrition/category/' + searchId)
        )
    }
    const { data, isLoading, error } = useQuery([searchId, status], getDetails)
    const AddItem = useMutation((obj) => axios.post(process.env.REACT_APP_SERVER + 'nutrition/item/add', obj))
    const DeleteItem = useMutation(id => axios.delete(process.env.REACT_APP_SERVER + 'nutrition/item/' + id))

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
    if (error) return <span>{error}</span>
    return (
        <div>
            {searchId ?
                <AddForm id={searchId} AddItem={AddItem} setStatus={setStatus} /> : ''}
            {/* {message.length > 0 ? <Alert sx={{ width: 1 / 4 }} severity="success">Item {message} successfully </Alert> : ''} */}
            {!isLoading ? <>
                {data?.data?.map(i => (
                    <div key={i.id}>
                        <div className="item_head">
                            <h1>{i.category}</h1>
                            <p>(Result : {i.items.length})</p>
                        </div>
                        <div className="items_list" >
                            {Array.from(i.items).reverse().map(item => (
                                <ItemDetails key={item.id} item={item} setStatus={setStatus} DeleteItem={DeleteItem} />
                            ))}
                        </div>
                    </div>
                ))}
            </> : <div style={{ marginTop: '10%', textAlign: 'center' }} ><CircularProgress color='primary' /></div>}

        </div>
    )
}

const AddForm = ({ id, setStatus, AddItem }) => {

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');


    const handleAdd = async (e) => {
        e.preventDefault()
        if (!name || !url) return window.alert('fill all the input fields')
        var obj = {
            categoryId: id,
            itemName: name,
            url: url
        }
        AddItem.mutate(obj)
        setName('')
        setUrl('')
        setTimeout(() => {
            setStatus(Math.random() * 100)
        }, 500)

    }

    const style1 = {
        background: 'white',
        padding: '.2rem',
        borderRadius: '3px'
    }
    return (
        <>

            <form className="add_form" >
                <Input placeholder='Item name' size='small' value={name} style={style1} onChange={(e) => { setName(e.target.value) }} />
                <Input placeholder='image url' size='small' value={url} style={style1} onChange={(e) => { setUrl(e.target.value) }} />
                <Button variant='contained' size='small' onClick={handleAdd} type='submit'>Add Item</Button>
            </form>
        </>
    )
}