"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transcationController_1 = require("../controllers/transcationController");
const router = express_1.default.Router();
router.get("/", transcationController_1.listTransactions);
router.post("/", transcationController_1.createTransaction);
router.post("/stripe/payment-intent", transcationController_1.createStripePaymentIntent);
exports.default = router;
