const { authJwt } = require("../middlewares");
const controller = require('../controllers/bookstore.controller')

const controllerHandler = (ctrlMethod, ...params) => {

    return async (req, res, next) => {
        try {
            const dataResp = await ctrlMethod(req, res)
            res.json({
                success: true,
                data: dataResp
            })
        } catch (error) {
            res.status(error.code ?? 500).json({
                success: false,
                reason: error.message ?? error
            })
        }
    }
}

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.put(
    '/api/book',
    [
      authJwt.verifyToken
    ],
    controllerHandler(controller.updateBook)
  )

  app.post(
    '/api/book',
    [
      authJwt.verifyToken
    ],
    controllerHandler(controller.addBook)
  )

  app.put(
    '/api/book/sell/:code',
    [
      authJwt.verifyToken
    ],
    controllerHandler(controller.sellBook)
  )

  app.get(
    "/api/book/get/list",
    [
      authJwt.verifyToken
    ],
    controllerHandler(controller.listBooks)
  );

  app.delete(
    '/api/book/get/id/:id',
    [
      authJwt.verifyToken
    ],
    controllerHandler(controller.deleteBook)
  )

  app.get(
    '/api/book/get/code/:code',
    [
      authJwt.verifyToken
    ],
    controllerHandler(controller.getBookByCode)
  )

  app.get(
    '/api/book/get/title/:title',
    [
      authJwt.verifyToken
    ],
    controllerHandler(controller.getBookByTitle)
  )

  app.get(
    '/api/book/get/author/:author',
    [
      authJwt.verifyToken
    ],
    controllerHandler(controller.getBooksByAuthor)
  )

  app.get(
    '/api/authors/list',
    [
      authJwt.verifyToken
    ],
    controllerHandler(controller.getAuthors)
  )
  
};
