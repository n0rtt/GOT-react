export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }

    getAllCharacters = async () => {
        const allChars = await this.getResourse('/characters?page=5&pageSize=10')
        return allChars.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const char = await this.getResourse(`/characters/${id}`)
        return this._transformCharacter(char)
    }

    getAllHouses = async () => {
        const allHouses = await this.getResourse('/houses')
        return allHouses.map(this._transformHouse)
    }

    getHouse = async (id) => {
        const house = await this.getResourse(`/houses/${id}`)
        return this._transformHouse(house)
    }

    getAllBooks = async () => {
        const allBooks = await this.getResourse('/books')
        return allBooks.map(this._transformBook)
    }

    getBook = async (id) => {
        const book = await this.getResourse(`/books/${id}`)
        return this._transformBook(book)
    }

    isSet(data) {
        if (data) {
            return data
        } else {
            return 'no data ;('
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/
        return item.url.match(idRegExp)[1]
    }

    _transformCharacter = (char) => {
        return {
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture),
            id: this._extractId(char)
        }
    }

    _transformHouse = (house) => {
        return {
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            overlord: this.isSet(house.overlord),
            ancestralWeapons: this.isSet(house.ancestralWeapons),
            id: this._extractId(house)
        }
    }

    _transformBook = (book) => {
        return {
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.isSet(book.released),
            id: this._extractId(book)
        }
    }
}