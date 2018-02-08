export const questionObj = {
  resp1: {
    question: "Hi, it is ${temp} degrees outside in ${city}. <br> How is your hair feeling?",
    option: {
      oily: "resp2",
      dull: "resp2",
      good: "resp3",
      other : "default"
    }
  },
  resp2: {
    question: "How many times do you wash your hair?",
    option: {
      "7=>": "resp5",
      "7<": "resp5",
      other: "default"
    }
  },
  resp3: {
    question: "That is great!",
    resp: "resp4"
  },
  resp4: {
    question: "I recommend you use dove oxygen moisture for even better result",
    resp: "finished",
    finish: "video"
  },
  resp5: {
    question: "Washing your hair ${number} of times per weed when it is oily is not healthy",
    resp: "resp6"
  },
  resp6: {
    question: "I recommend you use dove (oil control/daily shine based on the hair problem) shampoo",
    resp: "finish",
    finish: "carousel"
  },
  default: {
    question: "I'm sorry I didn't get that"
  }
}
export const oldOption = {
  resp1: {
    question: "Hi, it is ${temp} degrees outside in ${city}. <br> How is your hair feeling?",
    answers: [{
      label: "Oily",
      ref: "resp2"
    }, {
      label: "Dull",
      ref: "resp2"
    }, {
      label: "Good",
      ref: "resp3"
    }, {
      label: "Other",
      ref: "default"
    }]
  },
  resp2: {
    question: "How many times do you wash your hair?",
    answers: [{
      label: "7=>",
      ref: "resp5"
    }, {
      label: "7<",
      ref: "resp5"
    }, {
      label: "Other",
      ref: "default"
    }]
  },
  resp3: {
    question: "That is great!",
    resp: "resp4"
  },
  resp4: {
    question: "I recommend you use dove oxygen moisture for even better result",
    resp: "finished",
    finish: "video"
  },
  resp5: {
    question: "Washing your hair ${number} of times per weed when it is oily is not healthy",
    resp: "resp6"
  },
  resp6: {
    question: "I recommend you use dove (oil control/daily shine based on the hair problem) shampoo",
    resp: "finish",
    finish: "carousel"
  },
  default: {
    question: "I'm sorry I didn't get that"
  }
}