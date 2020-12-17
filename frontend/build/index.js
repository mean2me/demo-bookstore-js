/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Routes/index.js":
/*!*****************************!*\
  !*** ./src/Routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AuthenticatedPage */ "./src/components/AuthenticatedPage.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_AuthenticatedPage__WEBPACK_IMPORTED_MODULE_2__.default, null));
});

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _material_ui_core_colors_lightBlue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors/lightBlue */ "./node_modules/@material-ui/core/colors/lightBlue.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "./node_modules/@material-ui/core/colors/grey.js");
/* harmony import */ var _lib_redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/redux/store */ "./src/lib/redux/store.js");
/* harmony import */ var _context_UIContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/UIContext */ "./src/context/UIContext.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Routes */ "./src/Routes/index.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorBoundary */ "./src/components/ErrorBoundary.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var App = function App() {
  var theme = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.default)({
      palette: {
        primary: _material_ui_core_colors_lightBlue__WEBPACK_IMPORTED_MODULE_9__.default,
        secondary: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_10__.default,
        white: '#ffffff',
        black: '#000000'
      }
    });
  }, []);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    drawer: false,
    toggleDrawer: function toggleDrawer(status) {
      setUIState(function () {
        return _objectSpread(_objectSpread({}, uiState), {}, {
          drawer: status !== null && status !== void 0 ? status : !uiState.drawer
        });
      });
    },
    closeDrawer: function closeDrawer() {
      setUIState(function () {
        return _objectSpread(_objectSpread({}, uiState), {}, {
          drawer: false
        });
      });
    }
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      uiState = _useState2[0],
      setUIState = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _lib_redux_store__WEBPACK_IMPORTED_MODULE_4__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__.default, {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_context_UIContext__WEBPACK_IMPORTED_MODULE_5__.default.Provider, {
    value: uiState
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Routes__WEBPACK_IMPORTED_MODULE_6__.default, null))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/AuthenticatedPage.js":
/*!*********************************************!*\
  !*** ./src/components/AuthenticatedPage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _SearchAppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchAppBar */ "./src/components/SearchAppBar.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignIn */ "./src/components/SignIn.js");
/* harmony import */ var _Books__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Books */ "./src/components/Books.js");






var useStyle = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: theme.palette.background.paper
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["children"]);

  var classes = useStyle();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    maxWidth: "xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SearchAppBar__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SignIn__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
    container: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Books__WEBPACK_IMPORTED_MODULE_4__.default, null))));
});

/***/ }),

/***/ "./src/components/Books.js":
/*!*********************************!*\
  !*** ./src/components/Books.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/ClickAwayListener/ClickAwayListener.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _context_UIContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/UIContext */ "./src/context/UIContext.js");
/* harmony import */ var _FiltersForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FiltersForm */ "./src/components/FiltersForm.js");




var useStyle = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default)(function (theme) {
  return {
    filters: {
      paddingTop: theme.spacing(12),
      maxHeight: '45vh',
      height: 'auto',
      backgroundColor: theme.palette.secondary[200],
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }
  };
});

var Books = function Books() {
  var uiCtx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_UIContext__WEBPACK_IMPORTED_MODULE_1__.default);
  var classes = useStyle();

  var clickAwayHandler = function clickAwayHandler() {
    if (uiCtx.drawer === true) uiCtx.closeDrawer();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    mouseEvent: "onMouseDown",
    touchEvent: "onTouchStart",
    onClickAway: clickAwayHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    anchor: "top",
    open: uiCtx.drawer,
    variant: "persistent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.filters
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FiltersForm__WEBPACK_IMPORTED_MODULE_2__.default, null))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Books);

/***/ }),

/***/ "./src/components/ErrorBoundary.js":
/*!*****************************************!*\
  !*** ./src/components/ErrorBoundary.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        hasError: true,
        error: error,
        errorInfo: errorInfo
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h1", null, "Something went wrong");
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

/***/ }),

/***/ "./src/components/FiltersForm.js":
/*!***************************************!*\
  !*** ./src/components/FiltersForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_redux_actions_bookstore_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/redux/actions/bookstore.actions */ "./src/lib/redux/actions/bookstore.actions.js");





var useStyle = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default)(function (theme) {
  return {
    select: {
      width: '100%'
    },
    filtersForm: {
      width: '100%',
      margin: 0
    },
    formControl: {
      width: '100%',
      margin: theme.spacing(2)
    },
    margins: {
      margin: theme.spacing(2)
    }
  };
});
var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

var FiltersForm = function FiltersForm() {
  var classes = useStyle();
  var author = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.author;
  });
  var authors = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.authors;
  });
  useEffect(function () {
    dispatch((0,_lib_redux_actions_bookstore_actions__WEBPACK_IMPORTED_MODULE_3__.getAuthors)());
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    container: true,
    xs: 10,
    direction: "row",
    className: classes.filtersForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    item: true,
    xs: 12,
    md: 3,
    className: classes.margins
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)([classes.formControl, classes.margins])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    htmlFor: "author-select"
  }, "Author"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
    labelId: "author-select",
    id: "author-select",
    fullWidth: true
  }, authors && authors.map(function (author) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
      value: author
    }, author);
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiltersForm);

/***/ }),

/***/ "./src/components/SearchAppBar.js":
/*!****************************************!*\
  !*** ./src/components/SearchAppBar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ SearchAppBar
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context_UIContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/UIContext */ "./src/context/UIContext.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");











var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      flexGrow: 1,
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    search: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.fade)(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.fade)(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), "px)"),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    })
  };
});
function SearchAppBar() {
  var classes = useStyles();
  var uiCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UIContext__WEBPACK_IMPORTED_MODULE_2__.default);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: classes.appBar,
    position: "fixed",
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "open drawer",
    onClick: function onClick() {
      return uiCtx.toggleDrawer();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
    className: classes.title,
    variant: "h6",
    noWrap: true
  }, "Demo Book Store"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.search
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.searchIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_11__.default, {
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'search'
    }
  })))));
}

/***/ }),

/***/ "./src/components/SignIn.js":
/*!**********************************!*\
  !*** ./src/components/SignIn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ SignIn
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_redux_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/redux/actions/auth.actions */ "./src/lib/redux/actions/auth.actions.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");






var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default)(function (theme) {
  return {
    login: {
      minWidth: '240px',
      minHeight: '360px'
    }
  };
});
function SignIn() {
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var isAuthenticated = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    var _state$auth;

    return (_state$auth = state.auth) === null || _state$auth === void 0 ? void 0 : _state$auth.isAuthenticated;
  });

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      username = _useState4[0],
      setUsername = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    if (isAuthenticated) setOpen(false);
  };

  var handleClick = function handleClick() {
    dispatch((0,_lib_redux_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__.login)(username, password));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setOpen(!isAuthenticated);
  }, [isAuthenticated]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "Login form title",
    "aria-describedby": "Login form description",
    className: classes.login,
    fullWidth: true,
    maxWidth: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, null, "Please, sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "User name",
    type: "text",
    fullWidth: true,
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
    label: "Password",
    type: "password",
    autoComplete: "current-password",
    margin: "dense",
    fullWidth: true,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    variant: "contained",
    color: "primary",
    onClick: handleClick
  }, "Sign in"))));
}

/***/ }),

/***/ "./src/context/UIContext.js":
/*!**********************************!*\
  !*** ./src/context/UIContext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var UIContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  drawer: false,
  toggleDrawer: function toggleDrawer() {}
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIContext);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _lib_api_gateway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/api/gateway */ "./src/lib/api/gateway.js");




(0,_lib_api_gateway__WEBPACK_IMPORTED_MODULE_3__.prefetch)(function (resp) {
  (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById('root'));
});

/***/ }),

/***/ "./src/lib/api/auth.api.js":
/*!*********************************!*\
  !*** ./src/lib/api/auth.api.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => /* binding */ login,
/* harmony export */   "logout": () => /* binding */ logout
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gateway */ "./src/lib/api/gateway.js");



var login = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(username, password) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_gateway__WEBPACK_IMPORTED_MODULE_2__.jsonCall)("/auth/signin", 'POST', {
              username: username,
              password: password
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var logout = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(username, password) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0,_gateway__WEBPACK_IMPORTED_MODULE_2__.jsonCall)("/auth/signout", 'POST');

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function logout(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/lib/api/bookstore.api.js":
/*!**************************************!*\
  !*** ./src/lib/api/bookstore.api.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listBooks": () => /* binding */ listBooks,
/* harmony export */   "searchBooks": () => /* binding */ searchBooks,
/* harmony export */   "getBookByTitle": () => /* binding */ getBookByTitle,
/* harmony export */   "getBookByCode": () => /* binding */ getBookByCode,
/* harmony export */   "sellBook": () => /* binding */ sellBook,
/* harmony export */   "addBook": () => /* binding */ addBook,
/* harmony export */   "updateBook": () => /* binding */ updateBook,
/* harmony export */   "getIncome": () => /* binding */ getIncome,
/* harmony export */   "getAuthors": () => /* binding */ getAuthors,
/* harmony export */   "getBooksByAuthor": () => /* binding */ getBooksByAuthor
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gateway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gateway */ "./src/lib/api/gateway.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Book store API client
 * @module bookstore.api
 */

var listBooks = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_gateway__WEBPACK_IMPORTED_MODULE_3__.jsonCall)('/book/list', 'GET');

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function listBooks() {
    return _ref.apply(this, arguments);
  };
}();
var searchBooks = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(filter) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0,_gateway__WEBPACK_IMPORTED_MODULE_3__.jsonCall)('/book/search', 'GET', {
              filter: filter
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function searchBooks(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var getBookByTitle = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(title) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0,_gateway__WEBPACK_IMPORTED_MODULE_3__.jsonCall)("/book/get/".concat(encodeURIComponent(title)), 'GET');

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getBookByTitle(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
var getBookByCode = /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(code) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0,_gateway__WEBPACK_IMPORTED_MODULE_3__.jsonCall)("/book/get/".concat(encodeURIComponent(code)), 'GET');

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getBookByCode(_x3) {
    return _ref4.apply(this, arguments);
  };
}();
/** 
 * @typedef {Object} Book
 * @property {string} code
 * @property {string} title
 * @property {string} author
 * @property {number} price
 */

var sellBook = /*#__PURE__*/function () {
  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(code, id, quantity) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0,_gateway__WEBPACK_IMPORTED_MODULE_3__.jsonCall)('/book/sell', 'PUT', {
              code: code,
              id: id,
              quantity: quantity
            });

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function sellBook(_x4, _x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 * Adds a book in the inventory
 * @param {Book} book 
 * @param {number} quantity
 */

var addBook = /*#__PURE__*/function () {
  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee6(book, quantity) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0,_gateway__WEBPACK_IMPORTED_MODULE_3__.jsonCall)('/book', 'POST', _objectSpread(_objectSpread({}, book), {}, {
              quantity: quantity
            }));

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function addBook(_x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Updates a book in the inventory
 * @param {Book} book 
 * @param {number} quantity
 */

var updateBook = /*#__PURE__*/function () {
  var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee7(book) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0,_gateway__WEBPACK_IMPORTED_MODULE_3__.jsonCall)('/book', 'PUT', _objectSpread(_objectSpread({}, book), {}, {
              quantity: quantity
            }));

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function updateBook(_x9) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Gets book selling total income
 */

var getIncome = /*#__PURE__*/function () {
  var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee8() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return (0,_gateway__WEBPACK_IMPORTED_MODULE_3__.jsonCall)('/book/income', 'GET');

          case 2:
            return _context8.abrupt("return", _context8.sent);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function getIncome() {
    return _ref8.apply(this, arguments);
  };
}();
/**
 * Gets a list of authors available
 * 
 * @param {string} author optional text filter
 */

var getAuthors = /*#__PURE__*/function () {
  var _ref9 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee9(author) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return (0,_gateway__WEBPACK_IMPORTED_MODULE_3__.jsonCall)('/book/authors', 'GET', {
              author: author
            });

          case 2:
            return _context9.abrupt("return", _context9.sent);

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function getAuthors(_x10) {
    return _ref9.apply(this, arguments);
  };
}();
/**
 * Gets a lits of book for a specific author
 * 
 * @param {string} author 
 */

var getBooksByAuthor = /*#__PURE__*/function () {
  var _ref10 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee10(author) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return (0,_gateway__WEBPACK_IMPORTED_MODULE_3__.jsonCall)("/book/get/".concat(encodeURIComponent(author)), 'GET');

          case 2:
            return _context10.abrupt("return", _context10.sent);

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function getBooksByAuthor(_x11) {
    return _ref10.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/lib/api/gateway.js":
/*!********************************!*\
  !*** ./src/lib/api/gateway.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => /* binding */ API_URL,
/* harmony export */   "prefetch": () => /* binding */ prefetch,
/* harmony export */   "jsonCall": () => /* binding */ jsonCall
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * API Gateway
 * @module gateway
 * @author Emanuele Colonnelli <emanuele@projavascript.it>
 */

var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_3__.default(); // prettier-ignore

var API_URL = "".concat("http://localhost:3000").concat("/api");
/**
 * @description Helper function to fetch CSRF token before to render the bundled app
 * @param {function} cb 
 */

var prefetch = function prefetch(cb) {
  if (!cookies.get('csrfToken')) {
    fetch("".concat(API_URL, "/csrf"), {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(function (resp) {
      resp.json().then(function (json) {
        cookies.set('csrfToken', json.csrfToken, {
          path: '/'
        });
        cb();
      });
    });
  } else cb();
};
/**
 * Helper function to perform authenticated API call. Manages csrf token and auth headers
 * @param {string} url 
 * @param {string} method any of POST|PUT|DELETE|GET|PATCH
 * @param {Object} data any payload object, will be converted to query string
 */

var jsonCall = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url, method, data) {
    var csrf, raw, resp;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = method;
            _context.next = _context.t0 === 'POST' ? 3 : _context.t0 === 'DELETE' ? 3 : _context.t0 === 'PUT' ? 3 : 5;
            break;

          case 3:
            csrf = cookies.get('csrfToken');
            return _context.abrupt("break", 7);

          case 5:
            csrf = null;
            return _context.abrupt("break", 7);

          case 7:
            _context.next = 9;
            return fetch(url.startsWith('http') ? url : "".concat(API_URL).concat(url), _objectSpread({
              method: method,
              headers: _objectSpread({
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              }, csrf ? {
                'csrf-token': csrf
              } : {}),
              credentials: 'include'
            }, data ? {
              body: JSON.stringify(data)
            } : {}));

          case 9:
            raw = _context.sent;
            _context.next = 12;
            return raw.json();

          case 12:
            resp = _context.sent;

            if (!(raw.status === 401)) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", {
              success: false,
              code: 401,
              error: resp
            });

          case 17:
            return _context.abrupt("return", resp);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function jsonCall(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/lib/redux/actions/auth.actions.js":
/*!***********************************************!*\
  !*** ./src/lib/redux/actions/auth.actions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => /* binding */ login,
/* harmony export */   "logout": () => /* binding */ logout
/* harmony export */ });
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ "./src/lib/redux/actions/keys.js");

var keys = (0,_keys__WEBPACK_IMPORTED_MODULE_0__.default)();
/**
 * 
 * @param {string} username 
 * @param {string} password 
 */

var login = function login(username, password) {
  return {
    type: keys.AUTH_LOGIN,
    payload: {
      username: username,
      password: password
    }
  };
};
var logout = function logout() {
  return {
    type: keys.AUTH_LOGOUT
  };
};

/***/ }),

/***/ "./src/lib/redux/actions/bookstore.actions.js":
/*!****************************************************!*\
  !*** ./src/lib/redux/actions/bookstore.actions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listBooks": () => /* binding */ listBooks,
/* harmony export */   "searchBooks": () => /* binding */ searchBooks,
/* harmony export */   "getBook": () => /* binding */ getBook,
/* harmony export */   "sellBook": () => /* binding */ sellBook,
/* harmony export */   "addBook": () => /* binding */ addBook,
/* harmony export */   "updateBook": () => /* binding */ updateBook,
/* harmony export */   "getIncome": () => /* binding */ getIncome,
/* harmony export */   "getBookByTitle": () => /* binding */ getBookByTitle,
/* harmony export */   "getBookByCode": () => /* binding */ getBookByCode,
/* harmony export */   "getBooksByAuthor": () => /* binding */ getBooksByAuthor,
/* harmony export */   "getAuthors": () => /* binding */ getAuthors
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ "./src/lib/redux/actions/keys.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var keys = (0,_keys__WEBPACK_IMPORTED_MODULE_1__.default)();
/** 
 * @typedef {Object} Book
 * @property {string} code
 * @property {string} title
 * @property {string} author
 * @property {number} price
 */

var listBooks = function listBooks() {
  return {
    type: keys.LIST_BOOKS
  };
};
/**
 * 
 * @param {string} filter
 */

var searchBooks = function searchBooks(filter) {
  return {
    type: keys.SEARCH_BOOK,
    payload: {
      filter: filter
    }
  };
};
/**
 * 
 * @param {string} id 
 * @param {string} code 
 */

var getBook = function getBook(id, code) {
  return {
    type: keys.GET_BOOK,
    payload: {
      id: id,
      code: code
    }
  };
};
/**
 * 
 * @param {string} id 
 * @param {number} quantity
 */

var sellBook = function sellBook(id, quantity) {
  return {
    type: keys.SELL_BOOK,
    payload: {
      id: id,
      quantity: quantity
    }
  };
};
/**
 * @param {Book} book
 * @param {number} quantity
 */

var addBook = function addBook(book) {
  return {
    type: keys.ADD_BOOK,
    payload: _objectSpread(_objectSpread({}, book), {}, {
      quantity: quantity
    })
  };
};
/**
 * @param {Book} book
 * @param {number} quantity
 */

var updateBook = function updateBook(book) {
  return {
    type: keys.UPDATE_BOOK,
    payload: _objectSpread(_objectSpread({}, book), {}, {
      quantity: quantity
    })
  };
};
/**
 * @param void
 */

var getIncome = function getIncome() {
  return {
    type: keys.GET_INCOME
  };
};
var getBookByTitle = function getBookByTitle(title) {
  return {
    type: keys.GET_BOOK_BY_TITLE,
    payload: {
      title: title
    }
  };
};
var getBookByCode = function getBookByCode(code) {
  return {
    type: keys.GET_BOOK_BY_CODE,
    payload: {
      code: code
    }
  };
};
var getBooksByAuthor = author({
  type: keys.GET_BOOKS_BY_AUTHOR,
  payload: {
    author: author
  }
});
var getAuthors = function getAuthors(author) {
  return {
    type: keys.GET_AUTHORS,
    payload: {
      author: author
    }
  };
};

/***/ }),

/***/ "./src/lib/redux/actions/keys.js":
/*!***************************************!*\
  !*** ./src/lib/redux/actions/keys.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var keys = {};
var labels = ['AUTH_LOGIN', 'AUTH_LOGIN_SUCCESS', 'AUTH_LOGIN_FAILURE', 'AUTH_LOGOUT', 'AUTH_LOGOUT_SUCCESS', 'AUTH_LOGOUT_FAILURE', 'LIST_BOOKS', 'LIST_BOOK_SUCCESS', 'LIST_BOOK_FAILURE', 'SEARCH_BOOK', 'SEARCH_BOOK_SUCCESS', 'SEARCH_BOOK_FAILURE', 'GET_BOOK', 'GET_BOOK_SUCCESS', 'GET_BOOK_FAILURE', 'SELL_BOOK', 'SELL_BOOK_SUCCESS', 'SELL_BOOK_FAILURE', 'ADD_BOOK', 'ADD_BOOK_SUCCESS', 'ADD_BOOK_FAILURE', 'UPDATE_BOOK', 'UPDATE_BOOK_SUCCESS', 'UPDATE_BOOK_FAILURE', 'GET_INCOME', 'GET_INCOME_SUCCESS', 'GET_INCOME_FAILURE', 'GET_BOOK_BY_TITLE', 'GET_BOOK_BY_TITLE_SUCCESS', 'GET_BOOK_BY_TITLE_FAILURE', 'GET_BOOK_BY_CODE', 'GET_BOOK_BY_CODE_SUCCESS', 'GET_BOOK_BY_CODE_FAILURE', 'GET_BOOKS_BY_AUTHOR', 'GET_BOOKS_BY_AUTHOR_SUCCESS', 'GET_BOOKS_BY_AUTHOR_FAILURE', 'GET_AUTHORS', 'GET_AUTHORS_SUCCESS', 'GET_AUTHORS_FAILURE'];
var propertyModel = {
  configurable: false,
  enumerable: true,
  writable: false
};
Object.defineProperties(keys, _objectSpread({}, labels.map(function (label) {
  return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, label, _objectSpread(_objectSpread({}, propertyModel), {}, {
    value: label
  }));
}).reduce(function (prev, curr) {
  return _objectSpread(_objectSpread({}, prev), curr);
}, {})));
/**
 * @typedef {Object} ActionKey
 * @property {string} AUTH_LOGIN
 * @property {string} AUTH_LOGIN_SUCCESS
 * @property {string} AUTH_LOGIN_FAILURE
 * @property {string} AUTH_LOGOUT
 * @property {string} AUTH_LOGOUT_SUCCESS
 * @property {string} AUTH_LOGOUT_FAILURE
 * @property {string} LIST_BOOKS
 * @property {string} LIST_BOOKS_SUCCESS
 * @property {string} LIST_BOOKS_FAILURE
 * @property {string} SEARCH_BOOK
 * @property {string} SEARCH_BOOK_SUCCESS
 * @property {string} SEARCH_BOOK_FAILURE
 * @property {string} GET_BOOK
 * @property {string} GET_BOOK_SUCCESS
 * @property {string} GET_BOOK_FAILURE
 * @property {string} SELL_BOOK
 * @property {string} SELL_BOOK_SUCCESS
 * @property {string} SELL_BOOK_FAILURE
 * @property {string} ADD_BOOK
 * @property {string} ADD_BOOK_SUCCESS
 * @property {string} ADD_BOOK_FAILURE
 * @property {string} UPDATE_BOOK
 * @property {string} UPDATE_BOOK_SUCCESS
 * @property {string} UPDATE_BOOK_FAILURE
 * @property {string} GET_INCOME
 * @property {string} GET_INCOME_SUCCESS
 * @property {string} GET_INCOME_FAILURE
 * 
 * @property {string} GET_BOOK_BY_TITLE
 * @property {string} GET_BOOK_BY_TITLE_SUCCESS
 * @property {string} GET_BOOK_BY_TITLE_FAILURE
 * 
 * @property {string} GET_BOOK_BY_CODE
 * @property {string} GET_BOOK_BY_CODE_SUCCESS
 * @property {string} GET_BOOK_BY_CODE_FAILURE
 * 
 * @property {string} GET_BOOKS_BY_AUTHOR
 * @property {string} GET_BOOKS_BY_AUTHOR_SUCCESS
 * @property {string} GET_BOOKS_BY_AUTHOR_FAILURE
 * 
 * @property {string} GET_AUTHORS
 * @property {string} GET_AUTHORS_SUCCESS
 * @property {string} GET_AUTHORS_FAILURE
 * 
 * 
 * 
 * @return {ActionKey}
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return keys;
});

/***/ }),

/***/ "./src/lib/redux/reducers/auth.reducer.js":
/*!************************************************!*\
  !*** ./src/lib/redux/reducers/auth.reducer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/keys */ "./src/lib/redux/actions/keys.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var keys = (0,_actions_keys__WEBPACK_IMPORTED_MODULE_1__.default)();
var initialState = {
  isAuthenticated: false,
  authenticatedUser: null,
  error: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _action$payload, _action$payload2;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case keys.AUTH_LOGIN_SUCCESS:
      state.isAuthenticated = true;
      state.authenticatedUser = action.payload.data;
      state.error = null;
      break;

    case keys.AUTH_LOGIN_FAILURE:
      state.isAuthenticated = false;
      state.authenticatedUser = null;

      if (((_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.success) === false && (_action$payload2 = action.payload) !== null && _action$payload2 !== void 0 && _action$payload2.message) {
        state.error = action.payload.message;
      } else {
        var _action$payload3, _action$payload3$erro;

        state.error = action === null || action === void 0 ? void 0 : (_action$payload3 = action.payload) === null || _action$payload3 === void 0 ? void 0 : (_action$payload3$erro = _action$payload3.error) === null || _action$payload3$erro === void 0 ? void 0 : _action$payload3$erro.message;
      }

      break;

    case keys.AUTH_LOGOUT:
      state = _objectSpread({}, initialState);
      break;

    case keys.AUTH_LOGOUT_SUCCESS:
      setTimeout(function () {
        return localStorage.removeItem('state');
      }, 1000);
      break;
  }

  return _objectSpread({}, state);
});

/***/ }),

/***/ "./src/lib/redux/reducers/bookstore.reducer.js":
/*!*****************************************************!*\
  !*** ./src/lib/redux/reducers/bookstore.reducer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/keys */ "./src/lib/redux/actions/keys.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var keys = (0,_actions_keys__WEBPACK_IMPORTED_MODULE_1__.default)();
var initialState = {
  books: [],
  filter: '',
  author: '',
  authors: '',
  income: 0,
  error: null,
  message: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _action$payload$autho, _action$payload, _action$payload$data, _action$payload2, _action$payload3, _action$payload4, _actions$payload$mess, _actions$payload, _actions$payload$mess2, _actions$payload2, _action$payload5;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case keys.GET_AUTHOR:
      state.author = (_action$payload$autho = (_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.author) !== null && _action$payload$autho !== void 0 ? _action$payload$autho : '';
      break;

    case keys.GET_AUTHORS_SUCCESS:
      state.authors = (_action$payload$data = (_action$payload2 = action.payload) === null || _action$payload2 === void 0 ? void 0 : _action$payload2.data) !== null && _action$payload$data !== void 0 ? _action$payload$data : [];
      break;

    case keys.SEARCH_BOOK:
      state.filter = (_action$payload3 = action.payload) === null || _action$payload3 === void 0 ? void 0 : _action$payload3.filter;
      break;

    case keys.LIST_BOOKS_SUCCESS:
    case keys.SEARCH_BOOK_SUCCESS:
    case keys.GET_BOOKS_BY_AUTHOR_SUCCESS:
      state.books = (_action$payload4 = action.payload) === null || _action$payload4 === void 0 ? void 0 : _action$payload4.data;
      break;

    case keys.UPDATE_BOOK_SUCCESS:
    case keys.ADD_BOOK_SUCCESS:
      state.message = (_actions$payload$mess = (_actions$payload = actions.payload) === null || _actions$payload === void 0 ? void 0 : _actions$payload.message) !== null && _actions$payload$mess !== void 0 ? _actions$payload$mess : 'Libro salvato con successo';
      break;

    case keys.SELL_BOOK_SUCCESS:
      state.message = (_actions$payload$mess2 = (_actions$payload2 = actions.payload) === null || _actions$payload2 === void 0 ? void 0 : _actions$payload2.message) !== null && _actions$payload$mess2 !== void 0 ? _actions$payload$mess2 : 'Libro venduto!';
      break;

    case keys.GET_AUTHORS_FAILURE:
    case keys.GET_INCOME_FAILURE:
    case keys.LIST_BOOKS_FAILURE:
    case keys.SEARCH_BOOK_FAILURE:
    case keys.SELL_BOOK_FAILURE:
    case keys.ADD_BOOK_FAILURE:
    case keys.UPDATE_BOOK_FAILURE:
    case keys.GET_BOOKS_BY_AUTHOR_FAILURE:
      state.error = (_action$payload5 = action.payload) === null || _action$payload5 === void 0 ? void 0 : _action$payload5.reason;
      break;
  }

  return _objectSpread({}, state);
});

/***/ }),

/***/ "./src/lib/redux/sagas/index.js":
/*!**************************************!*\
  !*** ./src/lib/redux/sagas/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ rootSaga
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _api_auth_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/auth.api */ "./src/lib/api/auth.api.js");
/* harmony import */ var _api_bookstore_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/bookstore.api */ "./src/lib/api/bookstore.api.js");
/* harmony import */ var _actions_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/keys */ "./src/lib/redux/actions/keys.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(loginCall),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(logoutCall),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchAuth),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(listBooksCall),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(searchBooksCall),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(getBooksByAuthorCall),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(getAuthorsCall),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(getBookCall),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(getIncomeCall),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(addBookCall),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(updateBookCall),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(sellBookCall),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchBookStore),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(rootSaga);





var actions = (0,_actions_keys__WEBPACK_IMPORTED_MODULE_4__.default)();

function loginCall(action) {
  var _action$payload, username, password, resp;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function loginCall$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _action$payload = action.payload, username = _action$payload.username, password = _action$payload.password;
          _context.prev = 1;
          _context.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_api_auth_api__WEBPACK_IMPORTED_MODULE_2__.login, username, password);

        case 4:
          resp = _context.sent;

          if (!resp.success) {
            _context.next = 10;
            break;
          }

          _context.next = 8;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.AUTH_LOGIN_SUCCESS,
            payload: resp
          });

        case 8:
          _context.next = 12;
          break;

        case 10:
          _context.next = 12;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.AUTH_LOGIN_FAILURE,
            payload: resp
          });

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          _context.next = 18;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.AUTH_LOGIN_FAILURE,
            payload: _context.t0
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 14]]);
}

function logoutCall() {
  var resp;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function logoutCall$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_api_auth_api__WEBPACK_IMPORTED_MODULE_2__.logout);

        case 2:
          resp = _context2.sent;
          _context2.next = 5;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.AUTH_LOGOUT_SUCCESS,
            payload: resp
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function watchAuth() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchAuth$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeEvery)([actions.AUTH_LOGIN, actions.AUTH_LOGOUT], /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(action) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.t0 = action.type;
                    _context3.next = _context3.t0 === actions.AUTH_LOGIN ? 3 : _context3.t0 === actions.AUTH_LOGOUT ? 6 : 9;
                    break;

                  case 3:
                    _context3.next = 5;
                    return loginCall(action);

                  case 5:
                    return _context3.abrupt("break", 10);

                  case 6:
                    _context3.next = 8;
                    return logoutCall();

                  case 8:
                    return _context3.abrupt("break", 10);

                  case 9:
                    return _context3.abrupt("break", 10);

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee);
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked3);
}

function listBooksCall(action) {
  var resp;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function listBooksCall$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_api_bookstore_api__WEBPACK_IMPORTED_MODULE_3__.listBooks);

        case 3:
          resp = _context5.sent;

          if (!resp.success) {
            _context5.next = 9;
            break;
          }

          _context5.next = 7;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.LIST_BOOKS_SUCCESS,
            payload: resp
          });

        case 7:
          _context5.next = 11;
          break;

        case 9:
          _context5.next = 11;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.LIST_BOOKS_FAILURE,
            payload: resp
          });

        case 11:
          _context5.next = 17;
          break;

        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 17;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.LIST_BOOKS_FAILURE,
            payload: {
              success: false,
              reason: _context5.t0
            }
          });

        case 17:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked4, null, [[0, 13]]);
}

function searchBooksCall(action) {
  var filter, resp;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function searchBooksCall$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          filter = action.payload.filter;
          _context6.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_api_bookstore_api__WEBPACK_IMPORTED_MODULE_3__.searchBooks, filter);

        case 4:
          resp = _context6.sent;

          if (!resp.success) {
            _context6.next = 10;
            break;
          }

          _context6.next = 8;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.SEARCH_BOOK_SUCCESS,
            payload: resp
          });

        case 8:
          _context6.next = 12;
          break;

        case 10:
          _context6.next = 12;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.SEARCH_BOOK_FAILURE,
            payload: resp
          });

        case 12:
          _context6.next = 18;
          break;

        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 18;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.SEARCH_BOOKS_FAILURE,
            payload: {
              success: false,
              reason: _context6.t0
            }
          });

        case 18:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked5, null, [[0, 14]]);
}

function getBooksByAuthorCall(action) {
  var author, resp;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function getBooksByAuthorCall$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          author = action.payload.author;
          _context7.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_api_bookstore_api__WEBPACK_IMPORTED_MODULE_3__.getBooksByAuthor, author);

        case 4:
          resp = _context7.sent;

          if (!resp.success) {
            _context7.next = 10;
            break;
          }

          _context7.next = 8;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.GET_BOOKS_BY_AUTHOR_SUCCESS,
            payload: resp
          });

        case 8:
          _context7.next = 12;
          break;

        case 10:
          _context7.next = 12;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.GET_BOOKS_BY_AUTHOR_FAILURE,
            payload: resp
          });

        case 12:
          _context7.next = 18;
          break;

        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7["catch"](0);
          _context7.next = 18;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.GET_BOOKS_BY_AUTHOR_FAILURE,
            payload: {
              success: false,
              reason: _context7.t0
            }
          });

        case 18:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked6, null, [[0, 14]]);
}

function getAuthorsCall(action) {
  var author, resp;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function getAuthorsCall$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          author = action.payload.author;
          _context8.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_api_bookstore_api__WEBPACK_IMPORTED_MODULE_3__.getAuthors, author);

        case 4:
          resp = _context8.sent;

          if (!resp.success) {
            _context8.next = 10;
            break;
          }

          _context8.next = 8;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.GET_AUTHORS_SUCCESS,
            payload: resp
          });

        case 8:
          _context8.next = 12;
          break;

        case 10:
          _context8.next = 12;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.GET_AUTHORS_FAILURE,
            payload: resp
          });

        case 12:
          _context8.next = 18;
          break;

        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](0);
          _context8.next = 18;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.GET_AUTHORS_FAILURE,
            payload: {
              success: false,
              reason: _context8.t0
            }
          });

        case 18:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked7, null, [[0, 14]]);
}

function getBookCall(action) {
  var _action$payload2, id, code, resp;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function getBookCall$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _action$payload2 = action.payload, id = _action$payload2.id, code = _action$payload2.code;
          _context9.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(code ? _api_bookstore_api__WEBPACK_IMPORTED_MODULE_3__.getBookByCode : _api_bookstore_api__WEBPACK_IMPORTED_MODULE_3__.getBookByCode, code !== null && code !== void 0 ? code : id);

        case 4:
          resp = _context9.sent;

          if (!resp.success) {
            _context9.next = 10;
            break;
          }

          _context9.next = 8;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.GET_BOOK_SUCCESS,
            payload: resp
          });

        case 8:
          _context9.next = 12;
          break;

        case 10:
          _context9.next = 12;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.GET_BOOK_FAILURE,
            payload: resp
          });

        case 12:
          _context9.next = 18;
          break;

        case 14:
          _context9.prev = 14;
          _context9.t0 = _context9["catch"](0);
          _context9.next = 18;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.GET_BOOK_FAILURE,
            payload: {
              success: false,
              reason: _context9.t0
            }
          });

        case 18:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked8, null, [[0, 14]]);
}

function getIncomeCall(action) {
  var resp;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function getIncomeCall$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_api_bookstore_api__WEBPACK_IMPORTED_MODULE_3__.getIncome);

        case 3:
          resp = _context10.sent;
          _context10.next = 6;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: resp.success ? actions.GET_INCOME_SUCCESS : actions.GET_INCOME_FAILURE,
            payload: resp
          });

        case 6:
          _context10.next = 12;
          break;

        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          _context10.next = 12;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.GET_INCOME_FAILURE,
            payload: {
              success: false,
              reason: _context10.t0
            }
          });

        case 12:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked9, null, [[0, 8]]);
}

function addBookCall(action) {
  var _action$payload3, book, quantity, resp;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function addBookCall$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _action$payload3 = action.payload, book = _action$payload3.book, quantity = _action$payload3.quantity;
          _context11.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_api_bookstore_api__WEBPACK_IMPORTED_MODULE_3__.addBook, book, quantity);

        case 4:
          resp = _context11.sent;
          _context11.next = 7;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: resp.success ? actions.ADD_BOOK_SUCCESS : actions.ADD_BOOK_FAILURE,
            payload: resp
          });

        case 7:
          _context11.next = 13;
          break;

        case 9:
          _context11.prev = 9;
          _context11.t0 = _context11["catch"](0);
          _context11.next = 13;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.ADD_BOOK_FAILURE,
            payload: {
              success: false,
              reason: _context11.t0
            }
          });

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked10, null, [[0, 9]]);
}

function updateBookCall(action) {
  var _action$payload4, book, quantity, resp;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function updateBookCall$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _action$payload4 = action.payload, book = _action$payload4.book, quantity = _action$payload4.quantity;
          _context12.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_api_bookstore_api__WEBPACK_IMPORTED_MODULE_3__.updateBook, book, quantity);

        case 4:
          resp = _context12.sent;
          _context12.next = 7;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: resp.success ? actions.UPDATE_BOOK_SUCCESS : actions.UPDATE_BOOK_FAILURE,
            payload: resp
          });

        case 7:
          _context12.next = 13;
          break;

        case 9:
          _context12.prev = 9;
          _context12.t0 = _context12["catch"](0);
          _context12.next = 13;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.UPDATE_BOOK_FAILURE,
            payload: {
              success: false,
              reason: _context12.t0
            }
          });

        case 13:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked11, null, [[0, 9]]);
}

function sellBookCall(action) {
  var _action$payload5, code, id, quantity, resp;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function sellBookCall$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _action$payload5 = action.payload, code = _action$payload5.code, id = _action$payload5.id, quantity = _action$payload5.quantity;
          _context13.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(_api_bookstore_api__WEBPACK_IMPORTED_MODULE_3__.sellBook, code, id, quantity);

        case 4:
          resp = _context13.sent;
          _context13.next = 7;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: resp.success ? actions.SELL_BOOK_SUCCESS : actions.SELL_BOOK_FAILURE,
            payload: resp
          });

        case 7:
          _context13.next = 13;
          break;

        case 9:
          _context13.prev = 9;
          _context13.t0 = _context13["catch"](0);
          _context13.next = 13;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: actions.SELL_BOOK_FAILURE,
            payload: {
              success: false,
              reason: _context13.t0
            }
          });

        case 13:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked12, null, [[0, 9]]);
}

function watchBookStore() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchBookStore$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeEvery)([actions.LIST_BOOKS, actions.SEARCH_BOOK, actions.GET_BOOK, actions.GET_INCOME, actions.ADD_BOOK, actions.UPDATE_BOOK, actions.SELL_BOOK], /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(action) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.t0 = action.type;
                    _context14.next = _context14.t0 === actions.LIST_BOOKS ? 3 : _context14.t0 === actions.SEARCH_BOOK ? 6 : _context14.t0 === actions.GET_BOOK ? 9 : _context14.t0 === actions.GET_INCOME ? 12 : _context14.t0 === actions.ADD_BOOK ? 15 : _context14.t0 === actions.UPDATE_BOOK ? 18 : _context14.t0 === actions.SELL_BOOK ? 21 : 24;
                    break;

                  case 3:
                    _context14.next = 5;
                    return listBooksCall(action);

                  case 5:
                    return _context14.abrupt("break", 24);

                  case 6:
                    _context14.next = 8;
                    return searchBooksCall(action);

                  case 8:
                    return _context14.abrupt("break", 24);

                  case 9:
                    _context14.next = 11;
                    return getBookCall(action);

                  case 11:
                    return _context14.abrupt("break", 24);

                  case 12:
                    _context14.next = 14;
                    return getIncomeCall(action);

                  case 14:
                    return _context14.abrupt("break", 24);

                  case 15:
                    _context14.next = 17;
                    return addBookCall(action);

                  case 17:
                    return _context14.abrupt("break", 24);

                  case 18:
                    _context14.next = 20;
                    return updateBookCall(action);

                  case 20:
                    return _context14.abrupt("break", 24);

                  case 21:
                    _context14.next = 23;
                    return sellBookCall(action);

                  case 23:
                    return _context14.abrupt("break", 24);

                  case 24:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee2);
          }));

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked13);
}

function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function rootSaga$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([watchAuth(), watchBookStore()]);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked14);
}

/***/ }),

/***/ "./src/lib/redux/store.js":
/*!********************************!*\
  !*** ./src/lib/redux/store.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/auth.reducer */ "./src/lib/redux/reducers/auth.reducer.js");
/* harmony import */ var _reducers_bookstore_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/bookstore.reducer */ "./src/lib/redux/reducers/bookstore.reducer.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas */ "./src/lib/redux/sagas/index.js");
/* harmony import */ var _utils_local_storage_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/local-storage-helper */ "./src/lib/utils/local-storage-helper.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");








var sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_0__.default)();
var store = (0,redux__WEBPACK_IMPORTED_MODULE_7__.createStore)((0,redux__WEBPACK_IMPORTED_MODULE_7__.combineReducers)({
  auth: _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__.default,
  bookstore: _reducers_bookstore_reducer__WEBPACK_IMPORTED_MODULE_3__.default
}), (0,_utils_local_storage_helper__WEBPACK_IMPORTED_MODULE_5__.loadState)(), (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_7__.applyMiddleware)(sagaMiddleware))); // save full app's store to localStorage to keep state after reloading

store.subscribe((0,lodash__WEBPACK_IMPORTED_MODULE_1__.throttle)(function () {
  var state = store.getState();
  (0,_utils_local_storage_helper__WEBPACK_IMPORTED_MODULE_5__.saveState)(state);
}, 1000));
sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__.default);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/lib/utils/local-storage-helper.js":
/*!***********************************************!*\
  !*** ./src/lib/utils/local-storage-helper.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveState": () => /* binding */ saveState,
/* harmony export */   "loadState": () => /* binding */ loadState
/* harmony export */ });
var saveState = function saveState(state) {
  var serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
};
var loadState = function loadState() {
  try {
    var serializedState = localStorage.getItem('state');
    if (serializedState) return JSON.parse(serializedState);
    return undefined;
  } catch (e) {
    return undefined;
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/index.js","vendors-node_modules_babel_runtime_helpers_asyncToGenerator_js-node_modules_babel_runtime_hel-9d3386"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdemo_bookstore_frontend"] = self["webpackChunkdemo_bookstore_frontend"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLWJvb2tzdG9yZS1mcm9udGVuZC8uL3NyYy9Sb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtby1ib29rc3RvcmUtZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vZGVtby1ib29rc3RvcmUtZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9BdXRoZW50aWNhdGVkUGFnZS5qcyIsIndlYnBhY2s6Ly9kZW1vLWJvb2tzdG9yZS1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0Jvb2tzLmpzIiwid2VicGFjazovL2RlbW8tYm9va3N0b3JlLWZyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly9kZW1vLWJvb2tzdG9yZS1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0ZpbHRlcnNGb3JtLmpzIiwid2VicGFjazovL2RlbW8tYm9va3N0b3JlLWZyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQXBwQmFyLmpzIiwid2VicGFjazovL2RlbW8tYm9va3N0b3JlLWZyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvU2lnbkluLmpzIiwid2VicGFjazovL2RlbW8tYm9va3N0b3JlLWZyb250ZW5kLy4vc3JjL2NvbnRleHQvVUlDb250ZXh0LmpzIiwid2VicGFjazovL2RlbW8tYm9va3N0b3JlLWZyb250ZW5kLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2RlbW8tYm9va3N0b3JlLWZyb250ZW5kLy4vc3JjL2xpYi9hcGkvYXV0aC5hcGkuanMiLCJ3ZWJwYWNrOi8vZGVtby1ib29rc3RvcmUtZnJvbnRlbmQvLi9zcmMvbGliL2FwaS9ib29rc3RvcmUuYXBpLmpzIiwid2VicGFjazovL2RlbW8tYm9va3N0b3JlLWZyb250ZW5kLy4vc3JjL2xpYi9hcGkvZ2F0ZXdheS5qcyIsIndlYnBhY2s6Ly9kZW1vLWJvb2tzdG9yZS1mcm9udGVuZC8uL3NyYy9saWIvcmVkdXgvYWN0aW9ucy9hdXRoLmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZGVtby1ib29rc3RvcmUtZnJvbnRlbmQvLi9zcmMvbGliL3JlZHV4L2FjdGlvbnMvYm9va3N0b3JlLmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZGVtby1ib29rc3RvcmUtZnJvbnRlbmQvLi9zcmMvbGliL3JlZHV4L2FjdGlvbnMva2V5cy5qcyIsIndlYnBhY2s6Ly9kZW1vLWJvb2tzdG9yZS1mcm9udGVuZC8uL3NyYy9saWIvcmVkdXgvcmVkdWNlcnMvYXV0aC5yZWR1Y2VyLmpzIiwid2VicGFjazovL2RlbW8tYm9va3N0b3JlLWZyb250ZW5kLy4vc3JjL2xpYi9yZWR1eC9yZWR1Y2Vycy9ib29rc3RvcmUucmVkdWNlci5qcyIsIndlYnBhY2s6Ly9kZW1vLWJvb2tzdG9yZS1mcm9udGVuZC8uL3NyYy9saWIvcmVkdXgvc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtby1ib29rc3RvcmUtZnJvbnRlbmQvLi9zcmMvbGliL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovL2RlbW8tYm9va3N0b3JlLWZyb250ZW5kLy4vc3JjL2xpYi91dGlscy9sb2NhbC1zdG9yYWdlLWhlbHBlci5qcyIsIndlYnBhY2s6Ly9kZW1vLWJvb2tzdG9yZS1mcm9udGVuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZW1vLWJvb2tzdG9yZS1mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZW1vLWJvb2tzdG9yZS1mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVtby1ib29rc3RvcmUtZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9kZW1vLWJvb2tzdG9yZS1mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvaGFybW9ueSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2RlbW8tYm9va3N0b3JlLWZyb250ZW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVtby1ib29rc3RvcmUtZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZW1vLWJvb2tzdG9yZS1mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2RlbW8tYm9va3N0b3JlLWZyb250ZW5kL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2RlbW8tYm9va3N0b3JlLWZyb250ZW5kL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJjaGlsZHJlbiIsInByb3BzIiwiQXBwIiwidGhlbWUiLCJ1c2VNZW1vIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsImxpZ2h0Qmx1ZSIsInNlY29uZGFyeSIsImdyZXkiLCJ3aGl0ZSIsImJsYWNrIiwidXNlU3RhdGUiLCJkcmF3ZXIiLCJ0b2dnbGVEcmF3ZXIiLCJzdGF0dXMiLCJzZXRVSVN0YXRlIiwidWlTdGF0ZSIsImNsb3NlRHJhd2VyIiwic3RvcmUiLCJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJjbGFzc2VzIiwiZmlsdGVycyIsInBhZGRpbmdUb3AiLCJzcGFjaW5nIiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJCb29rcyIsInVpQ3R4IiwidXNlQ29udGV4dCIsIlVJQ29udGV4dCIsImNsaWNrQXdheUhhbmRsZXIiLCJFcnJvckJvdW5kYXJ5Iiwic3RhdGUiLCJoYXNFcnJvciIsImVycm9yIiwiZXJyb3JJbmZvIiwic2V0U3RhdGUiLCJSZWFjdCIsInNlbGVjdCIsImZpbHRlcnNGb3JtIiwibWFyZ2luIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW5zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZpbHRlcnNGb3JtIiwiYXV0aG9yIiwidXNlU2VsZWN0b3IiLCJhdXRob3JzIiwidXNlRWZmZWN0IiwiZ2V0QXV0aG9ycyIsImNsc3giLCJtYXAiLCJ1c2VTdHlsZXMiLCJmbGV4R3JvdyIsImFwcEJhciIsInpJbmRleCIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInRpdGxlIiwiYnJlYWtwb2ludHMiLCJ1cCIsInNlYXJjaCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJmYWRlIiwiY29tbW9uIiwibWFyZ2luTGVmdCIsInNlYXJjaEljb24iLCJwYWRkaW5nIiwicG9pbnRlckV2ZW50cyIsImlucHV0Um9vdCIsImNvbG9yIiwiaW5wdXRJbnB1dCIsInBhZGRpbmdMZWZ0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiU2VhcmNoQXBwQmFyIiwiaW5wdXQiLCJsb2dpbiIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiU2lnbkluIiwib3BlbiIsInNldE9wZW4iLCJpc0F1dGhlbnRpY2F0ZWQiLCJhdXRoIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbGljayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNyZWF0ZUNvbnRleHQiLCJwcmVmZXRjaCIsInJlc3AiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwianNvbkNhbGwiLCJsb2dvdXQiLCJsaXN0Qm9va3MiLCJzZWFyY2hCb29rcyIsImZpbHRlciIsImdldEJvb2tCeVRpdGxlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2V0Qm9va0J5Q29kZSIsImNvZGUiLCJzZWxsQm9vayIsImlkIiwicXVhbnRpdHkiLCJhZGRCb29rIiwiYm9vayIsInVwZGF0ZUJvb2siLCJnZXRJbmNvbWUiLCJnZXRCb29rc0J5QXV0aG9yIiwiY29va2llcyIsIkNvb2tpZXMiLCJBUElfVVJMIiwicHJvY2VzcyIsImNiIiwiZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwianNvbiIsInNldCIsImNzcmZUb2tlbiIsInBhdGgiLCJ1cmwiLCJkYXRhIiwiY3NyZiIsInN0YXJ0c1dpdGgiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJhdyIsInN1Y2Nlc3MiLCJrZXlzIiwiYWN0aW9uS2V5cyIsInR5cGUiLCJBVVRIX0xPR0lOIiwicGF5bG9hZCIsIkFVVEhfTE9HT1VUIiwiTElTVF9CT09LUyIsIlNFQVJDSF9CT09LIiwiZ2V0Qm9vayIsIkdFVF9CT09LIiwiU0VMTF9CT09LIiwiQUREX0JPT0siLCJVUERBVEVfQk9PSyIsIkdFVF9JTkNPTUUiLCJHRVRfQk9PS19CWV9USVRMRSIsIkdFVF9CT09LX0JZX0NPREUiLCJHRVRfQk9PS1NfQllfQVVUSE9SIiwiR0VUX0FVVEhPUlMiLCJsYWJlbHMiLCJwcm9wZXJ0eU1vZGVsIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsImxhYmVsIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJpbml0aWFsU3RhdGUiLCJhdXRoZW50aWNhdGVkVXNlciIsImFjdGlvbiIsIkFVVEhfTE9HSU5fU1VDQ0VTUyIsIkFVVEhfTE9HSU5fRkFJTFVSRSIsIm1lc3NhZ2UiLCJBVVRIX0xPR09VVF9TVUNDRVNTIiwic2V0VGltZW91dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJib29rcyIsImluY29tZSIsIkdFVF9BVVRIT1IiLCJHRVRfQVVUSE9SU19TVUNDRVNTIiwiTElTVF9CT09LU19TVUNDRVNTIiwiU0VBUkNIX0JPT0tfU1VDQ0VTUyIsIkdFVF9CT09LU19CWV9BVVRIT1JfU1VDQ0VTUyIsIlVQREFURV9CT09LX1NVQ0NFU1MiLCJBRERfQk9PS19TVUNDRVNTIiwiYWN0aW9ucyIsIlNFTExfQk9PS19TVUNDRVNTIiwiR0VUX0FVVEhPUlNfRkFJTFVSRSIsIkdFVF9JTkNPTUVfRkFJTFVSRSIsIkxJU1RfQk9PS1NfRkFJTFVSRSIsIlNFQVJDSF9CT09LX0ZBSUxVUkUiLCJTRUxMX0JPT0tfRkFJTFVSRSIsIkFERF9CT09LX0ZBSUxVUkUiLCJVUERBVEVfQk9PS19GQUlMVVJFIiwiR0VUX0JPT0tTX0JZX0FVVEhPUl9GQUlMVVJFIiwicmVhc29uIiwibG9naW5DYWxsIiwibG9nb3V0Q2FsbCIsIndhdGNoQXV0aCIsImxpc3RCb29rc0NhbGwiLCJzZWFyY2hCb29rc0NhbGwiLCJnZXRCb29rc0J5QXV0aG9yQ2FsbCIsImdldEF1dGhvcnNDYWxsIiwiZ2V0Qm9va0NhbGwiLCJnZXRJbmNvbWVDYWxsIiwiYWRkQm9va0NhbGwiLCJ1cGRhdGVCb29rQ2FsbCIsInNlbGxCb29rQ2FsbCIsIndhdGNoQm9va1N0b3JlIiwicm9vdFNhZ2EiLCJjYWxsIiwicHV0IiwidGFrZUV2ZXJ5IiwiU0VBUkNIX0JPT0tTX0ZBSUxVUkUiLCJHRVRfQk9PS19TVUNDRVNTIiwiR0VUX0JPT0tfRkFJTFVSRSIsIkdFVF9JTkNPTUVfU1VDQ0VTUyIsImFsbCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsImF1dGhSZWR1Y2VyIiwiYm9va3N0b3JlIiwiYm9va1N0b3JlUmVkdWNlciIsImxvYWRTdGF0ZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdWJzY3JpYmUiLCJ0aHJvdHRsZSIsImdldFN0YXRlIiwic2F2ZVN0YXRlIiwicnVuIiwic2VyaWFsaXplZFN0YXRlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJwYXJzZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtB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d0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBLEU7Ozs7O1dDVkEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSw0Q0FBNEM7V0FDNUM7V0FDQSxFOzs7O1VDcEZBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBtYWtlU3R5bGVzLCBDc3NCYXNlbGluZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IEF1dGhlbnRpY2F0ZWRQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aGVudGljYXRlZFBhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxBdXRoZW50aWNhdGVkUGFnZSAvPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICApXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgbGlnaHRCbHVlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9saWdodEJsdWUnXG5pbXBvcnQgZ3JleSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvZ3JleSdcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2xpYi9yZWR1eC9zdG9yZSdcbmltcG9ydCBVSUNvbnRleHQgZnJvbSAnLi4vY29udGV4dC9VSUNvbnRleHQnXG5cbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi4vUm91dGVzJ1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi9FcnJvckJvdW5kYXJ5J1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICAgY3JlYXRlTXVpVGhlbWUoe1xuICAgICAgICAgICAgICAgIHBhbGV0dGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTogbGlnaHRCbHVlLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk6IGdyZXksXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICAgICAgICAgIGJsYWNrOiAnIzAwMDAwMCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBbXVxuICAgIClcblxuICAgIGNvbnN0IFt1aVN0YXRlLCBzZXRVSVN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZHJhd2VyOiBmYWxzZSxcbiAgICAgICAgdG9nZ2xlRHJhd2VyOiAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICBzZXRVSVN0YXRlKCgpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4udWlTdGF0ZSxcbiAgICAgICAgICAgICAgICBkcmF3ZXI6IHN0YXR1cyA/PyAhdWlTdGF0ZS5kcmF3ZXJcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZURyYXdlcjogKCkgPT4ge1xuICAgICAgICAgICAgc2V0VUlTdGF0ZSgoKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnVpU3RhdGUsXG4gICAgICAgICAgICAgICAgZHJhd2VyOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0sXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFVJQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dWlTdGF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZXMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICAgICAgICAgICAgICA8L1VJQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250YWluZXIsIENzc0Jhc2VsaW5lLCBHcmlkLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcbmltcG9ydCBTZWFyY2hBcHBCYXIgZnJvbSAnLi9TZWFyY2hBcHBCYXInXG5pbXBvcnQgU2lnbkluIGZyb20gJy4vU2lnbkluJ1xuaW1wb3J0IEJvb2tzIGZyb20gJy4vQm9va3MnXG5cbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBkaXNwbGF5OidmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6J2ZsZXgtc3RhcnQnLFxuICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjp0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgfVxufSkpXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCAuLi5wcm9wc30pID0+IHtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiPlxuICAgICAgICAgICAgPFNlYXJjaEFwcEJhciAvPlxuICAgICAgICAgICAgPFNpZ25JbiAvPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgPEJvb2tzIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdyaWQsIERyYXdlciwgbWFrZVN0eWxlcywgQ2xpY2tBd2F5TGlzdGVuZXIsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgVUlDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvVUlDb250ZXh0J1xuaW1wb3J0IEZpbHRlcnNGb3JtIGZyb20gJy4vRmlsdGVyc0Zvcm0nXG5cbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIGZpbHRlcnM6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygxMiksXG4gICAgICAgIG1heEhlaWdodDogJzQ1dmgnLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeVsyMDBdLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgfSxcbn0pKVxuXG5jb25zdCBCb29rcyA9ICgpID0+IHtcblxuICAgIGNvbnN0IHVpQ3R4ID0gdXNlQ29udGV4dChVSUNvbnRleHQpXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKClcblxuICAgIGNvbnN0IGNsaWNrQXdheUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmKHVpQ3R4LmRyYXdlciA9PT0gdHJ1ZSkgdWlDdHguY2xvc2VEcmF3ZXIoKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgbW91c2VFdmVudD1cIm9uTW91c2VEb3duXCJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hFdmVudD1cIm9uVG91Y2hTdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tBd2F5PXtjbGlja0F3YXlIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPERyYXdlciBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvcj1cInRvcFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dWlDdHguZHJhd2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInBlcnNpc3RlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmlsdGVyc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlcnNGb3JtIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va3MiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UsIGVycm9yOiBudWxsLCBlcnJvckluZm86IG51bGwgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgaGFzRXJyb3I6IHRydWUgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBoYXNFcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgZXJyb3JJbmZvLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiA8aDE+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gxPlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdyaWQsIG1ha2VTdHlsZXMsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBnZXRBdXRob3JzIH0gZnJvbSAnLi4vbGliL3JlZHV4L2FjdGlvbnMvYm9va3N0b3JlLmFjdGlvbnMnXG5cbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIHNlbGVjdDoge1xuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBmaWx0ZXJzRm9ybToge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgfSxcbiAgICBmb3JtQ29udHJvbDoge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMilcbiAgICB9LFxuICAgIG1hcmdpbnM6IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpXG4gICAgfVxufSkpXG5cbmNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG5jb25zdCBGaWx0ZXJzRm9ybSA9ICgpID0+IHtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpXG4gICAgY29uc3QgYXV0aG9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aG9yKVxuICAgIGNvbnN0IGF1dGhvcnMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRob3JzKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0QXV0aG9ycygpKVxuICAgIH0sW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgeHM9ezEwfSBkaXJlY3Rpb249XCJyb3dcIiBjbGFzc05hbWU9e2NsYXNzZXMuZmlsdGVyc0Zvcm19PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXszfSBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2luc30+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Y2xzeChbY2xhc3Nlcy5mb3JtQ29udHJvbCwgY2xhc3Nlcy5tYXJnaW5zXSl9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiYXV0aG9yLXNlbGVjdFwiPkF1dGhvcjwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImF1dGhvci1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhdXRob3Itc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2F1dGhvcnMgJiYgYXV0aG9ycy5tYXAoYXV0aG9yID0+ICg8TWVudUl0ZW0gdmFsdWU9e2F1dGhvcn0+e2F1dGhvcn08L01lbnVJdGVtPikpfVxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzRm9ybSIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVJQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L1VJQ29udGV4dCdcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlJztcbmltcG9ydCB7IGZhZGUsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBhcHBCYXI6IHtcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxuICB9LFxuICBtZW51QnV0dG9uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZmxleEdyb3c6IDEsXG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjE1KSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSwgMC4yNSksXG4gICAgfSxcbiAgICBtYXJnaW5MZWZ0OiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgfSxcbiAgfSxcbiAgc2VhcmNoSWNvbjoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIGlucHV0Um9vdDoge1xuICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gIH0sXG4gIGlucHV0SW5wdXQ6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApLFxuICAgIC8vIHZlcnRpY2FsIHBhZGRpbmcgKyBmb250IHNpemUgZnJvbSBzZWFyY2hJY29uXG4gICAgcGFkZGluZ0xlZnQ6IGBjYWxjKDFlbSArICR7dGhlbWUuc3BhY2luZyg0KX1weClgLFxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnKSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIHdpZHRoOiAnMTJjaCcsXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgd2lkdGg6ICcyMGNoJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQXBwQmFyKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHVpQ3R4ID0gdXNlQ29udGV4dChVSUNvbnRleHQpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxBcHBCYXIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0gcG9zaXRpb249XCJmaXhlZFwiIHhzPXsxMn0+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVpQ3R4LnRvZ2dsZURyYXdlcigpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcD5cbiAgICAgICAgICAgIERlbW8gQm9vayBTdG9yZVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XG4gICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxJbnB1dEJhc2VcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2jigKZcIlxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdzZWFyY2gnIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL2xpYi9yZWR1eC9hY3Rpb25zL2F1dGguYWN0aW9ucydcbmltcG9ydCB7IERpYWxvZywgRGlhbG9nVGl0bGUsIERpYWxvZ0NvbnRlbnQsIERpYWxvZ0FjdGlvbnMsIEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBsb2dpbjoge1xuICAgICAgbWluV2lkdGg6ICcyNDBweCcsXG4gICAgICBtaW5IZWlnaHQ6ICczNjBweCcsXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aD8uaXNBdXRoZW50aWNhdGVkKVxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICBpZihpc0F1dGhlbnRpY2F0ZWQpIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0T3BlbighaXNBdXRoZW50aWNhdGVkKVxuICB9LCBbaXNBdXRoZW50aWNhdGVkXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJMb2dpbiBmb3JtIHRpdGxlXCJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIkxvZ2luIGZvcm0gZGVzY3JpcHRpb25cIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9naW59XG4gICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgbWF4V2lkdGg9XCJ4c1wiXG4gICAgICA+XG4gICAgICAgIDxEaWFsb2dUaXRsZT5QbGVhc2UsIHNpZ24gaW48L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBVSUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICBkcmF3ZXI6IGZhbHNlLFxuICAgIHRvZ2dsZURyYXdlcjogKCkgPT4ge31cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IFVJQ29udGV4dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IHsgcHJlZmV0Y2ggfSBmcm9tICcuL2xpYi9hcGkvZ2F0ZXdheSdcblxucHJlZmV0Y2goKHJlc3ApID0+IHtcbiAgICByZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG59KVxuIiwiaW1wb3J0IHsganNvbkNhbGwgfSBmcm9tICcuL2dhdGV3YXknXG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+XG4gICAgYXdhaXQganNvbkNhbGwoYC9hdXRoL3NpZ25pbmAsICdQT1NUJywge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgfSlcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+XG4gICAgYXdhaXQganNvbkNhbGwoYC9hdXRoL3NpZ25vdXRgLCAnUE9TVCcpXG4iLCIvKipcbiAqIEJvb2sgc3RvcmUgQVBJIGNsaWVudFxuICogQG1vZHVsZSBib29rc3RvcmUuYXBpXG4gKi9cblxuaW1wb3J0IHsganNvbkNhbGwgfSBmcm9tICcuL2dhdGV3YXknXG5cbmV4cG9ydCBjb25zdCBsaXN0Qm9va3MgPSBhc3luYyAoKSA9PiBhd2FpdCBqc29uQ2FsbCgnL2Jvb2svbGlzdCcsICdHRVQnKVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoQm9va3MgPSBhc3luYyAoZmlsdGVyKSA9PiBhd2FpdCBqc29uQ2FsbCgnL2Jvb2svc2VhcmNoJywgJ0dFVCcsIHtcbiAgICBmaWx0ZXJcbn0pXG5cbmV4cG9ydCBjb25zdCBnZXRCb29rQnlUaXRsZSA9IGFzeW5jICh0aXRsZSkgPT4gYXdhaXQganNvbkNhbGwoYC9ib29rL2dldC8ke2VuY29kZVVSSUNvbXBvbmVudCh0aXRsZSl9YCwgJ0dFVCcpXG5cbmV4cG9ydCBjb25zdCBnZXRCb29rQnlDb2RlID0gYXN5bmMgKGNvZGUpID0+IGF3YWl0IGpzb25DYWxsKGAvYm9vay9nZXQvJHtlbmNvZGVVUklDb21wb25lbnQoY29kZSl9YCwgJ0dFVCcpXG5cbi8qKiBcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJvb2tcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb2RlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdGl0bGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhdXRob3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwcmljZVxuICovXG5cbmV4cG9ydCBjb25zdCBzZWxsQm9vayA9IGFzeW5jIChjb2RlLCBpZCwgcXVhbnRpdHkpID0+IGF3YWl0IGpzb25DYWxsKCcvYm9vay9zZWxsJywgJ1BVVCcsIHtcbiAgICBjb2RlLFxuICAgIGlkLFxuICAgIHF1YW50aXR5LFxufSlcblxuLyoqXG4gKiBBZGRzIGEgYm9vayBpbiB0aGUgaW52ZW50b3J5XG4gKiBAcGFyYW0ge0Jvb2t9IGJvb2sgXG4gKiBAcGFyYW0ge251bWJlcn0gcXVhbnRpdHlcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZEJvb2sgPSBhc3luYyAoYm9vaywgcXVhbnRpdHkpID0+IGF3YWl0IGpzb25DYWxsKCcvYm9vaycsICdQT1NUJywge1xuICAgIC4uLmJvb2ssXG4gICAgcXVhbnRpdHksXG59KVxuXG4vKipcbiAqIFVwZGF0ZXMgYSBib29rIGluIHRoZSBpbnZlbnRvcnlcbiAqIEBwYXJhbSB7Qm9va30gYm9vayBcbiAqIEBwYXJhbSB7bnVtYmVyfSBxdWFudGl0eVxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlQm9vayA9IGFzeW5jIChib29rKSA9PiBhd2FpdCBqc29uQ2FsbCgnL2Jvb2snLCAnUFVUJywge1xuICAgIC4uLmJvb2ssXG4gICAgcXVhbnRpdHksXG59KVxuXG4vKipcbiAqIEdldHMgYm9vayBzZWxsaW5nIHRvdGFsIGluY29tZVxuICovXG5leHBvcnQgY29uc3QgZ2V0SW5jb21lID0gYXN5bmMgKCkgPT4gYXdhaXQganNvbkNhbGwoJy9ib29rL2luY29tZScsICdHRVQnKVxuXG4vKipcbiAqIEdldHMgYSBsaXN0IG9mIGF1dGhvcnMgYXZhaWxhYmxlXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdXRob3Igb3B0aW9uYWwgdGV4dCBmaWx0ZXJcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEF1dGhvcnMgPSBhc3luYyAoYXV0aG9yKSA9PiBhd2FpdCBqc29uQ2FsbCgnL2Jvb2svYXV0aG9ycycsICdHRVQnLCB7XG4gICAgYXV0aG9yXG59KVxuXG4vKipcbiAqIEdldHMgYSBsaXRzIG9mIGJvb2sgZm9yIGEgc3BlY2lmaWMgYXV0aG9yXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdXRob3IgXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRCb29rc0J5QXV0aG9yID0gYXN5bmMgKGF1dGhvcikgPT4gYXdhaXQganNvbkNhbGwoYC9ib29rL2dldC8ke2VuY29kZVVSSUNvbXBvbmVudChhdXRob3IpfWAsICdHRVQnKSIsIi8qKlxuICogQVBJIEdhdGV3YXlcbiAqIEBtb2R1bGUgZ2F0ZXdheVxuICogQGF1dGhvciBFbWFudWVsZSBDb2xvbm5lbGxpIDxlbWFudWVsZUBwcm9qYXZhc2NyaXB0Lml0PlxuICovXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xuXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKVxuXG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBjb25zdCBBUElfVVJMID0gYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9JHtwcm9jZXNzLmVudi5BUElfUEFUSH1gXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEhlbHBlciBmdW5jdGlvbiB0byBmZXRjaCBDU1JGIHRva2VuIGJlZm9yZSB0byByZW5kZXIgdGhlIGJ1bmRsZWQgYXBwXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBcbiAqL1xuZXhwb3J0IGNvbnN0IHByZWZldGNoID0gKGNiKSA9PiB7XG4gICAgaWYgKCFjb29raWVzLmdldCgnY3NyZlRva2VuJykpIHtcbiAgICAgICAgZmV0Y2goYCR7QVBJX1VSTH0vY3NyZmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIH0pLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgIHJlc3AuanNvbigpLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb29raWVzLnNldCgnY3NyZlRva2VuJywganNvbi5jc3JmVG9rZW4sIHsgcGF0aDogJy8nIH0pXG4gICAgICAgICAgICAgICAgY2IoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9IGVsc2UgY2IoKVxufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwZXJmb3JtIGF1dGhlbnRpY2F0ZWQgQVBJIGNhbGwuIE1hbmFnZXMgY3NyZiB0b2tlbiBhbmQgYXV0aCBoZWFkZXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBhbnkgb2YgUE9TVHxQVVR8REVMRVRFfEdFVHxQQVRDSFxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgYW55IHBheWxvYWQgb2JqZWN0LCB3aWxsIGJlIGNvbnZlcnRlZCB0byBxdWVyeSBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGpzb25DYWxsID0gYXN5bmMgKHVybCwgbWV0aG9kLCBkYXRhKSA9PiB7XG4gICAgbGV0IGNzcmZcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICBjYXNlICdQT1NUJzpcbiAgICAgICAgY2FzZSAnREVMRVRFJzpcbiAgICAgICAgY2FzZSAnUFVUJzpcbiAgICAgICAgICAgIGNzcmYgPSBjb29raWVzLmdldCgnY3NyZlRva2VuJylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjc3JmID0gbnVsbFxuICAgICAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBjb25zdCByYXcgPSBhd2FpdCBmZXRjaCh1cmwuc3RhcnRzV2l0aCgnaHR0cCcpID8gdXJsIDogYCR7QVBJX1VSTH0ke3VybH1gLCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAuLi4oY3NyZiA/IHsgJ2NzcmYtdG9rZW4nOiBjc3JmIH0gOiB7fSksXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIC4uLihkYXRhID8geyBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSB9IDoge30pLFxuICAgIH0pXG5cbiAgICBjb25zdCByZXNwID0gYXdhaXQgcmF3Lmpzb24oKVxuICAgIGlmIChyYXcuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgY29kZTogNDAxLFxuICAgICAgICAgICAgZXJyb3I6IHJlc3AsXG4gICAgICAgIH1cbiAgICB9IGVsc2UgcmV0dXJuIHJlc3Bcbn1cbiIsImltcG9ydCBhY3Rpb25LZXlzIGZyb20gJy4va2V5cydcblxuY29uc3Qga2V5cyA9IGFjdGlvbktleXMoKVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIFxuICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFxuICovXG5leHBvcnQgY29uc3QgbG9naW4gPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiAoe1xuICAgIHR5cGU6IGtleXMuQVVUSF9MT0dJTixcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZFxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiAoe1xuICAgIHR5cGU6IGtleXMuQVVUSF9MT0dPVVRcbn0pIiwiaW1wb3J0IGFjdGlvbktleXMgZnJvbSAnLi9rZXlzJ1xuXG5jb25zdCBrZXlzID0gYWN0aW9uS2V5cygpXG4vKiogXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBCb29rXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY29kZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHRpdGxlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYXV0aG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0gcHJpY2VcbiAqL1xuXG5leHBvcnQgY29uc3QgbGlzdEJvb2tzID0gKCkgPT4gKHtcbiAgICB0eXBlOiBrZXlzLkxJU1RfQk9PS1MsXG59KVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGZpbHRlclxuICovXG5leHBvcnQgY29uc3Qgc2VhcmNoQm9va3MgPSAoZmlsdGVyKSA9PiAoe1xuICAgIHR5cGU6IGtleXMuU0VBUkNIX0JPT0ssXG4gICAgcGF5bG9hZDoge1xuICAgICAgICBmaWx0ZXJcbiAgICB9XG59KVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRCb29rID0gKGlkLCBjb2RlKSA9PiAoe1xuICAgIHR5cGU6IGtleXMuR0VUX0JPT0ssXG4gICAgcGF5bG9hZDoge1xuICAgICAgICBpZCxcbiAgICAgICAgY29kZVxuICAgIH1cbn0pXG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gKiBAcGFyYW0ge251bWJlcn0gcXVhbnRpdHlcbiAqL1xuZXhwb3J0IGNvbnN0IHNlbGxCb29rID0gKGlkLCBxdWFudGl0eSkgPT4gKHtcbiAgICB0eXBlOiBrZXlzLlNFTExfQk9PSyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIGlkLFxuICAgICAgICBxdWFudGl0eVxuICAgIH1cbn0pXG5cbi8qKlxuICogQHBhcmFtIHtCb29rfSBib29rXG4gKiBAcGFyYW0ge251bWJlcn0gcXVhbnRpdHlcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZEJvb2sgPSAoYm9vaykgPT4gKHtcbiAgICB0eXBlOiBrZXlzLkFERF9CT09LLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgLi4uYm9vayxcbiAgICAgICAgcXVhbnRpdHksXG4gICAgfVxufSlcblxuLyoqXG4gKiBAcGFyYW0ge0Jvb2t9IGJvb2tcbiAqIEBwYXJhbSB7bnVtYmVyfSBxdWFudGl0eVxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlQm9vayA9IChib29rKSA9PiAoe1xuICAgIHR5cGU6IGtleXMuVVBEQVRFX0JPT0ssXG4gICAgcGF5bG9hZDoge1xuICAgICAgICAuLi5ib29rLFxuICAgICAgICBxdWFudGl0eSxcbiAgICB9XG59KVxuXG4vKipcbiAqIEBwYXJhbSB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRJbmNvbWUgPSAoKSA9PiAoe1xuICAgIHR5cGU6IGtleXMuR0VUX0lOQ09NRSxcbn0pXG5cbmV4cG9ydCBjb25zdCBnZXRCb29rQnlUaXRsZSA9ICh0aXRsZSkgPT4gKHtcbiAgICB0eXBlOiBrZXlzLkdFVF9CT09LX0JZX1RJVExFLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgdGl0bGUsXG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IGdldEJvb2tCeUNvZGUgPSAoY29kZSkgPT4gKHtcbiAgICB0eXBlOiBrZXlzLkdFVF9CT09LX0JZX0NPREUsXG4gICAgcGF5bG9hZDoge1xuICAgICAgICBjb2RlLFxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCBnZXRCb29rc0J5QXV0aG9yID0gKGF1dGhvcikgKHtcbiAgICB0eXBlOiBrZXlzLkdFVF9CT09LU19CWV9BVVRIT1IsXG4gICAgcGF5bG9hZDoge1xuICAgICAgICBhdXRob3IsXG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IGdldEF1dGhvcnMgPSAoYXV0aG9yKSA9PiAoe1xuICAgIHR5cGU6IGtleXMuR0VUX0FVVEhPUlMsXG4gICAgcGF5bG9hZDoge1xuICAgICAgICBhdXRob3IsXG4gICAgfVxufSkiLCIndXNlIHN0cmljdCdcblxuY29uc3Qga2V5cyA9IHt9XG5jb25zdCBsYWJlbHMgPSBbXG4gICAgJ0FVVEhfTE9HSU4nLCdBVVRIX0xPR0lOX1NVQ0NFU1MnLCdBVVRIX0xPR0lOX0ZBSUxVUkUnLFxuICAgICdBVVRIX0xPR09VVCcsJ0FVVEhfTE9HT1VUX1NVQ0NFU1MnLCdBVVRIX0xPR09VVF9GQUlMVVJFJyxcbiAgICAnTElTVF9CT09LUycsICdMSVNUX0JPT0tfU1VDQ0VTUycsICdMSVNUX0JPT0tfRkFJTFVSRScsXG4gICAgJ1NFQVJDSF9CT09LJywgJ1NFQVJDSF9CT09LX1NVQ0NFU1MnLCAnU0VBUkNIX0JPT0tfRkFJTFVSRScsXG4gICAgJ0dFVF9CT09LJywgJ0dFVF9CT09LX1NVQ0NFU1MnLCAnR0VUX0JPT0tfRkFJTFVSRScsXG4gICAgJ1NFTExfQk9PSycsICdTRUxMX0JPT0tfU1VDQ0VTUycsICdTRUxMX0JPT0tfRkFJTFVSRScsXG4gICAgJ0FERF9CT09LJywgJ0FERF9CT09LX1NVQ0NFU1MnLCAnQUREX0JPT0tfRkFJTFVSRScsXG4gICAgJ1VQREFURV9CT09LJywgJ1VQREFURV9CT09LX1NVQ0NFU1MnLCAnVVBEQVRFX0JPT0tfRkFJTFVSRScsXG4gICAgJ0dFVF9JTkNPTUUnLCAnR0VUX0lOQ09NRV9TVUNDRVNTJywgJ0dFVF9JTkNPTUVfRkFJTFVSRScsXG4gICAgJ0dFVF9CT09LX0JZX1RJVExFJywnR0VUX0JPT0tfQllfVElUTEVfU1VDQ0VTUycsICdHRVRfQk9PS19CWV9USVRMRV9GQUlMVVJFJyxcbiAgICAnR0VUX0JPT0tfQllfQ09ERScsJ0dFVF9CT09LX0JZX0NPREVfU1VDQ0VTUycsJ0dFVF9CT09LX0JZX0NPREVfRkFJTFVSRScsXG4gICAgJ0dFVF9CT09LU19CWV9BVVRIT1InLCdHRVRfQk9PS1NfQllfQVVUSE9SX1NVQ0NFU1MnLCdHRVRfQk9PS1NfQllfQVVUSE9SX0ZBSUxVUkUnLFxuICAgICdHRVRfQVVUSE9SUycsJ0dFVF9BVVRIT1JTX1NVQ0NFU1MnLCdHRVRfQVVUSE9SU19GQUlMVVJFJyxcbl1cbmNvbnN0IHByb3BlcnR5TW9kZWwgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGtleXMsIHtcbiAgICAuLi5sYWJlbHNcbiAgICAgICAgLm1hcChsYWJlbCA9PiAoe1tsYWJlbF06ey4uLnByb3BlcnR5TW9kZWwsIHZhbHVlOiBsYWJlbH19KSlcbiAgICAgICAgLnJlZHVjZSgocHJldiwgY3VyciwpID0+ICh7Li4ucHJldiwgLi4uY3Vycn0pLCB7fSlcbn0pXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQWN0aW9uS2V5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVVUSF9MT0dJTlxuICogQHByb3BlcnR5IHtzdHJpbmd9IEFVVEhfTE9HSU5fU1VDQ0VTU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEFVVEhfTE9HSU5fRkFJTFVSRVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEFVVEhfTE9HT1VUXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVVUSF9MT0dPVVRfU1VDQ0VTU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEFVVEhfTE9HT1VUX0ZBSUxVUkVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBMSVNUX0JPT0tTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTElTVF9CT09LU19TVUNDRVNTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gTElTVF9CT09LU19GQUlMVVJFXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU0VBUkNIX0JPT0tcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTRUFSQ0hfQk9PS19TVUNDRVNTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU0VBUkNIX0JPT0tfRkFJTFVSRVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEdFVF9CT09LXG4gKiBAcHJvcGVydHkge3N0cmluZ30gR0VUX0JPT0tfU1VDQ0VTU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEdFVF9CT09LX0ZBSUxVUkVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfcKgU0VMTF9CT09LXG4gKiBAcHJvcGVydHkge3N0cmluZ33CoFNFTExfQk9PS19TVUNDRVNTXG4gKiBAcHJvcGVydHkge3N0cmluZ33CoFNFTExfQk9PS19GQUlMVVJFXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQUREX0JPT0tcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBRERfQk9PS19TVUNDRVNTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQUREX0JPT0tfRkFJTFVSRVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFVQREFURV9CT09LXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVVBEQVRFX0JPT0tfU1VDQ0VTU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFVQREFURV9CT09LX0ZBSUxVUkVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBHRVRfSU5DT01FXG4gKiBAcHJvcGVydHkge3N0cmluZ30gR0VUX0lOQ09NRV9TVUNDRVNTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gR0VUX0lOQ09NRV9GQUlMVVJFXG4gKiBcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBHRVRfQk9PS19CWV9USVRMRVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEdFVF9CT09LX0JZX1RJVExFX1NVQ0NFU1NcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBHRVRfQk9PS19CWV9USVRMRV9GQUlMVVJFXG4gKiBcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBHRVRfQk9PS19CWV9DT0RFXG4gKiBAcHJvcGVydHkge3N0cmluZ30gR0VUX0JPT0tfQllfQ09ERV9TVUNDRVNTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gR0VUX0JPT0tfQllfQ09ERV9GQUlMVVJFXG4gKiBcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBHRVRfQk9PS1NfQllfQVVUSE9SXG4gKiBAcHJvcGVydHkge3N0cmluZ30gR0VUX0JPT0tTX0JZX0FVVEhPUl9TVUNDRVNTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gR0VUX0JPT0tTX0JZX0FVVEhPUl9GQUlMVVJFXG4gKiBcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBHRVRfQVVUSE9SU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEdFVF9BVVRIT1JTX1NVQ0NFU1NcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBHRVRfQVVUSE9SU19GQUlMVVJFXG4gKiBcbiAqIFxuICogXG4gKiBAcmV0dXJuIHtBY3Rpb25LZXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgpID0+IGtleXMiLCJpbXBvcnQgYWN0aW9uS2V5cyBmcm9tICcuLi9hY3Rpb25zL2tleXMnXG5cbmNvbnN0IGtleXMgPSBhY3Rpb25LZXlzKClcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgYXV0aGVudGljYXRlZFVzZXI6IG51bGwsXG4gICAgZXJyb3I6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGtleXMuQVVUSF9MT0dJTl9TVUNDRVNTOlxuICAgICAgICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgICAgICAgICAgc3RhdGUuYXV0aGVudGljYXRlZFVzZXIgPSBhY3Rpb24ucGF5bG9hZC5kYXRhXG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGxcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2Uga2V5cy5BVVRIX0xPR0lOX0ZBSUxVUkU6XG4gICAgICAgICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgc3RhdGUuYXV0aGVudGljYXRlZFVzZXIgPSBudWxsXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQ/LnN1Y2Nlc3MgPT09IGZhbHNlICYmIGFjdGlvbi5wYXlsb2FkPy5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZC5tZXNzYWdlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uPy5wYXlsb2FkPy5lcnJvcj8ubWVzc2FnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBrZXlzLkFVVEhfTE9HT1VUOlxuICAgICAgICAgICAgc3RhdGUgPSB7IC4uLmluaXRpYWxTdGF0ZSB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIGtleXMuQVVUSF9MT0dPVVRfU1VDQ0VTUzpcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N0YXRlJyksIDEwMDApXG4gICAgICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiB7IC4uLnN0YXRlIH1cbn1cbiIsImltcG9ydCBhY3Rpb25LZXlzIGZyb20gJy4uL2FjdGlvbnMva2V5cydcblxuY29uc3Qga2V5cyA9IGFjdGlvbktleXMoKVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgYm9va3M6IFtdLFxuICAgIGZpbHRlcjogJycsXG4gICAgYXV0aG9yOiAnJyxcbiAgICBhdXRob3JzOiAnJyxcbiAgICBpbmNvbWU6IDAsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgbWVzc2FnZTogbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2Uga2V5cy5HRVRfQVVUSE9SOlxuICAgICAgICAgICAgc3RhdGUuYXV0aG9yID0gYWN0aW9uLnBheWxvYWQ/LmF1dGhvciA/PyAnJ1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5cy5HRVRfQVVUSE9SU19TVUNDRVNTOlxuICAgICAgICAgICAgc3RhdGUuYXV0aG9ycyA9IGFjdGlvbi5wYXlsb2FkPy5kYXRhID8/IFtdXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIGtleXMuU0VBUkNIX0JPT0s6XG4gICAgICAgICAgICBzdGF0ZS5maWx0ZXIgPSBhY3Rpb24ucGF5bG9hZD8uZmlsdGVyXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIGtleXMuTElTVF9CT09LU19TVUNDRVNTOlxuICAgICAgICBjYXNlIGtleXMuU0VBUkNIX0JPT0tfU1VDQ0VTUzpcbiAgICAgICAgY2FzZSBrZXlzLkdFVF9CT09LU19CWV9BVVRIT1JfU1VDQ0VTUzpcbiAgICAgICAgICAgIHN0YXRlLmJvb2tzID0gYWN0aW9uLnBheWxvYWQ/LmRhdGFcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2Uga2V5cy5VUERBVEVfQk9PS19TVUNDRVNTOlxuICAgICAgICBjYXNlIGtleXMuQUREX0JPT0tfU1VDQ0VTUzpcbiAgICAgICAgICAgIHN0YXRlLm1lc3NhZ2UgPSBhY3Rpb25zLnBheWxvYWQ/Lm1lc3NhZ2UgPz8gJ0xpYnJvIHNhbHZhdG8gY29uIHN1Y2Nlc3NvJ1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5cy5TRUxMX0JPT0tfU1VDQ0VTUzpcbiAgICAgICAgICAgIHN0YXRlLm1lc3NhZ2UgPSBhY3Rpb25zLnBheWxvYWQ/Lm1lc3NhZ2UgPz8gJ0xpYnJvIHZlbmR1dG8hJ1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBrZXlzLkdFVF9BVVRIT1JTX0ZBSUxVUkU6XG4gICAgICAgIGNhc2Uga2V5cy5HRVRfSU5DT01FX0ZBSUxVUkU6XG4gICAgICAgIGNhc2Uga2V5cy5MSVNUX0JPT0tTX0ZBSUxVUkU6XG4gICAgICAgIGNhc2Uga2V5cy5TRUFSQ0hfQk9PS19GQUlMVVJFOlxuICAgICAgICBjYXNlIGtleXMuU0VMTF9CT09LX0ZBSUxVUkU6XG4gICAgICAgIGNhc2Uga2V5cy5BRERfQk9PS19GQUlMVVJFOlxuICAgICAgICBjYXNlIGtleXMuVVBEQVRFX0JPT0tfRkFJTFVSRTpcbiAgICAgICAgY2FzZSBrZXlzLkdFVF9CT09LU19CWV9BVVRIT1JfRkFJTFVSRTpcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ/LnJlYXNvblxuICAgICAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4geyAuLi5zdGF0ZSB9XG59IiwiaW1wb3J0IHsgYWxsLCB0YWtlRXZlcnksIGNhbGwsIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCB7IGxvZ2luLCBsb2dvdXQgfSBmcm9tICcuLi8uLi9hcGkvYXV0aC5hcGknXG5pbXBvcnQgeyBcbiAgICBsaXN0Qm9va3MsIFxuICAgIHNlYXJjaEJvb2tzLFxuICAgIGdldEF1dGhvcnMsXG4gICAgZ2V0Qm9va0J5VGl0bGUsXG4gICAgZ2V0Qm9va3NCeUF1dGhvcixcbiAgICBnZXRCb29rQnlDb2RlLFxuICAgIGFkZEJvb2ssIFxuICAgIHVwZGF0ZUJvb2ssIFxuICAgIHNlbGxCb29rLCBcbiAgICBnZXRJbmNvbWUgXG59IGZyb20gJy4uLy4uL2FwaS9ib29rc3RvcmUuYXBpJ1xuaW1wb3J0IGFjdGlvbktleXMgZnJvbSAnLi4vYWN0aW9ucy9rZXlzJ1xuXG5jb25zdCBhY3Rpb25zID0gYWN0aW9uS2V5cygpXG5cbmZ1bmN0aW9uKiBsb2dpbkNhbGwoYWN0aW9uKSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIGNhbGwobG9naW4sIHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICAgICAgaWYgKHJlc3Auc3VjY2Vzcykge1xuICAgICAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogYWN0aW9ucy5BVVRIX0xPR0lOX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3AgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IGFjdGlvbnMuQVVUSF9MT0dJTl9GQUlMVVJFLCBwYXlsb2FkOiByZXNwIH0pXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogYWN0aW9ucy5BVVRIX0xPR0lOX0ZBSUxVUkUsIHBheWxvYWQ6IGVyciB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24qIGxvZ291dENhbGwoKSB7XG4gICAgY29uc3QgcmVzcCA9IHlpZWxkIGNhbGwobG9nb3V0KVxuICAgIHlpZWxkIHB1dCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuQVVUSF9MT0dPVVRfU1VDQ0VTUyxcbiAgICAgICAgcGF5bG9hZDogcmVzcCxcbiAgICB9KVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBdXRoKCkge1xuICAgIHlpZWxkIHRha2VFdmVyeShbYWN0aW9ucy5BVVRIX0xPR0lOLCBhY3Rpb25zLkFVVEhfTE9HT1VUXSwgZnVuY3Rpb24qIChcbiAgICAgICAgYWN0aW9uXG4gICAgKSB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9ucy5BVVRIX0xPR0lOOlxuICAgICAgICAgICAgICAgIHlpZWxkIGxvZ2luQ2FsbChhY3Rpb24pXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9ucy5BVVRIX0xPR09VVDpcbiAgICAgICAgICAgICAgICB5aWVsZCBsb2dvdXRDYWxsKClcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24qIGxpc3RCb29rc0NhbGwoYWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIGNhbGwobGlzdEJvb2tzKVxuICAgICAgICBpZihyZXNwLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IGFjdGlvbnMuTElTVF9CT09LU19TVUNDRVNTLCBwYXlsb2FkOiByZXNwIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBhY3Rpb25zLkxJU1RfQk9PS1NfRkFJTFVSRSwgcGF5bG9hZDogcmVzcH0pXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBhY3Rpb25zLkxJU1RfQk9PS1NfRkFJTFVSRSwgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICByZWFzb246IGVycm9yXG4gICAgICAgIH19KVxuICAgIH1cbn1cblxuZnVuY3Rpb24qIHNlYXJjaEJvb2tzQ2FsbChhY3Rpb24pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGZpbHRlciB9ID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIGNhbGwoc2VhcmNoQm9va3MsIGZpbHRlcilcbiAgICAgICAgaWYocmVzcC5zdWNjZXNzKSB7XG4gICAgICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBhY3Rpb25zLlNFQVJDSF9CT09LX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3AgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IGFjdGlvbnMuU0VBUkNIX0JPT0tfRkFJTFVSRSwgcGF5bG9hZDogcmVzcCB9KVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogYWN0aW9ucy5TRUFSQ0hfQk9PS1NfRkFJTFVSRSwgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICByZWFzb246IGVycm9yXG4gICAgICAgIH19KVxuICAgIH1cbn1cblxuZnVuY3Rpb24qIGdldEJvb2tzQnlBdXRob3JDYWxsKGFjdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgYXV0aG9yIH0gPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBjb25zdCByZXNwID0geWllbGQgY2FsbChnZXRCb29rc0J5QXV0aG9yLCBhdXRob3IpXG4gICAgICAgIGlmKHJlc3Auc3VjY2Vzcykge1xuICAgICAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogYWN0aW9ucy5HRVRfQk9PS1NfQllfQVVUSE9SX1NVQ0NFU1MsIHBheWxvYWQ6IHJlc3AgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IGFjdGlvbnMuR0VUX0JPT0tTX0JZX0FVVEhPUl9GQUlMVVJFLCBwYXlsb2FkOiByZXNwIH0pXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBhY3Rpb25zLkdFVF9CT09LU19CWV9BVVRIT1JfRkFJTFVSRSwgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICByZWFzb246IGVycm9yXG4gICAgICAgIH19KVxuICAgIH1cbn1cblxuZnVuY3Rpb24qIGdldEF1dGhvcnNDYWxsKGFjdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgYXV0aG9yIH0gPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBjb25zdCByZXNwID0geWllbGQgY2FsbChnZXRBdXRob3JzLCBhdXRob3IpXG4gICAgICAgIGlmKHJlc3Auc3VjY2Vzcykge1xuICAgICAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogYWN0aW9ucy5HRVRfQVVUSE9SU19TVUNDRVNTLCBwYXlsb2FkOiByZXNwIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBhY3Rpb25zLkdFVF9BVVRIT1JTX0ZBSUxVUkUsIHBheWxvYWQ6IHJlc3AgfSlcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IGFjdGlvbnMuR0VUX0FVVEhPUlNfRkFJTFVSRSwgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICByZWFzb246IGVycm9yXG4gICAgICAgIH19KVxuICAgIH1cbn1cblxuZnVuY3Rpb24qIGdldEJvb2tDYWxsKGFjdGlvbikge1xuICAgIHRyeSB7XG5cbiAgICAgICAgY29uc3QgeyBpZCwgY29kZSB9ID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIGNhbGwoY29kZSA/IGdldEJvb2tCeUNvZGUgOiBnZXRCb29rQnlDb2RlLCBjb2RlID8/IGlkKVxuICAgICAgICBpZihyZXNwLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IGFjdGlvbnMuR0VUX0JPT0tfU1VDQ0VTUywgcGF5bG9hZDogcmVzcCB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogYWN0aW9ucy5HRVRfQk9PS19GQUlMVVJFLCBwYXlsb2FkOiByZXNwIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogYWN0aW9ucy5HRVRfQk9PS19GQUlMVVJFLCBwYXlsb2FkOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIHJlYXNvbjogZXJyb3IsXG4gICAgICAgIH19KVxuICAgIH1cbn1cblxuZnVuY3Rpb24qIGdldEluY29tZUNhbGwoYWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIGNhbGwoZ2V0SW5jb21lKVxuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiByZXNwLnN1Y2Nlc3MgPyBhY3Rpb25zLkdFVF9JTkNPTUVfU1VDQ0VTUyA6IGFjdGlvbnMuR0VUX0lOQ09NRV9GQUlMVVJFLCBwYXlsb2FkOiByZXNwIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogYWN0aW9ucy5HRVRfSU5DT01FX0ZBSUxVUkUsIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgcmVhc29uOiBlcnJvcixcbiAgICAgICAgfX0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiogYWRkQm9va0NhbGwoYWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBib29rLCBxdWFudGl0eSB9ID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIGNhbGwoYWRkQm9vaywgYm9vaywgcXVhbnRpdHkpXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IHJlc3Auc3VjY2VzcyA/IGFjdGlvbnMuQUREX0JPT0tfU1VDQ0VTUyA6IGFjdGlvbnMuQUREX0JPT0tfRkFJTFVSRSwgcGF5bG9hZDogcmVzcCB9KSAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBhY3Rpb25zLkFERF9CT09LX0ZBSUxVUkUsIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgcmVhc29uOiBlcnJvcixcbiAgICAgICAgfX0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiogdXBkYXRlQm9va0NhbGwoYWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBib29rLCBxdWFudGl0eSB9ID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIGNhbGwodXBkYXRlQm9vaywgYm9vaywgcXVhbnRpdHkpXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IHJlc3Auc3VjY2VzcyA/IGFjdGlvbnMuVVBEQVRFX0JPT0tfU1VDQ0VTUyA6IGFjdGlvbnMuVVBEQVRFX0JPT0tfRkFJTFVSRSwgcGF5bG9hZDogcmVzcCB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IGFjdGlvbnMuVVBEQVRFX0JPT0tfRkFJTFVSRSwgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICByZWFzb246IGVycm9yLFxuICAgICAgICB9fSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBzZWxsQm9va0NhbGwoYWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBjb2RlLCBpZCwgcXVhbnRpdHkgfSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCBjYWxsKHNlbGxCb29rLCBjb2RlLCBpZCwgcXVhbnRpdHkpXG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IHJlc3Auc3VjY2VzcyA/IGFjdGlvbnMuU0VMTF9CT09LX1NVQ0NFU1MgOiBhY3Rpb25zLlNFTExfQk9PS19GQUlMVVJFLCBwYXlsb2FkOiByZXNwIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogYWN0aW9ucy5TRUxMX0JPT0tfRkFJTFVSRSwgcGF5bG9hZDoge1xuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICByZWFzb246IGVycm9yLFxuICAgICAgICB9fSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEJvb2tTdG9yZSgpIHtcbiAgICB5aWVsZCB0YWtlRXZlcnkoW1xuICAgICAgICBhY3Rpb25zLkxJU1RfQk9PS1MsXG4gICAgICAgIGFjdGlvbnMuU0VBUkNIX0JPT0ssXG4gICAgICAgIGFjdGlvbnMuR0VUX0JPT0ssXG4gICAgICAgIGFjdGlvbnMuR0VUX0lOQ09NRSxcbiAgICAgICAgYWN0aW9ucy5BRERfQk9PSyxcbiAgICAgICAgYWN0aW9ucy5VUERBVEVfQk9PSyxcbiAgICAgICAgYWN0aW9ucy5TRUxMX0JPT0ssXG4gICAgXSwgZnVuY3Rpb24qIChhY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIGFjdGlvbnMuTElTVF9CT09LUzpcbiAgICAgICAgICAgICAgICB5aWVsZCBsaXN0Qm9va3NDYWxsKGFjdGlvbilcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBhY3Rpb25zLlNFQVJDSF9CT09LOlxuICAgICAgICAgICAgICAgIHlpZWxkIHNlYXJjaEJvb2tzQ2FsbChhY3Rpb24pXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9ucy5HRVRfQk9PSzpcbiAgICAgICAgICAgICAgICB5aWVsZCBnZXRCb29rQ2FsbChhY3Rpb24pXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgYWN0aW9ucy5HRVRfSU5DT01FOlxuICAgICAgICAgICAgICAgIHlpZWxkIGdldEluY29tZUNhbGwoYWN0aW9uKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIGFjdGlvbnMuQUREX0JPT0s6XG4gICAgICAgICAgICAgICAgeWllbGQgYWRkQm9va0NhbGwoYWN0aW9uKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIGFjdGlvbnMuVVBEQVRFX0JPT0s6XG4gICAgICAgICAgICAgICAgeWllbGQgdXBkYXRlQm9va0NhbGwoYWN0aW9uKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIGFjdGlvbnMuU0VMTF9CT09LOlxuICAgICAgICAgICAgICAgIHlpZWxkIHNlbGxCb29rQ2FsbChhY3Rpb24pXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW3dhdGNoQXV0aCgpLCB3YXRjaEJvb2tTdG9yZSgpXSlcbn1cbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvYXV0aC5yZWR1Y2VyJ1xuaW1wb3J0IGJvb2tTdG9yZVJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9ib29rc3RvcmUucmVkdWNlcidcbmltcG9ydCByb290U2FnYSBmcm9tICcuL3NhZ2FzJ1xuaW1wb3J0IHsgbG9hZFN0YXRlLCBzYXZlU3RhdGUgfSBmcm9tICcuLi91dGlscy9sb2NhbC1zdG9yYWdlLWhlbHBlcidcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgICBhdXRoOiBhdXRoUmVkdWNlcixcbiAgICAgICAgYm9va3N0b3JlOiBib29rU3RvcmVSZWR1Y2VyLFxuICAgIH0pLFxuICAgIGxvYWRTdGF0ZSgpLFxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSlcbilcblxuLy8gc2F2ZSBmdWxsIGFwcCdzIHN0b3JlIHRvIGxvY2FsU3RvcmFnZSB0byBrZWVwIHN0YXRlIGFmdGVyIHJlbG9hZGluZ1xuc3RvcmUuc3Vic2NyaWJlKFxuICAgIHRocm90dGxlKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpXG4gICAgICAgIHNhdmVTdGF0ZShzdGF0ZSlcbiAgICB9LCAxMDAwKVxuKVxuXG5zYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlXG4iLCJleHBvcnQgY29uc3Qgc2F2ZVN0YXRlID0gKHN0YXRlKSA9PiB7XG4gICAgY29uc3Qgc2VyaWFsaXplZFN0YXRlID0gSlNPTi5zdHJpbmdpZnkoc3RhdGUpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRlJywgc2VyaWFsaXplZFN0YXRlKVxufVxuZXhwb3J0IGNvbnN0IGxvYWRTdGF0ZSA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkU3RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhdGUnKVxuICAgICAgICBpZihzZXJpYWxpemVkU3RhdGUpIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWRTdGF0ZSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbn0gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyB0aGUgc3RhcnR1cCBmdW5jdGlvblxuLy8gSXQncyBlbXB0eSBhcyBzb21lIHJ1bnRpbWUgbW9kdWxlIGhhbmRsZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Jcbl9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge31cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6ICgpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYmFiZWxfcnVudGltZV9oZWxwZXJzX2FzeW5jVG9HZW5lcmF0b3JfanMtbm9kZV9tb2R1bGVzX2JhYmVsX3J1bnRpbWVfaGVsLTlkMzM4NlwiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9IHggPT4ge307XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lLCBleGVjdXRlTW9kdWxlc10gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtkZW1vX2Jvb2tzdG9yZV9mcm9udGVuZFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtkZW1vX2Jvb2tzdG9yZV9mcm9udGVuZFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7XG5cbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG52YXIgc3RhcnR1cCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gc3RhcnR1cCB8fCAoeCA9PiB7fSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59OyIsIi8vIHJ1biBzdGFydHVwXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9