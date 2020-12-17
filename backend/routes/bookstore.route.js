const { authJwt } = require("../middlewares");
const controller = require('../controllers/bookstore.controller')

const controllerHandler = (req, res, next, ctrlMethod, ...params) => {

    return async (req, res, next) => {
        try {
            const dataResp = await ctrlMethod(...params)
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

  app.get(
    "/api/book/list",
    [
      authJwt.verifyToken
    ],
    (req, res, next) => controllerHandler(req, res, next, controller.listBooks)
  );

  app.put(
    '/api/book',
    [
      authJwt.verifyToken
    ],
    (req, res, next) => controllerHandler(req, res, next, controller.updateBook, req.body)
  )

  app.post(
    '/api/book',
    [
      authJwt.verifyToken
    ],
    (req, res, next) => controllerHandler(req, res, next, controller.addBook, req.body)
  )

  app.delete(
    '/api/book/:id',
    [
      authJwt.verifyToken
    ],
    (req, res, next) => controllerHandler(req, res, next, controller.deleteBook, req.params.id)
  )

  app.get(
    '/api/book/get/:code',
    [
      authJwt.verifyToken
    ],
    (req, res, next) => controllerHandler(req, res, next, controller.getBookByCode, req.params.code)
  )

  app.get(
    '/api/book/get/:title',
    [
      authJwt.verifyToken
    ],
    (req, res, next) => controllerHandler(req, res, next, controller.getBookByTitle, req.params.title)
  )
};
