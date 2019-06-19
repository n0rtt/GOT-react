import React from 'react';
import styled from 'styled-components'

const ItemList = () => {

    const List = styled.ul`
        cursor: pointer;
    `

    return (
        <List>
            <li className="list-group-item">
                John Snow
            </li>
            <li className="list-group-item">
                Brandon Stark
            </li>
            <li className="list-group-item">
                Geremy
            </li>
        </List>
    );
}

export default ItemList