import React from 'react';

import './menu-directory.styles.scss'
import  MenuItem  from '../menu-item/menu-item.components'

class MenuDirectory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
            {
                id:1,
                title:'hats',
                imageUrl:'https://source.unsplash.com/1600x900/?hats' ,
                linkUrl:'hats'              

            },
            {
                id:2,
                title:'jackets',
                imageUrl:'https://source.unsplash.com/1600x900/?jackets,store' ,
                linkUrl:''                         

            },
            {
                id:3,
                title:'sneakers',
                imageUrl:'https://source.unsplash.com/1600x900/?sneakers,store',
                linkUrl:''                                 

            },
            {
                id:4,
                title:'womens',
                imageUrl:'https://source.unsplash.com/1600x900/?women,cloth,wear,store',
                size:'large',
                linkUrl:''                         

            },
            {
                id:5,
                title:'mens',
                imageUrl:'https://source.unsplash.com/1600x900/?men,cloth,wear,store',
                size:'large',
                linkUrl:''                         

            },]
        }
    }
    render(){
        return(
            <div className="menu-directory">
                {
                    this.state.sections.map(({id , ...otherSectionProps})=><MenuItem key={id} {...otherSectionProps}></MenuItem>)
                }
            </div>
        )
    }
}

export default MenuDirectory

 