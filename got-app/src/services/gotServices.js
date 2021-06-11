class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }
  // don't forget about context this = async (url) =>
  getResource = async (url) => {
    console.log(this._apiBase);
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource("/characters?page=5&pageSize=10");
    return res.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  };

  getAllBooks = async () => {
    return this.getResource("/books/");
  };

  getBook = async (id) => {
    return this.getResource(`/books/${id}`);
  };

  getAllHouses = async () => {
    return this.getResource(`/houses/`);
  };

  getHouse = async (id) => {
    return this.getResource(`/houses/${id}`);
  };

  _isSet = (data) => {
    for (let key in data) {
      if (
        data[key] === "" ||
        typeof data[key] === "undefined" ||
        data[key] === null
      ) {
        data[key] = "none";
      }
    }
    return data;
  };

  // get coincidence in the end of url string
  // return digits into the char.id
  _extractId = (obj) => {
    const idRegexp = /\/([0-9]*)$/;
    return obj.url.match(idRegexp)[1];
  };

  _transformCharacter = (char) => {
    this._isSet(char);
    // this.isEmpty(char);
    return {
      id: this._extractId(char),
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture,

      // name: this.isEmpty(char.name),
      // gender: this.isEmpty(char.gender),
      // born: this.isEmpty(char.born),
      // died: this.isEmpty(char.died),
      // culture: this.isEmpty(char.culture),
    };
  };

  _transformHouse(house) {
    this._isSet(house);
    // this.isEmpty(house);
    return {
      id: this._extractId(house),
      name: house.name,
      region: house.region,
      words: house.words,
      title: house.title,
      founded: house.founded,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons,
    };
  }

  _transformBook(book) {
    this._isSet(book);
    // this.isEmpty(book);
    return {
      id: this._extractId(book),
      name: book.name,
      numberOfPages: book.numberOfPages,
      publiser: book.publiser,
      released: book.released,
    };
  }
}

export default GotService;
