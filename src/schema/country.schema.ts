import { object, number } from "yup";

//validation schema for getCountryById
export const getCountryByIdSchema = object({
  params: object({
    id: number().required("id is required").typeError("id must be an integer"),
  }),
});
