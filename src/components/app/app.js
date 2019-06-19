import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../gotService'

const App = () => {

    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

//TEST
const got = new GotService()

got.getAllHouses()
    .then(res => console.log(res))

got.getAllCharacters()
    .then(res => console.log(res))

got.getAllBooks()
    .then(res => console.log(res))

got.getCharacter(400)
    .then(res => console.log(res))

export default App;