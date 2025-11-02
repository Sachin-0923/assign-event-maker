import mongoose from "mongoose";

export async function Database() {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/");
    console.log(conn.connection.host);
  } catch (err) {
    console.log(err);
  }
}
