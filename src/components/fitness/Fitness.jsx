import React, { useState } from 'react'

import Fheader from './Fheader'
import Section from './Section'

export default function Fitness() {
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
        <div className='fitness'>
            <Fheader Id={categoryId} handleCategory={handleCategory} handleSearch={handleSearch} />
            <Section searchId={searchId} />
        </div>
    )
}
