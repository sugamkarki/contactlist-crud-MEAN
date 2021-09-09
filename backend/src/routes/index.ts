import express from "express";
import { CallbackWithoutResult } from "mongoose";

import { Contact, IContact } from "./../models/contacts";
// router
const router = express.Router();
// get one contact
router.get("/contact/:id", (req, res) => {
  Contact.findById(req.params.id, (err: any, contact: IContact) => {
    if (err) {
      res.json({ msg: "Error ID" });
    } else {
      res.json(contact);
    }
  });
});
// Get all contacts
router.get("/contact", (req, res, next) => {
  Contact.find(function (err, contacts) {
    res.json(contacts);
  });
});
// add contact
router.post("/contact", (req, res) => {
  console.log(req.body);
  let newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
  });
  newContact.save((err, contact) => {
    if (err) {
      res.json({ msg: "failed to add contact" });
    } else {
      res.json({ msg: "Contact added successfully" });
    }
  });
});

// delete contacts

router.delete("/contact/:id", (req, res) => {
  Contact.remove(
    { _id: req.params.id },
    // @ts-ignore
    (err: any, result: any): CallbackWithoutResult => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

export default router;
