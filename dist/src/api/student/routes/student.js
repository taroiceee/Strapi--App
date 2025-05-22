"use strict";
// /**
//  * student router
//  */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { factories } from '@strapi/strapi';
// export default factories.createCoreRouter('api::student.student');
// ----------------------以上为原生代码-------------------------------
const custom_student_1 = __importDefault(require("./custom-student"));
exports.default = custom_student_1.default;
