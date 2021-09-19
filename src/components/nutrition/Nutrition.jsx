import React, { useState } from 'react'

import NForm from './NForm';
import Items from './Items';
import './nutrition.css'

export default function Nutrition() {
    const [categoryId, setCategoryId] = useState('')
    const [searchId, setSearchId] = useState('')

    const handleSearch = () => {
        setSearchId(categoryId)
    }
    const handleCategory = (event) => {
        var id = event.target.value
        setCategoryId(id)
    };

    return (
        <div className='nutrition'>
            <h1>Nutrition page</h1>

            <NForm Id={categoryId} handleCategory={handleCategory} handleSearch={handleSearch} />
            <Items searchId={searchId} />

        </div>
    )
}
