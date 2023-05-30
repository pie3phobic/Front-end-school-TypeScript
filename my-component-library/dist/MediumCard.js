"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = exports.MediumCard = exports.InfoCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _outline = require("@heroicons/react/outline");
var _solid = require("@heroicons/react/solid");
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MediumCard = function MediumCard(_ref) {
  var src = _ref.src,
    alt = _ref.alt,
    text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-gray-200/80 p-8 pb-14 rounded-3xl hover:scale-105 transform transition duration-200 ease-out flex flex-col justify-center align-middle dark:bg-gray-950"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: src,
    alt: alt,
    className: "rounded-3xl sm:w-[300px] md:w-[300px]"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-semibold text-lg pt-4 dark:text-white"
  }, text));
};
exports.MediumCard = MediumCard;
var InfoCard = function InfoCard(_ref2) {
  var _ref3;
  var description = _ref2.description,
    id = _ref2.id,
    lessonsCount = _ref2.lessonsCount,
    meta = _ref2.meta,
    previewImageLink = _ref2.previewImageLink,
    rating = _ref2.rating,
    title = _ref2.title,
    path = _ref2.path;
  return /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: {
      pathname: path,
      query: {
        id: id
      }
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col lg:flex-row py-4 lg:py-7 px-4 gap-10 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t last:border-t-0 dark:bg-blue-950 dark:border-gray-800 dark:hover:opacity-95"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative w-[380px] h-[190px] lg:w-[380px] lg:h-[220px] md:w-full md:h-[300px] flex-shrink-0 self-center"
  }, /*#__PURE__*/_react["default"].createElement(_image["default"], {
    src: "".concat(previewImageLink, "/cover.webp"),
    alt: "Course preview image",
    layout: "fill",
    objectFit: "cover",
    className: "rounded-2xl"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col flex-grow pl-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xl font-semibold dark:text-white"
  }, title), /*#__PURE__*/_react["default"].createElement(_outline.HeartIcon, {
    "data-testid": "heart-icon",
    className: "h-7 cursor-pointer dark:text-white"
  })), /*#__PURE__*/_react["default"].createElement("h4", {
    className: "text-black/60 font-semibold dark:text-white"
  }, description), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-b w-10 pt-2"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "pt-2 text-sm text-red-400 dark:text-purple-accent"
  }, "Number of lessons: ", lessonsCount), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-grow"
  }, (_ref3 = [meta.skills]) === null || _ref3 === void 0 ? void 0 : _ref3.map(function (item) {
    return item === null || item === void 0 ? void 0 : item.map(function (value, index) {
      return /*#__PURE__*/_react["default"].createElement("p", {
        key: "skill-".concat(index),
        className: "text-black/70 dark:text-white",
        "data-testid": "skill"
      }, value);
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-end pt-5"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "flex items-center dark:text-white"
  }, /*#__PURE__*/_react["default"].createElement(_solid.StarIcon, {
    "data-testid": "star-icon",
    className: "h-5 text-red-400 dark:text-purple-accent"
  }), rating)))));
};
exports.InfoCard = InfoCard;
var Pagination = function Pagination(_ref4) {
  var items = _ref4.items,
    pageSize = _ref4.pageSize,
    currentPage = _ref4.currentPage,
    onPageChange = _ref4.onPageChange;
  var pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;
  var pages = Array.from({
    length: pagesCount
  }, function (_, i) {
    return i + 1;
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "pagination",
    className: "dark:bg-blue-950"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "flex justify-center align-middle list-none"
  }, pages.map(function (page) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: page,
      className: page === currentPage ? "flex justify-center items-center w-[33px] h-[33px] border border-opacity-80 rounded-xl cursor-pointer bg-red-400 dark:bg-purple-accent dark:border-gray-800 dark:text-white" : "flex justify-center cursor-pointer items-center w-[33px] h-[33px] border border-opacity-80 rounded-xl dark:text-white dark:border-gray-800"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      onClick: function onClick() {
        return onPageChange(page);
      }
    }, page));
  })));
};
exports.Pagination = Pagination;