import React, { Component } from 'react';
import gotService from '../services/gotService'
import ItemDetails, { Field } from '../itemDetails';
import styled from 'styled-components'
import book from './book.png'

const ItemWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    border-radius: 60%;
    border: 10px solid black;
    padding: 5rem;
    background: white;
`

const Book = styled.img`
    color: black;
    height: 6rem;
    width: 6rem;
    display: block;
    margin: 0 auto;
`

export default class BooksItem extends Component {
    gotService = new gotService()

    render() {
        return (
            <ItemWrapper>
                <ItemDetails
                    itemId={this.props.bookId}
                    getItem={this.gotService.getBook}>
                    <Field field='numberOfPages' label='Number of pages' />
                    <Field field='publisher' label='Publisher' />
                    <Field field='released' label='Released' />
                </ItemDetails>
                <Book src={book}/>
            </ItemWrapper>
        )
    }
}