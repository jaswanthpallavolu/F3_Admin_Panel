import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import { FormControl, Select, Button, InputLabel, MenuItem, CircularProgress } from '@mui/material';


export default function NForm({ Id, handleCategory, handleSearch }) {
    const { data, isLoading, error } = useQuery("all", async () => {
        const url = process.env.REACT_APP_SERVER + 'nutrition/category/'
        // console.log(String(url))
        return (
            await axios.get(url)
        )

    })
    if (isLoading) return <div style={{ textAlign: 'center' }}  ><CircularProgress color='primary' /></div>
    if (error) return <span>{error}</span>

    return (
        <div className="head">
            <FormControl sx={{ m: 2, minWidth: 150 }} >
                <InputLabel id="demo-simple-select-helper-label" size="small">Category</InputLabel>
                <Select
                    size='small'
                    // labelId="demo-simple-select-helper-label"
                    // id="demo-simple-select-helper"
                    value={Id}
                    label="category"
                    onChange={handleCategory}
                >
                    {/* <MenuItem value=""><em>None</em></MenuItem> */}
                    {data.data?.map(i => {
                        if (i.sub.length) {
                            return (
                                i.sub.map(j => (
                                    <MenuItem value={j.id} key={Math.random() * 10000}>{j.category}</MenuItem>
                                )))
                        }
                        else {
                            return (<MenuItem value={i.id} key={Math.random() * 10000}>{i.category}</MenuItem>)
                        }

                    })}
                </Select>
            </FormControl>
            <Button variant='contained' color='secondary' onClick={handleSearch} size='small'>Search</Button>

        </div>
    )
}
