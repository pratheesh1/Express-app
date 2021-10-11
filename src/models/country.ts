import { Schema, model } from "mongoose";

interface City {
  city_id: Number;
  name: String;
}

interface CountrySchema {
  iso: StringConstructor;
  country: StringConstructor;
  capital: StringConstructor;
  currency_code: StringConstructor;
  currency_name: StringConstructor;
  currency_symbol: StringConstructor;
  phone: NumberConstructor;
  postal_code_format: StringConstructor;
  postal_code_regex: StringConstructor;
  languages: String[];
  country_id: NumberConstructor;
  cities: City[];
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
    required: true,
  },
  currency_code: {
    type: String,
    required: true,
  },
  currency_name: {
    type: String,
    required: true,
  },
  currency_symbol: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
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
    required: true,
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
  },
});

const Country = model<CountrySchema>("countries", countrySchema);
module.exports = Country;
