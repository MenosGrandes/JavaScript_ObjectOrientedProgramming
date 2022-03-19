
class Book {
  constructor (ISBN, author, title, pageNumbers, genre) {
    this.ISBN = ISBN
    this.author = author
    this.title = title
    this.pageNumbers = pageNumbers
    this.genre = genre
    this.borrowed = false

  }
}
class Shelf {
  constructor () {
    this.books = []
  }

  addBook (book) {
    this.books.push(book)
  }

  removeBook (removeByF) {
    this.books = this.books.filter(removeByF)
  }

  getAllBy (filterFunction) {
    return this.books.filter(filterFunction)
  }
}

class SortedShelf extends Shelf {
  constructor (sortingFunction) {
    super()
    this.sortingFunction = sortingFunction
  }

  addBook (book) {
    super.addBook(book)
    this.books.sort(this.sortingFunction)
  }
}
function UndefinedUser(message) {
    this.message = message;
    this.name = 'UndefinedUser';
  }
  function NoSuchBookOnShelf(message) {
    this.message = message;
    this.name = 'NoSuchBookOnShelf';
  }
class Library {
  constructor () {
    this.shelfs = []
    this.users = new Set()
  }

  addUser (user) {
    this.users.add(user)
  }
  borrowABook (user,_book) {
      if(false === this.users.has(user) )
      {
        throw new UndefinedUser(`There is no such user with id = ${user.id}`)
        return
      }

      var bookFound = false
      for(let i = 0 ; i < this.shelfs.length ; i++)
      {
        console.log(this.shelfs[i].books)

        const filteredBooks = (this.shelfs[i]).books.filter((item) => { return item === _book })

        if(filteredBooks.length!=0)
        {
            console.log(this.shelfs)

            bookFound = true
            break
        }

      }
      if(!bookFound)
      {
        throw new NoSuchBookOnShelf(`There is no such book in library with title = ${_book.title}`)
      }

    user.books.push(_book)
  }
  
  addShelf (shelf) {
    this.shelfs.push(shelf)
  }

  getBookByAuthor (searchedAuthor) {
    const books = []
    for (let i = 0; i < this.shelfs.length; i++) {
      const filteredBooks = (this.shelfs[i]).books.filter((item) => { return item.author === searchedAuthor })
      for (let k = 0; k < filteredBooks.length; k++) {
        books.push(filteredBooks[k])
      }
    }
    return books
  }

  getBookByAuthorRegex (regexAuthor) {
    const books = []
    for (let i = 0; i < this.shelfs.length; i++) {
      const filteredBooks = (this.shelfs[i]).books.filter((item) => { return item.author.match(regexAuthor) })
      for (let k = 0; k < filteredBooks.length; k++) {
        books.push(filteredBooks[k])
      }
    }
    return books
  }

  getBookByISBN (searchedISBN) {
    const books = []
    for (let i = 0; i < this.shelfs.length; i++) {
      const filteredBooks = (this.shelfs[i]).books.filter((item) => { return item.ISBN === searchedISBN })
      for (let k = 0; k < filteredBooks.length; k++) {
        books.push(filteredBooks[k])
      }
    }
    return books
  }

  getBookByGenre (searchedGenre) {
    const books = []
    for (let i = 0; i < this.shelfs.length; i++) {
      const filteredBooks = (this.shelfs[i]).books.filter((item) => { return item.genre === searchedGenre })
      for (let k = 0; k < filteredBooks.length; k++) {
        books.push(filteredBooks[k])
      }
    }
    return books
  }

  getBookByGenreRegex (searchedGenre) {
    const books = []
    for (let i = 0; i < this.shelfs.length; i++) {
      const filteredBooks = (this.shelfs[i]).books.filter((item) => { return item.genre.match(searchedGenre) })
      for (let k = 0; k < filteredBooks.length; k++) {
        books.push(filteredBooks[k])
      }
    }
    return books
  }

  getBookByTitle (searchedTitle) {
    const books = []
    for (let i = 0; i < this.shelfs.length; i++) {
      const filteredBooks = (this.shelfs[i]).books.filter((item) => { return item.title === (searchedTitle) })
      for (let k = 0; k < filteredBooks.length; k++) {
        books.push(filteredBooks[k])
      }
    }
    return books
  }

  getBookByTitleRegex (searchedTitle) {
    const books = []
    for (let i = 0; i < this.shelfs.length; i++) {
      const filteredBooks = (this.shelfs[i]).books.filter((item) => { return item.title.match(searchedTitle) })
      for (let k = 0; k < filteredBooks.length; k++) {
        books.push(filteredBooks[k])
      }
    }
    return books
  }
}
class User {
    static _id = 0
  constructor () {
    this.id = User._id++
    this.books = []
  }
}

module.exports = {}
module.exports.Book = Book
module.exports.Shelf = Shelf
module.exports.SortedShelf = SortedShelf
module.exports.Library = Library
module.exports.User = User
module.exports.UndefinedUser = UndefinedUser
module.exports.NoSuchBookOnShelf = NoSuchBookOnShelf


