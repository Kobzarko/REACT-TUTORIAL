class gotServices {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }
  async getResource(url) {
    console.log(this._apiBase);
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  async getAllCharacters() {
    const res = await this.getResource("/characters?page=5&pageSize=10");
    return res.map(this._transformCharacter);
  }

  async getCharacter(id) {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  }

  getAllBooks() {
    return this.getResource("/books?page=5&pageSize=10");
  }

  getBook(id) {
    return this.getResource(`/books/${id}`);
  }

  getAllHouses() {
    return this.getResource(`/houses/`);
  }

  getHouse(id) {
    return this.getResource(`/houses/${id}/`);
  }

  // func checks object fields on empty
  isEmpty(data) {
    // return (data = data ?? "none");
    if (data) {
      return data;
    } else {
      return "no data";
    }
    // console.log(data);
    // for (let key in data) {
    //   if (
    //     data[key] === "" ||
    //     typeof data[key] === "undefined" ||
    //     data[key] === null
    //   ) {
    //     data[key] = "none";
    //   }
    // }
    // return data;
  }

  _transformCharacter = (char) => {
    // this.isEmpty(char);
    return {
      // name: char.name,
      // gender: char.gender,
      // born: char.born,
      // died: char.died,
      // culture: char.culture,

      name: this.isEmpty(char.name),
      gender: this.isEmpty(char.gender),
      born: this.isEmpty(char.born),
      died: this.isEmpty(char.died),
      culture: this.isEmpty(char.culture),
    };
  };

  _transformHouse(house) {
    // this.isEmpty(house);
    return {
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
    // this.isEmpty(book);
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publiser: book.publiser,
      released: book.released,
    };
  }
}

export default gotServices;
