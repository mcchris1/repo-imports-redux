const form = document.getElementById('form')

const password = "CoolChris"

const handleSubmit = function(event) {
  event.preventDefault()

  let elements = event.target.elements
  for(let i = 0; i < elements.length; i++) {
    console.log(`${elements[i].name}: ${elements[i].value}`)
  }

  if (elements.password.value === password) {
    console.log('Come on in!')
  } else {
    console.log('Sorry, wrong password!')
  }
}

form.addEventListener('submit', handleSubmit)

const username = document.querySelector('#username')

const handleInput = (e) => {
  console.log('The input: ' + e.data)
  console.log('The current value of #username: ' + e.target.value)
}

username.addEventListener('input', handleInput)

const handleChange = function(event) {
  console.log(`${event.target.name} has been changed!`)
}

document.querySelectorAll('#form input').forEach(input =>
  input.addEventListener('change', handleChange))
