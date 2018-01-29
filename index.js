module.exports = input => {
  if (!input) {
    return 0
  }
  const text = input.toString()
  const numberOfWords = (text.match(/\S+/g) || []).length
  const numberOfPeriods = (text.match(/\.|:/g) || []).length
  const numberOfLongWords = text.split(' ').filter(function (word) {
    return word.length > 6
  }).length
  const lix = numberOfWords / numberOfPeriods + (numberOfLongWords * 100) / numberOfWords

  if (lix !== Infinity) {
    return parseFloat(lix.toFixed(2))
  } else {
    return 0
  }
}
