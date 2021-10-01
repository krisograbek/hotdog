function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getRandomSentence = ((range, isTrue) => {
  const sentences = {
    "range1": [
      `Common! That's way too easy! This is ${isTrue ? "" : "not "}a hot dog.`,
      `Phii! ${isTrue ? "A " : "Not a "}hot dog. Neeeext!`,
      `Is that all you've got?! This is clearly ${isTrue ? "" : "not "}a hot dog.`,
      `Booooring! ${isTrue ? "A " : "Not a "}hot dog.`
    ],
    "range2": [
      `I'm pretty confident this is ${isTrue ? "" : "not "}a hot dog`,
      `Quite easy. This is ${isTrue ? "" : "not "}a hot dog`,
      `It ${isTrue ? "must" : "can't"} be a hot dog`
    ],
    "range3": [
      `Probably, this is ${isTrue ? "" : "not "}a hot dog`,
      `Not so sure about this one. But I'll say ${isTrue ? "" : "not "}a hot dog`
    ],
    "range4": [
      `You're trying to fool me, aren't you? I'll say ${isTrue ? "" : "not "}a hot dog`,
      `Hmmm, I guess ... ${isTrue ? "" : "not "}a hot dog`
    ],
    "range5": [
      `This is a tricky one! I guess this is${isTrue ? "" : "not "}a hot dog`,
      `Good one! I'm saying ${isTrue ? "" : "not "}a hot dog`
    ]
  }
  const sentId = getRandomInt(sentences[range].length)
  // console.log(sentences[range].length, sentId)
  return sentences[range][sentId]
})

export function get_result_sentence(proba) {
  const score = proba > 0.5 ? proba * 100 : (1 - proba) * 100;
  if (score > 90) {
    return getRandomSentence("range1", proba > 0.5)
  }
  else if (score > 80) {
    return getRandomSentence("range2", proba > 0.5)
  }
  else if (score > 70) {
    return getRandomSentence("range3", proba > 0.5)
  }
  else if (score > 60) {
    return getRandomSentence("range4", proba > 0.5)
  }
  else {
    return getRandomSentence("range5", proba > 0.5)
  }
}