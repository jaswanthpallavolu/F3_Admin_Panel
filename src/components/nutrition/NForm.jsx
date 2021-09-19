import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function NForm({ Id, handleCategory, handleSearch }) {
    const { data, isLoading, error } = useQuery("all", async () => {
        return (
            await axios.get('http://localhost:2000/category/')

        )

    })
    if (isLoading) return <div className="loading">Loading...</div>
    if (error) return <span>{error}</span>

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>

            <FormControl sx={{ m: 2, minWidth: 150 }}>
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
            <Button variant='contained' color='secondary' onClick={handleSearch}>Search</Button>

        </div>
    )
}
