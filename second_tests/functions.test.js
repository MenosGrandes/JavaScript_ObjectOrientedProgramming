/* eslint-disable no-undef */
const functions = require('./functions')

test('Book creation', () => {
  const anny = new functions.Book(1234, 'Lucy Maud Montgomery', 'Anne of Green Gables', 130, 'Romance')
  expect(anny).toHaveProperty('title')
  expect(anny).toHaveProperty('ISBN')
  expect(anny).toHaveProperty('author')
  expect(anny).toHaveProperty('pageNumbers')
  expect(anny).toHaveProperty('genre')

  expect(anny.ISBN).toEqual(1234)
  expect(anny.author).toMatch('Lucy Maud Montgomery')
  expect(anny.title).toMatch('Anne of Green Gables')
  expect(anny.pageNumbers).toEqual(130)
  expect(anny.genre).toMatch('Romance')
})

test('Add to shelf', () => {
  const b = new functions.Book(3315, 'Jorgdie La Forge', 'Hyperspace Introduction', 331, 'Technical')
  const b2 = new functions.Book(4415, 'Data', 'InterHuman Communications', 52, 'Physio')
  const b3 = new functions.Book(123, 'Spot', 'How to meow', 656, 'Animals')

  const s = new functions.Shelf()

  expect(s).toHaveProperty('addBook')
  expect(s).toHaveProperty('books')

  s.addBook(b)
  expect(s.books.length).toEqual(1)
  expect(s.books[0]).toStrictEqual(b)
  s.addBook(b2)
  expect(s.books.length).toEqual(2)
  expect(s.books[1]).toStrictEqual(b2)
  s.addBook(b3)
  expect(s.books.length).toEqual(3)
  expect(s.books[2]).toStrictEqual(b3)
})

test('Remove from shelf', () => {
  const b = new functions.Book(3315, 'Jorgdie La Forge', 'Hyperspace Introduction', 331, 'Technical')
  const b2 = new functions.Book(4415, 'Data', 'InterHuman Communications', 52, 'Physio')
  const b3 = new functions.Book(123, 'Spot', 'How to meow', 656, 'Animals')

  const s = new functions.Shelf()
  expect(s).toHaveProperty('removeBook')

  s.addBook(b)
  s.addBook(b2)
  s.addBook(b3)
  expect(s.books.length).toEqual(3)

  s.removeBook((item) => { return (item.pageNumbers > 50 && item.pageNumbers < 400) })
  expect(s.books.length).toEqual(2)
  expect(s.books[0]).toStrictEqual(b)
  expect(s.books[1]).toStrictEqual(b2)

  s.addBook(b3)

  const myMockFn = jest
    .fn()
    .mockReturnValue(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true)

  s.removeBook(myMockFn)
  expect(s.books.length).toEqual(1)
  expect(s.books[0]).toStrictEqual(b2)
})

test('Filter all books by', () => {
  const b = new functions.Book(3315, 'Jorgdie La Forge', 'Hyperspace Introduction', 331, 'Technical')
  const b2 = new functions.Book(4415, 'Data', 'InterHuman Communications', 52, 'Physio')
  const b21 = new functions.Book(5526, 'Data', 'Positronic brain schematics', 246, 'Technical')

  const b3 = new functions.Book(1253, 'Spot', 'How to meow', 656, 'Animals behaviour')
  const b31 = new functions.Book(5762, 'Spot', 'How to hiss', 441, 'Animals behaviour')
  const b32 = new functions.Book(3361, 'Spot', 'How to morph into lizard', 774, 'Animals behaviour')

  const s = new functions.Shelf()
  expect(s).toHaveProperty('getAllBy')
  s.addBook(b)
  s.addBook(b2)
  s.addBook(b3)
  s.addBook(b31)
  s.addBook(b32)
  s.addBook(b21)

  const booksBy = s.getAllBy((item) => { return (item.author === 'Data') })
  expect(booksBy.length).toEqual(2)
  expect(booksBy[0]).toStrictEqual(b2)
  expect(booksBy[1]).toStrictEqual(b21)

  const booksByGenre = s.getAllBy((item) => { return (item.genre === 'Physio') })
  expect(booksByGenre.length).toEqual(1)
  expect(booksByGenre[0]).toStrictEqual(b2)

  const booksByHowTo = s.getAllBy((item) => { return (item.title.match(/How/) || false) })
  expect(booksByHowTo.length).toEqual(3)
  expect(booksByHowTo[0]).toStrictEqual(b3)
  expect(booksByHowTo[1]).toStrictEqual(b31)
  expect(booksByHowTo[2]).toStrictEqual(b32)
})

test('Sorted shelf', () => {
  const b = new functions.Book(3315, 'Jorgdie La Forge', 'Hyperspace Introduction', 331, 'Technical')
  const b2 = new functions.Book(4415, 'Data', 'InterHuman Communications', 52, 'Physio')
  const b21 = new functions.Book(5526, 'Data', 'Positronic brain schematics', 246, 'Technical')

  const b3 = new functions.Book(1253, 'Spot', 'How to meow', 656, 'Animals behaviour')
  const b31 = new functions.Book(5762, 'Spot', 'How to hiss', 441, 'Animals behaviour')
  const b32 = new functions.Book(3361, 'Spot', 'How to morph into lizard', 774, 'Animals behaviour')

  const s = new functions.SortedShelf((first, second) => { return first.pageNumbers - second.pageNumbers })
  expect(functions.SortedShelf.prototype).toBeInstanceOf(functions.Shelf)

  expect(s).toHaveProperty('removeBook')
  expect(s).toHaveProperty('addBook')
  expect(s).toHaveProperty('getAllBy')
  expect(s).toHaveProperty('sortingFunction')
  expect(s).toHaveProperty('books')
  {
    const sortFunctionMock = jest.fn((first, second) => { return true })

    const sM = new functions.SortedShelf(sortFunctionMock)
    expect(sM.sortingFunction).toEqual(sortFunctionMock)

    sM.addBook(b)
    expect(sortFunctionMock).toHaveBeenCalledTimes(0)
    sM.addBook(b2)
    expect(sortFunctionMock).toHaveBeenCalledTimes(1)
    sM.addBook(b3)
    expect(sortFunctionMock).toHaveBeenCalledTimes(3)
    sM.addBook(b31)
    expect(sortFunctionMock).toHaveBeenCalledTimes(6)
    sM.addBook(b32)
    expect(sortFunctionMock).toHaveBeenCalledTimes(10)
    sM.addBook(b21)
    expect(sortFunctionMock).toHaveBeenCalledTimes(15)
  }
  s.addBook(b)
  s.addBook(b2)
  s.addBook(b3)
  s.addBook(b31)
  s.addBook(b32)
  s.addBook(b21)

  expect(s.books.length).toEqual(6)
  expect(s.books[0]).toStrictEqual(b2)
  expect(s.books[1]).toStrictEqual(b21)
  expect(s.books[2]).toStrictEqual(b)
  expect(s.books[3]).toStrictEqual(b31)
  expect(s.books[4]).toStrictEqual(b3)
  expect(s.books[5]).toStrictEqual(b32)

  const booksBy = s.getAllBy((item) => { return (item.author === 'Data') })
  expect(booksBy.length).toEqual(2)
  expect(booksBy[0]).toStrictEqual(b2)
  expect(booksBy[1]).toStrictEqual(b21)

  const booksByGenre = s.getAllBy((item) => { return (item.genre === 'Physio') })
  expect(booksByGenre.length).toEqual(1)
  expect(booksByGenre[0]).toStrictEqual(b2)

  const booksByHowTo = s.getAllBy((item) => { return (item.title.match(/How/) || false) })
  expect(booksByHowTo.length).toEqual(3)
  expect(booksByHowTo[0]).toStrictEqual(b31)
  expect(booksByHowTo[1]).toStrictEqual(b3)
  expect(booksByHowTo[2]).toStrictEqual(b32)

  const s2 = new functions.SortedShelf((a, b) => {
    if (a.author < b.author) { return -1 }
    if (a.author > b.author) { return 1 }
    return 0
  })

  s2.addBook(b)
  s2.addBook(b2)
  s2.addBook(b3)
  s2.addBook(b31)
  s2.addBook(b32)
  s2.addBook(b21)

  expect(s2.books.length).toEqual(6)
  expect(s2.books[0]).toStrictEqual(b2)
  expect(s2.books[1]).toStrictEqual(b21)
  expect(s2.books[2]).toStrictEqual(b)
  expect(s2.books[3]).toStrictEqual(b3)
  expect(s2.books[4]).toStrictEqual(b31)
  expect(s2.books[5]).toStrictEqual(b32)
})
test('Library test', () => {
  const b = new functions.Book(3315, 'Jorgdie La Forge', 'Hyperspace Introduction', 331, 'Technical')
  const b2 = new functions.Book(4415, 'Data', 'InterHuman Communications', 52, 'Physio')
  const b21 = new functions.Book(5526, 'Data', 'Positronic brain schematics', 246, 'Technical')

  const b3 = new functions.Book(1253, 'Spot', 'How to meow', 656, 'Animals behaviour')
  const b31 = new functions.Book(5762, 'Spot', 'How to hiss', 441, 'Animals behaviour')
  const b32 = new functions.Book(3361, 'Spot', 'How to morph into lizard', 774, 'Animals behaviour')

  const s = new functions.SortedShelf((first, second) => { return first.pageNumbers - second.pageNumbers })
  s.addBook(b)
  s.addBook(b2)
  s.addBook(b3)
  s.addBook(b31)
  s.addBook(b32)
  s.addBook(b21)

  const l = new functions.Library()
  expect(l).toHaveProperty('shelfs')
  expect(l).toHaveProperty('addShelf')
  expect(l).toHaveProperty('getBookByAuthor')
  expect(l).toHaveProperty('getBookByISBN')
  expect(l).toHaveProperty('getBookByGenre')
  expect(l).toHaveProperty('getBookByTitle')

  l.addShelf(s)
  {
    const dataBooks = l.getBookByAuthor('Data')
    expect(dataBooks.length).toEqual(2)
    expect(dataBooks[0]).toStrictEqual(b2)
    expect(dataBooks[1]).toStrictEqual(b21)
  }
  {
    const dataBooks = l.getBookByAuthor('Udhgfa')
    expect(dataBooks.length).toEqual(0)
  }
  {
    const isbnBooks = l.getBookByISBN(1253)
    expect(isbnBooks.length).toEqual(1)
    expect(isbnBooks[0]).toStrictEqual(b3)
  }
  {
    const isbnBooks = l.getBookByISBN(55556)
    expect(isbnBooks.length).toEqual(0)
  }
  {
    const genreBooks = l.getBookByGenre('Animals behaviour')
    expect(genreBooks.length).toEqual(3)
    expect(genreBooks).toEqual(expect.arrayContaining([b3, b31, b32]))
  }
  {
    const genreBooks = l.getBookByGenre('undna')
    expect(genreBooks.length).toEqual(0)
  }
  {
    const genreBooks = l.getBookByGenre('Animals behaviour')
    expect(genreBooks.length).toEqual(3)
    expect(genreBooks).toEqual(expect.arrayContaining([b3, b31, b32]))
  }
  {
    const titleBooks = l.getBookByTitle('How to morph into lizard')
    expect(titleBooks.length).toEqual(1)
    expect(titleBooks[0]).toStrictEqual(b32)
  }
})
test('Library Regex test', () => {
  const b = new functions.Book(3315, 'Jorgdie La Forge', 'Hyperspace Introduction', 331, 'Technical')
  const b2 = new functions.Book(4415, 'Data', 'InterHuman Communications', 52, 'Physio')
  const b21 = new functions.Book(5526, 'Data', 'Positronic brain schematics', 246, 'Technical')

  const b3 = new functions.Book(1253, 'Spot', 'How to meow', 656, 'Animals behaviour')
  const b31 = new functions.Book(5762, 'Spot', 'How to hiss', 441, 'Animals behaviour')
  const b32 = new functions.Book(3361, 'Spot', 'How to morph into lizard', 774, 'Animals behaviour')
  const b4 = new functions.Book(4412, 'Spoc', 'Overcome Your emotions', 554, 'Physio')

  const s = new functions.SortedShelf((first, second) => { return first.pageNumbers - second.pageNumbers })
  s.addBook(b)
  s.addBook(b2)
  s.addBook(b3)
  s.addBook(b31)
  s.addBook(b4)
  s.addBook(b32)
  s.addBook(b21)

  const l = new functions.Library()
  expect(l).toHaveProperty('getBookByAuthorRegex')
  expect(l).toHaveProperty('getBookByTitleRegex')
  expect(l).toHaveProperty('getBookByGenreRegex')
  l.addShelf(s)
  {
    const dataBooks = l.getBookByAuthorRegex(/Spo/)
    expect(dataBooks.length).toEqual(4)
    expect(dataBooks).toEqual(expect.arrayContaining([b3, b31, b32, b4]))
  }
  {
    const dataBooks = l.getBookByTitleRegex(/Int/i)
    expect(dataBooks.length).toEqual(3)
    expect(dataBooks).toEqual(expect.arrayContaining([b, b2, b32]))
  }
  {
    const dataBooks = l.getBookByGenreRegex(/io/i)
    expect(dataBooks.length).toEqual(5)
    expect(dataBooks).toEqual(expect.arrayContaining([b3, b31, b32, b4, b3]))
  }
})
test('LibraryUser id', () => {
  const l = new functions.Library()
  expect(l).toHaveProperty('users')

  expect(l.users).toBeInstanceOf(Set)
  const JKRowloong = new functions.User()
  expect(JKRowloong).toHaveProperty('id', 0)
  const JKRowloong1 = new functions.User()
  expect(JKRowloong1).toHaveProperty('id', 1)
  const JKRowloong2 = new functions.User()
  expect(JKRowloong2).toHaveProperty('id', 2)
  const JKRowloong3 = new functions.User()
  expect(JKRowloong3).toHaveProperty('id', 3)
  expect(JKRowloong).toHaveProperty('id', 0)
  expect(JKRowloong1).toHaveProperty('id', 1)
  expect(JKRowloong2).toHaveProperty('id', 2)
})
test('LibraryUser addUnique users', () => {
  const b = new functions.Book(3315, 'Jorgdie La Forge', 'Hyperspace Introduction', 331, 'Technical')
  const b2 = new functions.Book(4415, 'Data', 'InterHuman Communications', 52, 'Physio')
  const b21 = new functions.Book(5526, 'Data', 'Positronic brain schematics', 246, 'Technical')

  const b3 = new functions.Book(1253, 'Spot', 'How to meow', 656, 'Animals behaviour')
  const b31 = new functions.Book(5762, 'Spot', 'How to hiss', 441, 'Animals behaviour')
  const b32 = new functions.Book(3361, 'Spot', 'How to morph into lizard', 774, 'Animals behaviour')
  const b4 = new functions.Book(4412, 'Spoc', 'Overcome Your emotions', 554, 'Physio')

  const s = new functions.Shelf()
  s.addBook(b)
  s.addBook(b2)
  s.addBook(b3)
  s.addBook(b31)
  s.addBook(b4)
  s.addBook(b32)
  s.addBook(b21)

  const l = new functions.Library()
  l.addShelf(s)
  expect(l).toHaveProperty('addUser')

  const JKRowloong = new functions.User()
  const JKRowloong1 = new functions.User()
  const JKRowloong2 = new functions.User()
  const JKRowloong3 = new functions.User()
  l.addUser(JKRowloong)
  l.addUser(JKRowloong1)
  l.addUser(JKRowloong2)
  l.addUser(JKRowloong3)
  l.addUser(JKRowloong2)

  l.addUser(JKRowloong3)
  l.addUser(JKRowloong2)

  expect(Array.from(l.users)).toEqual(expect.arrayContaining([JKRowloong, JKRowloong1, JKRowloong2, JKRowloong3]))
  expect(l.users.size).toEqual(4)
})
test('LibraryUser getBooks for user', () => {
  const b = new functions.Book(3315, 'Jorgdie La Forge', 'Hyperspace Introduction', 331, 'Technical')
  const b2 = new functions.Book(4415, 'Data', 'InterHuman Communications', 52, 'Physio')
  const b21 = new functions.Book(5526, 'Data', 'Positronic brain schematics', 246, 'Technical')

  const b3 = new functions.Book(1253, 'Spot', 'How to meow', 656, 'Animals behaviour')
  const b31 = new functions.Book(5762, 'Spot', 'How to hiss', 441, 'Animals behaviour')
  const b32 = new functions.Book(3361, 'Spot', 'How to morph into lizard', 774, 'Animals behaviour')
  const b4 = new functions.Book(4412, 'Spoc', 'Overcome Your emotions', 554, 'Physio')

  const s = new functions.Shelf()
  s.addBook(b2)
  s.addBook(b3)
  s.addBook(b31)
  s.addBook(b4)
  s.addBook(b32)
  s.addBook(b21)

  const l = new functions.Library()
  l.addShelf(s)

  const JKRowloong = new functions.User()
  const JKRowloong1 = new functions.User()
  const JKRowloong2 = new functions.User()
  const JKRowloong3 = new functions.User()
  const ChingPing = new functions.User()

  l.addUser(JKRowloong)
  l.addUser(JKRowloong1)
  l.addUser(JKRowloong2)
  l.addUser(JKRowloong3)
  l.addUser(JKRowloong3)
  expect(l).toHaveProperty('borrowABook')

  expect(() => l.borrowABook(ChingPing, b)).toThrow(functions.UndefinedUser)
  expect(() => l.borrowABook(JKRowloong, b)).toThrow(functions.NoSuchBookOnShelf)
  s.addBook(b)
  expect(() => l.borrowABook(JKRowloong, b)).not.toThrow(functions.NoSuchBookOnShelf)
  expect(b).toHaveProperty('borrowed', true)
  expect(b32).toHaveProperty('borrowed', false)
  expect(JKRowloong).toHaveProperty('books', [b])

expect(() => l.borrowABook(JKRowloong2, b)).toThrow(functions.AlreadyBorrowed)
  expect(b).toHaveProperty('borrowed', true)
  expect(JKRowloong).toHaveProperty('books', [b])
  expect(JKRowloong2).toHaveProperty('books', [])
})
