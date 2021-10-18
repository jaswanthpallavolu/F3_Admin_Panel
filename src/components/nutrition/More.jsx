import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useQuery } from 'react-query'
import { CircularProgress, Button } from '@mui/material'
import axios from 'axios'

import './more.css'
import EditForm from './EditForm'

export default function More() {
    const [sUp, setSup] = useState()
    const location = useLocation()
    const history = useHistory()
    const [toggle, setToggle] = useState(true)

    const { data, isLoading, error } = useQuery([sUp], () => {
        const url = process.env.REACT_APP_SERVER + 'nutrition/item/' + location.state.id
        return axios.get(url)
    })
    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
    if (isLoading) return <div style={{ marginTop: '10%', textAlign: 'center' }} ><CircularProgress color='primary' /></div>
    if (error) return <span>{error}</span>
    return (
        <div className="item_details">
            <button className="back" onClick={() => { history.goBack() }}><i className="fas fa-arrow-left"></i> back</button>
            {data?.data ?
                <>
                    <div className="main">
                        <div className="left">
                            <div className="name">{data.data.itemName}</div>
                            <img src={data.data.url} alt={data.data.itemName} />
                        </div>
                        <div className="right">
                            {data.data?.more ?
                                <>
                                    <div className="des">{data.data.more?.description}</div>
                                    <div className="links">
                                        {data.data.more?.blogs.map(i => (
                                            <div className="title" key={Math.random() * 200}><a href={i.link} target='_blank' rel="noreferrer">{i.name}</a></div>
                                        ))}
                                    </div>
                                </>
                                : <h1>None</h1>}
                        </div>
                    </div>
                </>
                : ''}

            {!toggle ? <EditForm item={data?.data} setToggle={setToggle} setSup={setSup} /> : ''}
            <div className="e_btns">
                {toggle ? <Button variant='contained' className="edit" onClick={() => { setToggle(!toggle) }}><i className="far fa-edit"></i> edit</Button> : ''}
            </div>

        </div>
    )
}