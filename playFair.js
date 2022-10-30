// 5 by 5 matrix
let matrix = []

// Function for making text to even
const makeEven = (text) => {
  // check if the length of text is even
  if (text.length % 2 !== 0) {
    // if not even then add 'x' at the end
    text += 'X'
  }
  return text
}

// Method for Initializing the Matrix
const intilizeMatrix = () => {
  matrix = new Array(5)
  for (let i = 0; i < 5; i++) {
    matrix[i] = new Array(5)
  }
}
// Function for checking if the character is already present in the matrix
const checkDuplicateCharacter = (ch) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (matrix[i][j] === ch) {
        return true
      }
    }
  }
  return false
}

// To Generate the Matrix with Key and Remaining Characters
const generateKeyTable = (key) => {
  intilizeMatrix()
  const alphabets = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'
  const uniqueString = key + alphabets
  let count = 0
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (!checkDuplicateCharacter(uniqueString[count])) {
        matrix[i][j] = uniqueString[count]
        count++
      } else {
        j--
        count++
      }
    }
  }
}

const findPosition = (ch) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (matrix[i][j] === ch) {
        return [i, j]
      }
    }
  }
}

const removeCharacterJ = (text) => {
  return text.replace(/J/g, 'I')
}
const encrypt = (text) => {
  let encryptedText = ''

  // loop through the text
  for (let i = 0; i < text.length; i += 2) {
    let firstChar = text[i]
    let secondChar = text[i + 1]
    console.log(firstChar, secondChar)

    // Finding the position of the characters in the matrix
    let firstCharPosition = findPosition(firstChar)
    let secondCharPosition = findPosition(secondChar)

    // Breaking the Array
    let firstCharRow = firstCharPosition[0]
    let firstCharCol = firstCharPosition[1]
    let secondCharRow = secondCharPosition[0]
    let secondCharCol = secondCharPosition[1]

    // doing the encryption
    if (firstCharRow === secondCharRow) {
      encryptedText += matrix[firstCharRow][(firstCharCol + 1) % 5]
      encryptedText += matrix[secondCharRow][(secondCharCol + 1) % 5]
    } else if (firstCharCol === secondCharCol) {
      encryptedText += matrix[(firstCharRow + 1) % 5][firstCharCol]
      encryptedText += matrix[(secondCharRow + 1) % 5][secondCharCol]
    } else {
      encryptedText += matrix[firstCharRow][secondCharCol]
      encryptedText += matrix[secondCharRow][firstCharCol]
    }
  }
  return encryptedText
}
const decrypt = (text) => {
  let decryptedText = ''

  // loop through the text
  for (let i = 0; i < text.length; i += 2) {
    let firstChar = text[i]
    let secondChar = text[i + 1]
    // Finding the position of the characters in the matrix
    let firstCharPosition = findPosition(firstChar)
    let secondCharPosition = findPosition(secondChar)

    // Breaking the Array
    let firstCharRow = firstCharPosition[0]
    let firstCharCol = firstCharPosition[1]
    let secondCharRow = secondCharPosition[0]
    let secondCharCol = secondCharPosition[1]

    // doing the decryption
    if (firstCharRow === secondCharRow) {
      decryptedText += matrix[firstCharRow][(firstCharCol - 1 + 5) % 5]
      decryptedText += matrix[secondCharRow][(secondCharCol - 1 + 5) % 5]
    } else if (firstCharCol === secondCharCol) {
      decryptedText += matrix[(firstCharRow - 1 + 5) % 5][firstCharCol]
      decryptedText += matrix[(secondCharRow - 1 + 5) % 5][secondCharCol]
    } else {
      decryptedText += matrix[firstCharRow][secondCharCol]
      decryptedText += matrix[secondCharRow][firstCharCol]
    }
  }
  return decryptedText
}

const encryptByPlayFair = (text, key) => {
  text = makeEven(text)
  text = removeCharacterJ(text)
  key = removeCharacterJ(key)
  generateKeyTable(key)
  let encryptedText = encrypt(text)
  return encryptedText
}
const decryptByPlayFair = (text, key) => {
  text = makeEven(text)
  text = removeCharacterJ(text)
  key = removeCharacterJ(key)

  generateKeyTable(key)
  let decryptedText = decrypt(text)
  return decryptedText
}

// exports the functions
export { encryptByPlayFair, decryptByPlayFair }
