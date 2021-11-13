let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

let jwt = require("jsonwebtoken");
let DB = require("../config/db");
//create the User Model instance
let userModel = require("../models/user");
let User = userModel.User;
