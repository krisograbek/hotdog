function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const range1Sentences = [
  "Common! That's way too easy! This is",
  "Phii, neeext! This is"
]
const range2Sentences = [
  "I'm pretty confident that this is",
  "Quite easy. This is"
]

const range3Sentences = [
  "Probably, this is",
  "Not so sure about this one. But I'll say "
]

const range4Sentences = [
  "You're trying to fool me, aren't you? I'll say ",
  "Hmmm, I guess ... "
]

const range5Sentences = [
  "This is a tricky one! I guess this is",
  "Good one! I'm saying "
]

export function get_result_sentence(proba) {
  let begin = "";
  const sent = proba > 0.5 ? " a Hot Dog" : " not a Hot Dog";
  const score = proba > 0.5 ? proba * 100 : (1 - proba) * 100;
  let choiseLen = 1;
  if (score > 90) {
    choiseLen = range1Sentences.length;
    begin = range1Sentences[getRandomInt(choiseLen)]
  }
  else if (score > 80) {
    choiseLen = range2Sentences.length;
    begin = range2Sentences[getRandomInt(choiseLen)]
  }
  else if (score > 70) {
    choiseLen = range3Sentences.length;
    begin = range3Sentences[getRandomInt(choiseLen)]
  }
  else if (score > 60) {
    choiseLen = range4Sentences.length;
    begin = range4Sentences[getRandomInt(choiseLen)]
  }
  else {
    choiseLen = range5Sentences.length;
    begin = range5Sentences[getRandomInt(choiseLen)]
  }
  // console.log(score)
  return begin + sent
}