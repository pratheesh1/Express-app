import { Router } from "express";
import Controllers from "../controllers/countries.controller";
const router = Router();

// import yup middleware for validation
import validate from "../middleware/validateRequest";
import { getCountryByIdSchema } from "../schema/country.schema";

router.get("/countries", Controllers.getCountries);

router.get("/countries/detailed", Controllers.getDetailedCountry);

router.get(
  "/countries/:id",
  validate(getCountryByIdSchema),
  Controllers.getCountryById
);

export default router;
