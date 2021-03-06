const Jasmine = require('jasmine')
const jasmine = new Jasmine()

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    '**/*[sS]pec.js'
  ],
  helpers: [
    'helpers/**/*.js'
  ],
  stopSpecOnExpectationFailure: false,
  random: true
})

jasmine.onComplete(function (passed) {
  if (passed) {
    console.log('All specs have passed!!')
  } else {
    console.log('At least one spec has failed!!')
  }
  jasmine.exitCodeCompletion(passed)
})

jasmine.execute()
