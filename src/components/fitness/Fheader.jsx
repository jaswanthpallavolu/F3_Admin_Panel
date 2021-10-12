import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import { FormControl, InputLabel, Select, Button, CircularProgress } from '@mui/material'
import './fheader.css'

export default function Fheader({ Id, handleCategory, handleSearch }) {
    const getCategories = () => {
        const url = process.env.REACT_APP_SERVER + 'fitness/categories/'
        return (axios.get(url))
    }
    const { data, isLoading, error } = useQuery('jgsuc', getCategories)

    if (isLoading) return <div  ><CircularProgress color='primary' /></div>
    if (error) return <span>{error}</span>
    return (
        <div className='header'>
            <FormControl sx={{ m: 2, minWidth: 150 }} >
                <InputLabel size="small">Category</InputLabel>
                <Select
                    native
                    size='small'
                    label="category"
                    onChange={handleCategory}
                    value={Id}
                >
                    <option aria-label="None" value="" />
                    {data?.data?.map(i => (
                        <optgroup style={{ marginTop: '1rem' }} label={i.name} key={i.id}>
                            {i.sections.map(j => (
                                <option value={j.id} key={Math.random() * 100 * 5}>{j.name}</option>
                            ))}
                        </optgroup>
                    ))}

                </Select>
            </FormControl >
            <Button size="small" variant='contained' onClick={handleSearch}>Search</Button>
        </div>
    )
}