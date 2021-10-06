"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
require("dotenv").config();
var tasks_routes_1 = __importDefault(require("./routes/tasks.routes"));
var app = (0, express_1.default)();
app.set("port", process.env.PORT || 3000);
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(tasks_routes_1.default);
exports.default = app;
