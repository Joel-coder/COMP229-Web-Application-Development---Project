let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require("jsonwebtoken");

let passport = require("passport");

// router.get("/", listController.displayContactList);

// router.get("/test", (req, res) => {
//   ContactsList.find((err, businessContactsList) => {
//     if (err) {
//       return console.error(err);
//     } else {
//       console.log(businessContactsList);
//       res.send({ businessContactsList });
//     }
//   });
// });

// router.post("/add", (req, res) => {
//   let newContact = ContactsList({
//     contact_name: req.body.contact_name,
//     contact_number: req.body.contact_number,
//     email: req.body.email,
//   });
//   console.log(newContact);
//   ContactsList.create(newContact, (err, newContact) => {
//     if (err) {
//       console.log(err);
//       res.end(err);
//     } else {
//       res.send({ newContact });
//       console.log({ newContact });
//       // res.redirect("/contactInfo");
//     }
//   });
// });
