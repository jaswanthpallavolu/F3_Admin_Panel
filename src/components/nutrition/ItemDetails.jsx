import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material'


export default function ItemDetails({ item, setStatus, DeleteItem }) {
    const history = useHistory()

    const handleDelete = () => {
        DeleteItem.mutate(item.id)
        setTimeout(() => {
            setStatus(Math.random() * 1000)
        }, 500)
    }

    return (
        <>
            <div className="item-card" >
                <h2>{item.name}</h2>
                <img src={item.url} alt={item.name} />
                <div className="bottom">
                    <Button size='small' variant='outlined' color='error' onClick={handleDelete}>Delete</Button>
                    <Button size='small' variant='outlined' color='secondary'
                        onClick={
                            () => { history.push({ pathname: '/admin/nutrition/item', state: { id: item.id } }) }} >more</Button>
                </div>
            </div>

        </>
    )
}
