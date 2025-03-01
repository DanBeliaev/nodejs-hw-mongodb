<<<<<<< Updated upstream
import express from "express";
=======
import {Router} from "express";
>>>>>>> Stashed changes

import {
    getContactsController,
    getContactByIdController,
    createContactsController,
    patchContactController,
    deleteContactController
} from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactSchema, updateContactSchema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";

<<<<<<< Updated upstream
const jsonParser = express.json();
const router = express.Router();
=======

const router = Router();

router.use(authenticate);
>>>>>>> Stashed changes

router.get(
    '/contacts',
    ctrlWrapper(getContactsController)
);
router.get(
    '/contacts/:contactId',
    isValidId,
    ctrlWrapper(getContactByIdController)
);
router.post(
<<<<<<< Updated upstream
    "/contacts",
    jsonParser,
=======
    "/",
>>>>>>> Stashed changes
    validateBody(createContactSchema),
    ctrlWrapper(createContactsController)
);
router.patch(
    "/contacts/:contactId",
    isValidId,
    validateBody(updateContactSchema),
    ctrlWrapper(patchContactController)
);
router.delete(
    "/contacts/:contactId",
    isValidId,
    ctrlWrapper(deleteContactController)
);

export default router;