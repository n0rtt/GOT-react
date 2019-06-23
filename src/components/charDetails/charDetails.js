import React, { Component } from 'react';
import styled from 'styled-components'
import gotService from '../services/gotService'
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';


const CharDetailsStyle = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`

const Heading = styled.h4`
    margin-bottom: 20px;
    text-align: center; 
`

const Error = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`
export default class CharDetails extends Component {

    gotService = new gotService()

    state = {
        char: null,
        loading: false,
        error: false
    }

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
        console.log('error')
    }

    updateChar = () => {
        
        const { charId } = this.props

        if (!charId) {
            return
        }

        this.setState({
            loading: true
        })

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({
                    char,
                    loading: false
                })
            })
            .catch(this.onError)

        // this.foo.bar = 0;
    }

    render() {
        const { char, loading, error } = this.state
        
        const errorMessage = error ? <ErrorMessage /> : null
        const spinner = loading ? <Spinner /> : null
        const content = !(loading || error) ? <View char={char} /> : null
        
        if (!char && !error) {
            return <Error>Please, select character</Error>
        }

        return (
            <CharDetailsStyle rounded>
                {errorMessage}
                {spinner}
                {content}
            </CharDetailsStyle>
        );
    }

}

const View = ({ char }) => {

    const { name, gender, born, died, culture } = char

    return (
        <>
            <Heading>{name}</Heading>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}