import React, { useState, useEffect } from 'react'

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
        sessionStorage.setItem('f_sid', id)
        setCategoryId(id)
    }
    useEffect(() => {
        const b = sessionStorage.getItem('f_sid')
        if (b) { setCategoryId(b); setSearchId(b) }
    }, [])
    return (
        <div className='fitness'>
            <Fheader Id={categoryId} handleCategory={handleCategory} handleSearch={handleSearch} />
            <Section searchId={searchId} />
        </div>
    )
}
