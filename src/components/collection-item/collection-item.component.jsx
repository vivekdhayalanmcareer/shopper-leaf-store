import React from 'react'
import './collection-item.styles.scss'

const ColllectionItem = ({...otherItemProps}) =>(
    <div className="collection-item">
        <div className="image" style={{ backgroundImage:`url(${otherItemProps.imageUrl})`}}/>        
        <div className="collection-footer">
            <span className="name">{otherItemProps.name}</span>
            <span className="price">{otherItemProps.price}</span>
        </div>
    </div>
)

export default ColllectionItem