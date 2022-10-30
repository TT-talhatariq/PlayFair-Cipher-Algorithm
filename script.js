// Elements UI
const container = document.querySelector('.forms')
const encrypt_btn = document.querySelector('.encrypt_btn') // Encrypt Button
const decrypt_btn = document.querySelector('.decrypt_btn') // Decrypt Button
const text = document.getElementsByName('plain_text') // Plain Text or Cipher Text
const key = document.getElementsByName('key') // Key for Encryption or Decryption
const convert = document.querySelector('.convert') // Convert Button
const form = document.querySelector('.playFair')
const title = document.querySelector('.title')

// Result Section
const result = document.querySelector('.result')
const result_plain_text = document.querySelector('.plain')
const result_cipher_text = document.querySelector('.cipher')

// User Provided Values
let textToBeConvert = ''
let keyForFunction = ''

// Function for Changing View of Page
const changeView = (e) => {
  if (e.target.classList.contains('encrypt_btn')) {
    if (!encrypt_btn.classList.contains('active')) {
      encrypt_btn.classList.add('active')
      decrypt_btn.classList.remove('active')
      convert.textContent = 'Encrypt'
      text[0].placeholder = 'Plain Text'
      text[0].value = key[0].value = ''
      title.textContent = 'Encrypt'
    }
  }
  if (e.target.classList.contains('decrypt_btn')) {
    if (!decrypt_btn.classList.contains('active')) {
      decrypt_btn.classList.add('active')
      encrypt_btn.classList.remove('active')
      convert.textContent = 'Decrypt'
      text[0].placeholder = 'Cipher Text'
      textToBeConvert = keyForFunction = ''
      text[0].value = key[0].value = ''
      title.textContent = 'Decrypt'
    }
  }
}

// Function for Validating the Key
const validateKey = (e) => {}

// Function for doing encryption
const encrypt = (e) => {
  e.preventDefault()
  textToBeConvert = text[0].value
  keyForFunction = key[0].value
  console.log(textToBeConvert)
  console.log(keyForFunction)
}

// Function for doing decryption
const decrypt = (e) => {
  e.preventDefault()
  textToBeConvert = text[0].value
  keyForFunction = key[0].value
  console.log(textToBeConvert)
  console.log(keyForFunction)
}
const processData = (e) => {
  if (encrypt_btn.classList.contains('active')) {
    encrypt(e)
  }
  if (decrypt_btn.classList.contains('active')) {
    decrypt(e)
  }
}

// Event Listeners
encrypt_btn.addEventListener('click', changeView)
decrypt_btn.addEventListener('click', changeView)
convert.addEventListener('click', processData)
form.addEventListener('onSubmit', processData)
const vals = () => {
  console.log(textToBeConvert)
  console.log(keyForFunction)
  console.log(text.value)
}
