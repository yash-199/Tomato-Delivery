import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className="explore-menu" id='explore-menu'>
            <h1 className='explore-menu-heading'>EXPLORE OUR MENU</h1>
            <p className='explore-menu-text'>Certainly! Here's a paragraph you can use for an "Explore Menu List":

                "Embark on a culinary journey with our 'Explore Menu List,' where every dish is a new adventure waiting to be discovered. Whether you're in the mood for familiar favorites or eager to try something new, our diverse selection offers a taste of the extraordinary. From savory starters to indulgent desserts, each item is crafted with care to bring you a unique dining experience. So, go ahead—explore, savor, and enjoy the rich flavors that await you. Your next favorite dish is just a click away!"</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu