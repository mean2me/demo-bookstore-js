const chai = require('chai'),
  expect = chai.expect,
  assert = chai.assert

  const db = require('../models')
  const controller = require('../lib/bookstore.lib')
  const TEST_TITLE = 'Spoon River Anthology'
  const TEST_AUTHOR = 'Poe, Edgar Allan'
  const TEST_BOOK = {}
  Object.defineProperties(TEST_BOOK, {
    author: {
        enumerable: true,
        configurable: false,
        writable: false,
        value: 'test author'
    },
    title: {
        enumerable: true,
        configurable: false,
        writable: false,
        value: 'test title modified'
    },
    quantity: {
        enumerable: true,
        configurable: false,
        writable: false,
        value: 2
    },
    code: {
        enumerable: true,
        configurable: false,
        writable: false,
        value: '123123123123'
    },
  })

  describe('Demo book store tests', () => {
    
    after( async () => {
        await controller.deleteBook(TEST_BOOK.code)
    })

    describe('Environment variables', () => {
        
        it('has APP_BASE_URL', () => {
            expect(process.env.APP_BASE_URL).not.to.be.a('undefined')
        })
        it('has AUTH_SECRET_KEY', () => {
            expect(process.env.AUTH_SECRET_KEY).not.to.be.a('undefined')
        })
        it('has USERNAME', () => {
            expect(process.env.USERNAME).not.to.be.a('undefined')
            expect(process.env.USERNAME).to.equals('admin')
        })
        it('has PASSWORD', () => {
            expect(process.env.PASSWORD).not.to.be.a('undefined')
            expect(process.env.PASSWORD).to.equals('admin')
        })
    });

    describe('Database connection', () => {
        
        it('connects to DB', () => {
            assert.isOk(db.sequelize, 'sequelize is defined')
            assert.isOk(db.Books, 'Books model loaded')
        })

        it('contains books data', async () => {
            const count = await db.Books.count()
            expect(count).to.be.greaterThan(0)
        })
    });
    
    describe('Book store controllers', () => {
        
        it('Get books list', async () => {

            const books = await controller.listBooks()
            expect(books).to.be.an('array')
            expect(books.length).to.be.greaterThan(0)
        })

        it('Search books by author and title', async () => {
            
            const searchAuthor = "Edgar"
            const books = await controller.searchBooks(searchAuthor)
            
            const testResult = Array.isArray(books) && books.find(({ title }) => title === TEST_TITLE)

            expect(books).to.be.an('array')
            expect(books.length).to.be.greaterThan(0)
            expect(testResult).to.be.an('object')
            expect(testResult.title).not.to.be.a('undefined')
            expect(testResult.title).to.equal('Spoon River Anthology')
        })

        it('Gets a book detail', async () => {

            const book = await controller.getBookByTitle(TEST_TITLE)

            expect(book).not.to.be.a('undefined')
            expect(book.title).to.equals(TEST_TITLE)
        })

        it('Add a book', async () => {

            const resp = await controller.addBook({...TEST_BOOK})
            const newbook = await controller.getBookByTitle(TEST_BOOK.title)

            expect(newbook).not.to.be.a('null')
            expect(newbook.code).to.equals(TEST_BOOK.code)

        })

        it('Updates book data', async () => {

            await controller.updateBook({...TEST_BOOK})
            const newbook = await controller.getBookByTitle(TEST_BOOK.title)

            expect(newbook).not.to.be.a('null')
            expect(newbook.code).to.equals(TEST_BOOK.code)
        })

        it('Sells a book only if available', async () => {

            await controller.updateBook({...TEST_BOOK}) // reset qty = 2
            const preSell = await controller.getBookByCode(TEST_BOOK.code)
            const sold = await controller.sellBook(TEST_BOOK.code)
            const postSell = await controller.getBookByCode(TEST_BOOK.code)
            
            expect(sold).to.be.true
            expect(preSell.quantity).to.be.greaterThan(postSell.quantity)
            expect(preSell.quantity - postSell.quantity).to.equals(1)
        })

        it('Gets a list of authors', async () => {

            const authors = await controller.getAuthors()

            expect(authors).not.to.be.a('null')
            expect(authors.length).to.be.greaterThan(0)
            expect(authors[0]).to.be.string
        })

        it('Gets books by author', async () => {
            const books = await controller.getBooksByAuthor(TEST_AUTHOR)
            expect(books).not.to.be.a('null')
            expect(books.length).to.be.greaterThan(0)
        })

    });
    
    
  })