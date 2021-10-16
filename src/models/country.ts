import { Schema, model } from "mongoose";

interface City {
  city_id: Number;
  name: String;
}

interface CountrySchema {
  iso: StringConstructor;
  country: StringConstructor;
  capital?: StringConstructor;
  currency_code?: StringConstructor;
  currency_name?: StringConstructor;
  currency_symbol?: StringConstructor;
  phone?: NumberConstructor;
  postal_code_format?: StringConstructor;
  postal_code_regex?: StringConstructor;
  languages?: String[];
  country_id: NumberConstructor;
  cities?: City[];
}

const countrySchema = new Schema<CountrySchema>({
  iso: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: false,
  },
  currency_code: {
    type: String,
    required: false,
  },
  currency_name: {
    type: String,
    required: false,
  },
  currency_symbol: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  postal_code_format: {
    type: String,
    required: false,
  },
  postal_code_regex: {
    type: String,
    required: false,
  },
  languages: {
    type: [String],
    required: false,
  },
  country_id: {
    type: Number,
    required: true,
  },
  cities: {
    type: [
      {
        city_id: { type: Number, required: true },
        name: { type: String, required: true },
      },
    ],
    required: false,
  },
});

const Country = model<CountrySchema>("countries", countrySchema);
module.exports = Country;
