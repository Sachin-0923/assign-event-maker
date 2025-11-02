import { Router } from "express";
import { createEvent } from "../../controlller/create/event.js";
import { getAllEvents, getEventById } from "../../controlller/read/event.js";
const router = Router();

router.post('/create-event',createEvent);

router.get('/' ,getAllEvents);
router.get('/:id',getEventById);


export default router