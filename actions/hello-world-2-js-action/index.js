const core = require('@actions/core')

try {
  console.log('Inside custom JS action 2 🪲 🥛 🐶')
  const nameToGreet = core.getInput('who-to-greet')
  console.log(`🐨  Hello ${nameToGreet}!`)
} catch (error) {
  core.setFailed(error.message)
}
