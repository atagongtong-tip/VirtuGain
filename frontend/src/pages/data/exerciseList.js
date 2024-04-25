export const EXERCISES_PER_TYPE = {
  underWeight: ["squats", "deadlifts", "pushups", "curls"],
  healthyWeight: ["lraise", "squats", "deadlifts", "pushups", "barbellrow"],
  overWeight: ["lunges", "squats", "deadlifts", "pushups", "jacks"],
  obese: ["jacks", "squats", "lunges", "deadlifts","overheadpress"],
};

export const EXERCISES = {
  curls: {
    name: "Bicep Curls",
    imageFile: "bicep.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/curl",
  },
  deadlifts: {
    name: "Deadlifts",
    imageFile: "lift.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/lift",
  },
  jacks: {
    name: "Jump Jacks",
    imageFile: "jacks.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/jack",
  },
  lraise: {
    name: "LateralRaise",
    imageFile: "squat.jpg", // ! No image found
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/raise",
  },
  lunges: {
    name: "Lunges",
    imageFile: "lunges.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/lunge",
  },
  pushups: {
    name: "Push Ups",
    imageFile: "pushup.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/pushup",
  },
  squats: {
    name: "Squats",
    imageFile: "squat.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/squat",
  },
  barbellrow: {
    name: "Barbell Row",
    imageFile: "squat.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/barbellrow",
  },
  overheadpress: {
    name: "Overhead Press",
    imageFile: "squat.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/overheadpress",
  }, 
};
