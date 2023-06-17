'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = require('axios');
var axios__default = _interopDefault(axios);
var React = _interopDefault(require('react'));
var reactToastify = require('react-toastify');
require('react-toastify/dist/ReactToastify.css');
var Swal = _interopDefault(require('sweetalert2'));

var catchHandler = function catchHandler(_ref) {
  var cb = _ref.cb,
    reject = _ref.reject,
    err = _ref.err,
    condition = _ref.condition;
  cb && cb({}, err);
  return reject(condition != null && condition.catchError_message ? condition.catchError_message(err) : (err == null ? void 0 : err.message) || 'error');
};

var thenHandler = function thenHandler(_ref) {
  var condition = _ref.condition,
    res = _ref.res,
    cb = _ref.cb,
    resolve = _ref.resolve,
    reject = _ref.reject;
  if (condition && condition != null && condition.data) {
    if (condition != null && condition.data(res)) {
      cb && cb(res, {});
      return resolve(condition != null && condition.message ? condition.message(res) : "success");
    } else {
      cb && cb(res, {});
      return reject(condition != null && condition.faildCondition_message ? condition.faildCondition_message(res) : condition != null && condition.message ? condition.message(res) : 'faield');
    }
  } else {
    cb && cb(res, {});
    return resolve('success');
  }
};

var handleDelete = function handleDelete(_ref) {
  var url = _ref.url,
    alertMessage = _ref.alertMessage,
    cb = _ref.cb,
    condition = _ref.condition,
    config = _ref.config,
    loadingText = _ref.loadingText;
  Swal.fire({
    title: alertMessage ? alertMessage : 'Are you sure you want to delete this item?',
    icon: 'question',
    backdrop: false,
    allowOutsideClick: false,
    showCancelButton: true,
    confirmButtonText: "Yes, I'm sure",
    cancelButtonText: 'No, cancel!',
    confirmButtonColor: '#EE4B2B',
    reverseButtons: true,
    customClass: {
      title: 'mb-4 text-gray-500 dark:text-gray-300 text-base',
      popup: 'p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5',
      confirmButton: 'mx-3 py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900',
      cancelButton: 'mx-3 py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
    },
    buttonsStyling: false
  }).then(function (result) {
    if (result.isConfirmed) {
      var resolveReactToast = new Promise(function (resolve, reject) {
        axios__default["delete"](url, config).then(function (res) {
          return thenHandler({
            reject: reject,
            res: res,
            resolve: resolve,
            cb: cb,
            condition: condition
          });
        })["catch"](function (err) {
          return catchHandler({
            err: err,
            reject: reject,
            cb: cb,
            condition: condition
          });
        });
      });
      reactToastify.toast.promise(resolveReactToast, {
        pending: String(loadingText || "Loading..."),
        success: {
          render: function render(props) {
            return typeof props.data == 'string' ? props.data : JSON.stringify(props.data);
          }
        },
        error: {
          render: function render(props) {
            return typeof props.data == 'string' ? props.data : JSON.stringify(props.data);
          }
        }
      });
    }
  });
};

var handleGet = function handleGet(_ref) {
  var url = _ref.url,
    cb = _ref.cb,
    condition = _ref.condition,
    config = _ref.config,
    loadingText = _ref.loadingText;
  var resolveReactToast = new Promise(function (resolve, reject) {
    axios__default.get(url, config).then(function (res) {
      return thenHandler({
        cb: cb,
        condition: condition,
        reject: reject,
        res: res,
        resolve: resolve
      });
    })["catch"](function (err) {
      return catchHandler({
        err: err,
        reject: reject,
        cb: cb,
        condition: condition
      });
    });
  });
  reactToastify.toast.promise(resolveReactToast, {
    pending: String(loadingText || "Loading..."),
    success: {
      render: function render(props) {
        return typeof props.data == 'string' ? props.data : JSON.stringify(props.data);
      }
    },
    error: {
      render: function render(props) {
        return typeof props.data == 'string' ? props.data : JSON.stringify(props.data);
      }
    }
  });
};

var handlePost = function handlePost(_ref) {
  var data = _ref.data,
    url = _ref.url,
    cb = _ref.cb,
    condition = _ref.condition,
    config = _ref.config,
    loadingText = _ref.loadingText;
  var resolveReactToast = new Promise(function (resolve, reject) {
    axios__default.post(url, data, config).then(function (res) {
      return thenHandler({
        reject: reject,
        res: res,
        resolve: resolve,
        cb: cb,
        condition: condition
      });
    })["catch"](function (err) {
      return catchHandler({
        err: err,
        reject: reject,
        cb: cb,
        condition: condition
      });
    });
  });
  reactToastify.toast.promise(resolveReactToast, {
    pending: String(loadingText || "Loading..."),
    // success: 'success',
    // error: 'error',
    success: {
      render: function render(props) {
        return typeof props.data == 'string' ? props.data : JSON.stringify(props.data);
      }
    },
    error: {
      render: function render(props) {
        return typeof props.data == 'string' ? props.data : JSON.stringify(props.data);
      }
    }
  });
};

var handlePut = function handlePut(_ref) {
  var data = _ref.data,
    url = _ref.url,
    cb = _ref.cb,
    condition = _ref.condition,
    config = _ref.config,
    loadingText = _ref.loadingText;
  var resolveReactToast = new Promise(function (resolve, reject) {
    axios__default.put(url, data, config).then(function (res) {
      return thenHandler({
        reject: reject,
        res: res,
        resolve: resolve,
        cb: cb,
        condition: condition
      });
    })["catch"](function (err) {
      return catchHandler({
        err: err,
        reject: reject,
        cb: cb,
        condition: condition
      });
    });
  });
  reactToastify.toast.promise(resolveReactToast, {
    pending: String(loadingText || "Loading..."),
    success: {
      render: function render(props) {
        return typeof props.data == 'string' ? props.data : JSON.stringify(props.data);
      }
    },
    error: {
      render: function render(props) {
        return typeof props.data == 'string' ? props.data : JSON.stringify(props.data);
      }
    }
  });
};

var QT = {
  get: handleGet,
  post: handlePost,
  put: handlePut,
  "delete": handleDelete
};
var GET = handleGet;
var POST = handlePost;
var PUT = handlePut;
var DELETE = handleDelete;
// --------------------------------------------------------------
var QTProvider = function QTProvider(_ref) {
  var children = _ref.children,
    configs = _ref.configs;
  var _ref2 = configs || {},
    withCredentials = _ref2.withCredentials,
    toastContainerProps = _ref2.toastContainerProps;
  axios__default.defaults.withCredentials = withCredentials ? withCredentials === 'yes' || withCredentials === true : false;
  return React.createElement(React.Fragment, null, React.createElement(reactToastify.ToastContainer, Object.assign({}, toastContainerProps)), children);
};

Object.keys(axios).forEach(function (k) {
    if (k !== 'default') Object.defineProperty(exports, k, {
        enumerable: true,
        get: function () {
            return axios[k];
        }
    });
});
exports.DELETE = DELETE;
exports.GET = GET;
exports.POST = POST;
exports.PUT = PUT;
exports.QT = QT;
exports.QTProvider = QTProvider;
//# sourceMappingURL=query-toast.cjs.development.js.map
