import { Router } from "express";
import Controllers from "../controllers/countries.controller";
const router = Router();

router.get("/countries", Controllers.getCountries);

router.get("/countries/detailed", Controllers.getDetailedCountry);

router.get("/countries/:id", Controllers.getCountryById);

export default router;
