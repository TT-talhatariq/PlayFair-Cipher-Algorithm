// importing the algorithm of PlayFair Cipher
import { encryptByPlayFair, decryptByPlayFair } from './playFair.js'

// Elements UI
const encrypt_btn = document.querySelector('.encrypt_btn') // Encrypt Button
const decrypt_btn = document.querySelector('.decrypt_btn') // Decrypt Button
const text = document.getElementsByName('plain_text') // Plain Text or Cipher Text
const key = document.getElementsByName('key') // Key for Encryption or Decryption
const convert = document.querySelector('.convert') // Convert Button
const form = document.querySelector('.playFair') // form element
const title = document.querySelector('.title') // Title of the Form
const keyError = document.getElementById('key') // if there is any error in the key
const result = document.querySelector('.results')

// User Provided Values
let textToBeConvert = ''
let keyForFunction = ''

// Function for Changing View of Page
const changeView = (e) => {
  if (e.target.classList.contains('encrypt_btn')) {
    // if user wants to Encrypt the Text
    if (!encrypt_btn.classList.contains('active')) {
      encrypt_btn.classList.add('active')
      decrypt_btn.classList.remove('active')
      convert.textContent = 'Encrypt'
      text[0].placeholder = 'Plain Text'
      text[0].value = key[0].value = ''
      title.textContent = 'Encrypt'
      result.innerHTML = ''
    }
  }

  // if user wants to Decrypt the Text
  if (e.target.classList.contains('decrypt_btn')) {
    if (!decrypt_btn.classList.contains('active')) {
      decrypt_btn.classList.add('active')
      encrypt_btn.classList.remove('active')
      convert.textContent = 'Decrypt'
      text[0].placeholder = 'Cipher Text'
      textToBeConvert = keyForFunction = ''
      text[0].value = key[0].value = ''
      title.textContent = 'Decrypt'
      result.innerHTML = ''
    }
  }
}

// Function for Validating the Key Provided by User
const validateKey = (e) => {
  e.preventDefault()
  // check if there are any characters other than alphabets
  if (keyForFunction.match(/[^a-zA-Z]/g) || keyForFunction.length < 1) {
    keyError.classList.add('error')
    return false
  } else {
    if (keyError.classList.contains('error')) keyError.classList.remove('error')
    return true
  }
}

// Function for Removing Spaces from the String
const removeSpaces = (str) => {
  // change all the spaces to empty string
  textToBeConvert = str.replace(/\s/g, '')
}

// Function for Converting the Text Provided by User
const processData = (e) => {
  e.preventDefault()

  // getting Values from the User
  textToBeConvert = text[0].value
  keyForFunction = key[0].value

  // removing spaces from the string and converting it to Uppercase
  removeSpaces(textToBeConvert)
  textToBeConvert = textToBeConvert.toUpperCase()
  keyForFunction = keyForFunction.toUpperCase()

  if (!validateKey(e)) return

  // if user wants to Encrypt the Text
  if (encrypt_btn.classList.contains('active')) {
    // Encrypting the Plain Text
    const cipherText = encryptByPlayFair(textToBeConvert, keyForFunction)
    let html = `
        <h1>Results</h1>
        <div class="plain"><span>Plain Text: </span> ${textToBeConvert}</div>
        <div class="cipher"><span>Cipher Text: </span>  ${cipherText}</div>
    `
    result.innerHTML = html
  }

  // if user wants to Decrypt the Text
  if (decrypt_btn.classList.contains('active')) {
    // Decrypting the Cipher Text
    const plainText = decryptByPlayFair(textToBeConvert, keyForFunction)
    let html = `
        <h1>Results</h1>
        <div class="plain"><span>Cipher Text: </span>  ${textToBeConvert}</div>
        <div class="cipher"><span>Plain Text: </span> ${plainText}</div>
    `
    result.innerHTML = html
  }
}

// Event Listeners
encrypt_btn.addEventListener('click', changeView)
decrypt_btn.addEventListener('click', changeView)
convert.addEventListener('click', processData)
form.addEventListener('onSubmit', processData)
