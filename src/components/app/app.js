import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import Header from '../header'
import styled from 'styled-components'
import JonSnow from './snow.gif'
import './app.css'

import { CharacterPage, HousesPage, BooksPage, BooksItem, HomePage } from '../pages'

const AppWrapper = styled.div`
    
}

`

const NoMatchImg = styled.img`
    width: 60%;
    display: block;
    margin: 0 auto;
`

const NoMatchMsg = styled.h2`
    color: #fff;
    text-align: center;
    margin-bottom: 3rem;
`

const ReturnButton = styled.button`
    padding: 1rem 3rem;
    background: grey;
    border: 1px solid white;
    border-radius: 10rem;
    display: block;
    margin: 2rem auto;
`

const App = () => {

    const NoMatch = ({ location }) => (
        <div>
            <NoMatchMsg>Nothing found. ;(</NoMatchMsg>
            <NoMatchImg src={JonSnow}></NoMatchImg>
            <ReturnButton><Link to='/'>Return</Link></ReturnButton>
        </div>
    )

    return (
        <Router>
            <AppWrapper>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/characters' exact component={CharacterPage} />
                        <Route path='/houses' exact component={HousesPage} />
                        <Route path='/books' exact component={BooksPage} />
                        <Route path='/books/:id' exact render={
                            ({ match }) => {
                                const { id } = match.params
                                return <BooksItem bookId={id} />
                            }
                        } />
                        <Route component={NoMatch} />
                    </Switch>
                </Container>
            </AppWrapper>
        </Router>
    )
}

export default App