
class Book {
  constructor (ISBN, author, title, pageNumbers, genre) {
    this.ISBN = ISBN
    this.author = author
    this.title = title
    this.pageNumbers = pageNumbers
    this.genre = genre
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

class Library {
  constructor () {
    this.shelfs = []
  }
  addShelf(shelf)
  {
      this.shelfs.push(shelf);
  }
}

module.exports = {}
module.exports.Book = Book
module.exports.Shelf = Shelf
module.exports.SortedShelf = SortedShelf

