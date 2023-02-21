"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.get('/haha', (req, res, next) => {
    fs_1.default.promises.readFile('one.txt')
        .then(data => res.send(data))
        .catch(err => next(err));
});
app.use((err, req, res, next) => {
    console.log('Error 1111: ', err.type);
    if (err.type == 'time-out')
        res.status(408).send(err);
    else
        res.status(500).send(err);
});
app.listen(3000, () => {
    console.log(' ok http://lolcalhost:3000');
});
//# sourceMappingURL=index.js.map