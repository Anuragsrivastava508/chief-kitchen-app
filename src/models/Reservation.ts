import mongoose, { Schema, models, model } from "mongoose";

const ReservationSchema = new Schema({
  name: String,
  phone: String,
  date: String,
  time: String,
  people: Number
}, { timestamps: true });

const Reservation = models.Reservation || model("Reservation", ReservationSchema);

export default Reservation;