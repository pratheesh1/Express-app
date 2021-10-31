import { object, string, number, lazy, array } from "yup";

//validation schema for  getTrails
export const getTrailsSchema = object({
  query: object({
    q: string().typeError("q must be a string").nullable(),
    difficulty: lazy((val) =>
      Array.isArray(val)
        ? array()
            .of(
              number()
                .min(1, "difficulty cannot be less than 1")
                .max(4, "difficulty cannot be more than 4")
                .typeError("difficulty must be a number in range >=1 and <=4")
            )
            .nullable()
        : number()
            .min(1, "difficulty cannot be less than 1")
            .max(4, "difficulty cannot be more than 4")
            .typeError("difficulty must be a number in range >=1 and <=4")
            .notRequired()
            .nullable()
    ),
    distance: lazy((val) =>
      Array.isArray(val)
        ? array()
            .of(
              string()
                .matches(
                  /^[0-9]+(,|%2[cC])([0-9]+)*$/,
                  "distance must be of the format 2,3"
                )
                .nullable()
            )
            .nullable()
        : string()
            .matches(
              /^[0-9]+(,|%2[cC])([0-9]+)*$/,
              "distance must be of the format 2,3"
            )
            .notRequired()
            .nullable()
    ),
  }),
});

//validation schema for  postTrail
export const postTrailSchema = object({
  body: object({
    trailName: string()
      .required("trailName is required")
      .typeError("trailName must be a string"),
    description: string()
      .required("description is required")
      .typeError("description must be a string"),
    country: object({
      id: number()
        .required("country id is required")
        .typeError("country id must be a number"),
      name: string()
        .required("country name is required")
        .typeError("country name must be a string"),
      description: string().typeError("country description must be a string"),
    }).required("country is required"),
    tags: array().of(
      object({
        description: string()
          .required("tag description is required")
          .typeError("tag description must be a string"),
        detail: string()
          .required("tag detail is required")
          .typeError("tag detail must be a string"),
        specialFlags: string().typeError("tag specialFlags must be a string"),
      })
    ),
    reviews: array().of(
      object({
        reviewText: string().typeError("reviewText must be a string"),
        userId: number().typeError("userId must be a number"),
        username: string()
          .typeError("username must be a string")
          .required("username is required"),
        rating: number()
          .min(1, "rating cannot be less than 1")
          .max(5, "rating cannot be more than 5")
          .typeError("rating must be a number")
          .required("rating is required"),
        email: string()
          .email("email id is not valid")
          .required("email is required"),
        datetime: string().matches(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
          "date-time invalid"
        ),
      })
    ),
    accessibility: array().of(
      string().typeError("accessibility must be a string")
    ),
    difficulty: number()
      .min(1, "difficulty cannot be less than 1")
      .max(4, "difficulty cannot be more than 4")
      .typeError("difficulty must be a number in range >=1 and <=4")
      .required("difficulty is required"),
    distance: number()
      .typeError("distance must be a number")
      .required("distance is required"),
    timeToComplete: number()
      .typeError("timeToComplete must be a number")
      .required("timeToComplete is required"),
    resourcesInRoute: array().of(
      object({
        resourceName: string()
          .typeError("resourceName must be a string")
          .required("resourceName is required"),
        type: string().typeError("type must be a string"),
      })
    ),
    describeTrail: string()
      .typeError("describeTrail must be a string")
      .required("describeTrail is required"),
    images: array().of(string().url("image must be an array of valid url")),
    createdBy: object({
      firstName: string()
        .typeError("firstName must be a string")
        .required("firstName is required"),
      lastName: string()
        .typeError("lastName must be a string")
        .required("lastName is required"),
      email: string()
        .email("createdBy email id is not valid")
        .required("createdBy email is required"),
      aboutYou: string().typeError("aboutYou must be a string"),
    }).required("createdBy is required"),
    createdAt: string().matches(
      /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i,
      "createdAt is not valid ISO datetime"
    ),
    updatedAt: string().matches(
      /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i,
      "createdAt is not valid ISO datetime"
    ),
    __v: number().typeError("__v must be a number"),
  }),
});

//validation schema for  getTrailById
export const getTrailByIdSchema = object({
  params: object({
    id: string().required("id is required").typeError("id must be a string"),
  }),
});

//validation schema for  deleteTrailById
export const deleteTrailByIdSchema = object({
  params: object({
    id: string().required("id is required").typeError("id must be a string"),
  }),
});

//validation schema for  putTrailById
export const putTrailByIdSchema = object({
  //schema to validate body
  body: object({
    trailName: string().typeError("trailName must be a string"),
    description: string().typeError("description must be a string"),
    country: object({
      id: number()
        .required("country id is required")
        .typeError("country id must be a number"),
      name: string()
        .required("country name is required")
        .typeError("country name must be a string"),
      description: string().typeError("country description must be a string"),
    }),
    tags: array().of(
      object({
        description: string()
          .required("tag description is required")
          .typeError("tag description must be a string"),
        detail: string()
          .required("tag detail is required")
          .typeError("tag detail must be a string"),
        specialFlags: string().typeError("tag specialFlags must be a string"),
      })
    ),
    reviews: array().of(
      object({
        reviewText: string().typeError("reviewText must be a string"),
        userId: number().typeError("userId must be a number"),
        username: string()
          .typeError("username must be a string")
          .required("username is required"),
        rating: number()
          .min(1, "rating cannot be less than 1")
          .max(5, "rating cannot be more than 5")
          .typeError("rating must be a number")
          .required("rating is required"),
        email: string()
          .email("email id is not valid")
          .required("email is required"),
        datetime: string().matches(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
          "date-time invalid"
        ),
      })
    ),
    accessibility: array().of(
      string().typeError("accessibility must be a string")
    ),
    difficulty: number()
      .min(1, "difficulty cannot be less than 1")
      .max(4, "difficulty cannot be more than 4")
      .typeError("difficulty must be a number in range >=1 and <=4"),
    distance: number().typeError("distance must be a number"),
    timeToComplete: number().typeError("timeToComplete must be a number"),
    resourcesInRoute: array().of(
      object({
        resourceName: string()
          .typeError("resourceName must be a string")
          .required("resourceName is required"),
        type: string().typeError("type must be a string"),
      })
    ),
    describeTrail: string().typeError("describeTrail must be a string"),
    images: array().of(string().url("image must be an array of valid url")),
    createdBy: object({
      firstName: string().typeError("firstName must be a string"),
      lastName: string().typeError("lastName must be a string"),
      email: string().email("createdBy email id is not valid"),
      aboutYou: string().typeError("aboutYou must be a string"),
    }),
    createdAt: string().matches(
      /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i,
      "createdAt is not valid ISO datetime"
    ),
    updatedAt: string().matches(
      /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i,
      "createdAt is not valid ISO datetime"
    ),
    __v: number().typeError("__v must be a number"),
  }),

  //schema to validate params
  params: object({
    id: string().required("id is required").typeError("id must be a string"),
  }),
});
