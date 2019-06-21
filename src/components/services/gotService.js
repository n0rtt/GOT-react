export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    async getAllCharacters() {
        const allChars = await this.getResourse('/characters?page=6&pageSize=10')
        return allChars.map(this._transformCharacter)
    }

    async getCharacter(id) {
        const char = await this.getResourse(`/characters/${id}`)
        return this._transformCharacter(char)
    }

    async getAllHouses() {
        const allHouses = await this.getResourse('/houses')
        return allHouses.map(this._transformHouse)
    }

    async getHouse(id) {
        const house = await this.getResourse(`/houses/${id}`)
        return this._transformHouse(house)
    }

    async getAllBooks() {
        const allBooks = await this.getResourse('/books')
        return allBooks.map(this._transformBook)
    }

    async getBook(id) {
        const book = await this.getResourse(`/books/${id}`)
        return this._transformBook(book)
    }

    _transformCharacter(char) {

        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
            url: char.url
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}