import React from 'react'
import './header.scss'
import SearchForm from '../../SearchForm/searchForm'

const header: React.FC = () => {
    return (
        <div className="header-div">
            <div className='page-title'>netflixroulette</div>
            <div className='addButton-div'><button className='add-button'>+ add movie</button></div>
           
            <div className='page-label'>FIND YOUR MOVIE</div>
            <SearchForm />
        </div>
    )
}

export default header