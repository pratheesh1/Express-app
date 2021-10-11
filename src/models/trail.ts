import { Schema, model } from "mongoose";

interface Country {
  name: String;
  description?: String;
}

interface tags {
  description: String;
  details: String;
  specialFlags?: String[];
}

interface review {
  reviewText: String;
  userid?: String;
  username: String;
  rating: Number;
  emial: String;
  datetime: Date;
}

interface resourcesInRoute {
  resourceName: String;
  type?: String;
}

interface TrailSchema {
  trailName: StringConstructor;
  description: StringConstructor;
  country: Country;
  tags?: tags[];
  review?: review[];
  accessibility?: String[];
  difficulty: NumberConstructor;
  timeToComplete: NumberConstructor;
  resourcesInRoute?: resourcesInRoute[];
  datetime: Date;
}

const trailSchema = new Schema<TrailSchema>({
  trailName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  country: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    required: true,
  },
  tags: {
    type: [
      {
        description: {
          type: String,
          required: true,
        },
        detail: {
          type: String,
          required: true,
        },
        specialFlags: {
          type: [String],
          required: false,
        },
      },
    ],
    required: false,
  },
  review: {
    type: [
      {
        reviewText: {
          type: String,
          required: true,
        },
        userid: {
          type: String,
          required: false,
        },
        username: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        datetime: {
          type: Date,
          required: true,
        },
      },
    ],
    required: false,
  },
  accessibility: {
    type: [String],
    required: false,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  timeToComplete: {
    type: Number,
    required: true,
  },
  resourcesInRoute: {
    type: [
      {
        resourceName: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: false,
        },
      },
    ],
    required: false,
  },
  datetime: {
    type: Date,
    required: true,
  },
});

const Trail = model<TrailSchema>("trails", trailSchema);
module.exports = Trail;
