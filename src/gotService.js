export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
   
    async getResourse (url) {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    getAllCharacters() {
        return this.getResourse('/characters?page5&pageSize=10')
    }

    getCharacter(id) {
        return this.getResourse(`/characters/${id}`)
    }

    getAllHouses() {
        return this.getResourse('/houses')
    }

    getHouse(id) {
        return this.getResourse(`/houses/${id}`)
    }

    getAllBooks() {
        return this.getResourse('/books')
    }
    
    getBook(id) {
        return this.getResourse(`/books/${id}`)
    }

    getAllData() {
        return this.getResourse('/')
    }
}