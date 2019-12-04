import React from 'react';

import './menu-directory.styles.scss'
import { MenuItem } from '../menu-item/menu-item.components'

class MenuDirectory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
            {
                id:1,
                title:'hats',
                imageUrl:'https://source.unsplash.com/1600x900/?hats'               

            },
            {
                id:2,
                title:'jackets',
                imageUrl:'https://source.unsplash.com/1600x900/?jackets,store'            

            },
            {
                id:3,
                title:'sneakers',
                imageUrl:'https://source.unsplash.com/1600x900/?sneakers,store'               

            },
            {
                id:4,
                title:'womens',
                imageUrl:'https://source.unsplash.com/1600x900/?women,cloth,wear,store',
                size:'large'               

            },
            {
                id:5,
                title:'mens',
                imageUrl:'https://source.unsplash.com/1600x900/?men,cloth,wear,store',
                size:'large'                        

            },]
        }
    }
    render(){
        return(
            <div className="menu-directory">
                {
                    this.state.sections.map(({title , id , imageUrl,size})=><MenuItem key={id} title={title} imageUrl={imageUrl} size={size}></MenuItem>)
                }
            </div>
        )
    }
}

export default MenuDirectory

 