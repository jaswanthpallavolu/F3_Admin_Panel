import React, { useState, useEffect } from 'react'

import NForm from './NForm';
import Items from './Items';
import './nutrition.css'

export default function Nutrition() {
    const [categoryId, setCategoryId] = useState('')
    const [searchId, setSearchId] = useState('')

    const handleSearch = () => {
        sessionStorage.setItem('n_s_id', categoryId)
        setSearchId(categoryId)
    }
    const handleCategory = (event) => {
        var id = event.target.value
        setCategoryId(id)
    };

    useEffect(() => {
        const s_id = sessionStorage.getItem('n_s_id')
        if (s_id) { setCategoryId(s_id); setSearchId(s_id) }
    }, [])
    return (
        <div className='nutrition'>
            <NForm Id={categoryId} handleCategory={handleCategory} handleSearch={handleSearch} />
            <Items searchId={searchId} />
        </div>
    )
}
