// Easy configuration file - customize your slides here!
// To add PNG images: replace emoji with image path like: image: '/images/face-oval.png'

import { act } from "react";

export const slidesData = [
  // Title Slide
  {
    type: "title",
    title: "The Perfect Woman",
    subtitle: "by michael",
    buttonText: "go forth unto what lieth next",
  },

  {
    type: "title",
    title: "Welcome fwiends",
    subtitle:
      "Its hard to picture the perfect woman, and i have horrid taste, but yall have good taste so help me picture the one (this took 3 hours to make so hope you like and subscribe)",
    buttonText: "Let's Begin",
  },

  // Question Slides
  {
    type: "question",
    step: 1,
    title: "Choose Your Face Shape",
    question: "What's the perfect face shape?",
    feature: "face",
    options: [
      {
        label: "Oval",
        emoji: "",
        image: "images/face/oval-face.png",
        actualLabel: "Oval",
      },
      {
        label: "Round",
        emoji: "",
        image: "images/face/round-face.png",
        actualLabel: "Round",
      },
      {
        label: "Square",
        emoji: "",
        image: "images/face/square-face.png",
        actualLabel: "Square",
      },
      {
        label: "Diamond",
        emoji: "",
        image: "images/face/diamond-face.png",
        actualLabel: "Diamond",
      },
    ],
  },

  {
    type: "question",
    step: 2,
    title: "Choose Your Eye Style",
    question: "BECAUSE UR EYES, [nose, lips...]",
    feature: "eyes",
    options: [
      {
        label: "Cat eyes",
        emoji: "",
        image: "images/eyes/tzuyu-eyes.png",
        actualLabel: "Tzuyu Eyes",
      },
      {
        label: "WAT DA HELLEBRON JAMES",
        emoji: "",
        image: "images/eyes/lebron-eyes.png",
        actualLabel: "LeBron James Eyes",
      },
      {
        label: "guess what this is",
        emoji: "",
        image: "images/eyes/luna-eyes.png",
        actualLabel: "Luna Eyes",
      },
      {
        label: "Her eyes are described as being small (Google AI Overview)",
        emoji: "",
        image: "images/eyes/winter-eyes.png",
        actualLabel: "Winter Eyes",
      },
    ],
  },

  {
    type: "question",
    step: 3,
    title: "Choose Your Nose Shape",
    question: "I got lazy looking up the actual shapes so choose mfs",
    feature: "nose",
    options: [
      {
        label: "well 💸 well 💰 well 💵",
        emoji: "",
        image: "images/nose/jew-nose.png",
        actualLabel: "Jew Nose",
      },
      {
        label: "nose",
        emoji: "",
        image: "images/nose/winter-nose.png",
        actualLabel: "Winter Nose",
      },
      {
        label: "SNIFF",
        emoji: "",
        image: "images/nose/lebron-nose.png",
        actualLabel: "LeBron Nose",
      },
      {
        label: "nose 2 but ngl looks kinda similar but wtv",
        emoji: "",
        image: "images/nose/wonyoung-nose.png",
        actualLabel: "Wonyoung Nose",
      },
    ],
  },

  {
    type: "question",
    step: 4,
    title: "Choose Your Lip Style",
    question: "Kiss me baby one more time!",
    feature: "lips",
    options: [
      {
        label: "slurp",
        emoji: "",
        image: "images/lips/ningning-smile.png",
        actualLabel: "Ningning Smile",
      },
      {
        label: "she a fefe her name keke",
        emoji: "",
        image: "images/lips/sixnine-teeth.png",
        actualLabel: "Sixnine Teeth",
      },
      {
        label: "tooootthhhh in da middle of da mouthhhhhhhhhhhh hhhhhhhhhh",
        emoji: "",
        image: "images/lips/tom-cruise-smile.png",
        actualLabel: "Tom Cruise Smile",
      },
      {
        label: "茄子",
        emoji: "",
        image: "images/lips/winter-teeth.png",
        actualLabel: "Winter Teeth",
      },
    ],
  },

  {
    type: "question",
    step: 5,
    title: "Choose Your Hair Style",
    question: "hair?",
    feature: "hair",
    options: [
      {
        label: "lets go",
        emoji: "",
        image: "images/hair/afro-hair.png",
        actualLabel: "Afro Hair",
      },
      {
        label: "blue jays",
        emoji: "",
        image: "images/hair/harley-hair.png",
        actualLabel: "Harley Quinn Hair",
      },
      {
        label: "lets gooOOooOOoo",
        emoji: "",
        image: "images/hair/blonde-hair.png",
        actualLabel: "Random Blonde Girl Hair",
      },
      {
        label: "BlUe jAyS",
        emoji: "",
        image: "images/hair/winter-hair.png",
        actualLabel: "Winter Hair",
      },
    ],
  },

  {
    type: "question",
    step: 5,
    title: "SHAKE UR BODYYYY",
    question: "yeah... yeah... EVERYBOOOODDYYYY",
    feature: "body",
    options: [
      {
        label: "Ooh ahh ooh ahh-hage mandeureo jweo",
        emoji: "",
        image: "images/body/ass-body.png",
        actualLabel:
          "This is actually Yuna from itzy lmaooooo but it looks like twice ooh ahh ooh ahh",
      },
      {
        label: "im legit losing my mind here",
        emoji: "",
        image: "images/body/disgusting-body.png",
        actualLabel:
          "I don't even know wtf this is, it just came up when i searched up 'back boobs'",
      },
      {
        label: "MOTTO MOTTO",
        emoji: "",
        image: "images/body/jacked-body.png",
        actualLabel: "Jacked Body",
      },
      {
        label: "CAPTAIN KIRK",
        emoji: "",
        image: "images/body/kirk-body.png",
        actualLabel: "Captain Kirk Blue Jays",
      },
    ],
  },

  // Results Slide
  {
    type: "results",
    title: "The Perfect Woman for Michael",
    subtitle: "Here's What You Created",
  },
];
