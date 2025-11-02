// controllers/EventController.js
import { createEventProvider } from "../../provider/create/event.js";

export const createEvent = async (req, res) => {
  try {
    const {userId} = await req.auth()
    console.log(req.body)
    const data = { ...req.body, createdBy: userId }; // secure assignment

    const event = await createEventProvider(data);

    res.status(201).json({
      message: "Event created successfully",
      event,
    });
  } catch (err) {
    console.error("Error creating event:", err);
    res.status(400).json({ message: err.message || "Failed to create event" });
  }
};
