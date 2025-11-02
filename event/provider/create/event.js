// providers/EventProvider.js
import { Event } from "../../../lib/modals/Event.js";

export async function createEventProvider(props) {
  const {
name,
description,
goal,
maxParticipants,
location,
date,
startTime,
endtTime,
createdBy
  } = props;
console.log(props)
  if (!name|| !date || !createdBy || !location) {
    throw new Error("Missing required event fields");
  }


  const event = new Event({
    eventName:name,
    eventDate:date,
    eventHead:createdBy,
    maxParticipants:maxParticipants,
    eventLocation:location,
    eventGoal:goal,
    eventDescription:description,
    eventStartingPoint:location,
   userId:createdBy
   
  });

  const savedEvent = await event.save();
  return savedEvent;
}
