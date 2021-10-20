import { Schema, model } from "mongoose";

interface Country {
  id: NumberConstructor;
  name: StringConstructor;
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

interface createdBy {
  firstName: StringConstructor;
  lastName: StringConstructor;
  email: StringConstructor;
  aboutYou?: String;
}

interface TrailSchema {
  trailName: StringConstructor;
  description: StringConstructor;
  country: Country;
  tags?: tags[];
  review?: review[];
  accessibility?: String[];
  difficulty: NumberConstructor;
  distance: NumberConstructor;
  timeToComplete: NumberConstructor;
  resourcesInRoute?: resourcesInRoute[];
  describeTrail?: String;
  images: String[];
  createdBy: createdBy;
}

const trailSchema = new Schema<TrailSchema>(
  {
    trailName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    country: {
      type: {
        id: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: false,
        },
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
    distance: {
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
    describeTrail: {
      type: String,
      required: false,
    },
    images: {
      type: [String],
      required: true,
    },
    createdBy: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        aboutYou: {
          type: String,
          required: false,
        },
      },
      required: true,
    },
  },
  { timestamps: true }
);

const Trail = model<TrailSchema>("trails", trailSchema);
module.exports = Trail;
