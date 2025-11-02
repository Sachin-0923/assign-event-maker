import mongoose from "mongoose";
import { randomUUID } from "crypto";

const EventSchema = new mongoose.Schema(
  {
    eventId: {
      type: String,
      default: () => randomUUID(), // generates UUID v4
      unique: true,
      index: true,
    },
    eventName: {
      type: String,
      required: true,
      trim: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    eventHead: {
      type: String,
      required: true,
      trim: true,
    },
    maxParticipants: {
      type: Number,
      required: true,
      min: 1,
    },
    totalParticipants: {
      type: Number,
      default: 0,
      min: 0,
    },
    eventLocation: {
      type: String,
      required: true,
      trim: true,
    },
    eventGoal: {
      type: String,
      required: true,
      trim: true,
    },
    eventDescription: {
      type: String,
      required: true,
      trim: true,
    },
    eventStartingPoint: {
      type: String,
      
      trim: true,
    },
    eventEndingPoint: {
      type: String,
      trim: true,
    },
    userId:{
        type:String,
        required:true,
        index:true
    }
  },
  { timestamps: true } 
);



export const Event = mongoose.model("Event", EventSchema);
