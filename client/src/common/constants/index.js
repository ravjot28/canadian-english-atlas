export const API_BASE_URL = process.env.REACT_APP_SERVER_URL;
//export const API_BASE_URL = "/api";
export const ACCESS_TOKEN = "accessToken";

export const MAX_CHOICES = 6;

export const NAME_MIN_LENGTH = 4;
export const NAME_MAX_LENGTH = 40;

export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 15;

export const EMAIL_MAX_LENGTH = 40;

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;

// Add Audio User Info
export const formMetaData = {
  birthYear: {
    minName: "before 1915",
    minValue: "before1915",
    maxName: "After 1997",
    maxValue: "after1997",
    minRangeValue: 1916,
    maxRangeValue: 1997
  },
  gender: {
    femaleValue: "female",
    femaleName: "Female",
    maleValue: "male",
    maleName: "Male",
    nonBinaryValue: "nonBinary",
    nonBinaryName: "Non-binary/third gender",
    otherName: "Other",
    otherValue: "other"
  }
};

export const words = [
  "bag",
  "cot",
  "gang",
  "past",
  "spa",
  "band",
  "deck",
  "house",
  "pasta",
  "test",
  "boat",
  "duck",
  "how",
  "pool",
  "tie",
  "boot",
  "face",
  "kiss",
  "seat",
  "tight",
  "caught",
  "far",
  "pack",
  "sharp",
  "too"
];
