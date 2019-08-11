

function buildHistogram(array) {
  let lettersHistogram = {}

  array.forEach(letter => {
    if (lettersHistogram[letter]) {
      lettersHistogram[letter] += 1
    } else {
      lettersHistogram[letter] = 1
    }
  })
  return lettersHistogram
}

function canBuildNote(array, sentence) {
  let histogram = buildHistogram(array)
  let flag = true

  let newNote = sentence.replace(/\s/g, '').split("");
  console.log(histogram)

  let searchSentence = newNote.map(letter => {
    if(histogram[letter]) {
      if (histogram[letter] === 0) {
        flag = false
        return null
      } else {
        histogram[letter] -= 1
        return letter
      }
    } else {
      flag = false
      return null
    }
  })

  console.log(searchSentence)

  return flag

}

// let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// 		"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
// let note = "hereisat"

// canBuildNote(magazine, note)



