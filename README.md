# OkCupid Take-Home Exercise

Welcome to the OkCupid take-home exercise! This will roughly model the type of
projects you'd work on at OkCupid.

This
repository contains the structure of a React/Redux application, as well as a
webpack setup to compile the files. We'd like you to use them to implement a
feature for us.

Approach this exercise as if you worked here: make sure your code is clear and
concise, and use your time wisely.

## The feature

A feature of OkCupid, and one of the things that differentiates our site, is the
essay -- a space for people to write about themselves on their profile.
But it can be hard for users to write so freely without a prompt.

We'd like to make writing an essay easy and fun, and one idea we had is to make
a [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)-style game.

Your job is to make a small app using React/Redux and Scss which asks a user
some simple questions, and assembles the answers into a passable essay.



## How to use

First, make sure you have a modern version of `node` and `yarn.`

Run `yarn install` before getting started.

Make your changes to these files, then run `npm start` to run the compiler.

A new window should open; if not, you can visit your page at
http://127.0.0.1:3000/. Any changes to the project files should trigger a new
build, and a refresh.


## What's there

* Screenshots of the app's design, in `/assets/`.
* The main app folder, `/src/`, where you'll be making your changes.
* A [ducks](https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.5chqfp84p)
  file, `/src/madlibs.js`. This file contains the reducer, the initial state, along
  with some example actions.
* A constants file, `/src/constants.js`. It contains the questions and potential essay templates.
* A folder for React components, `/src/components/`.


## Requirements

* Prompts appear in the left column, and the essay preview on the right.
* Each "prompt" consists of a question and an input.
* When the user blurs the input, the app should "save" their response and update the essay preview.
* To generate the essay preview, choose one of the available templates at random.
* Changing one answer should not re-roll the chosen templates of other fields.
* The user's responses in the essay preview should be bold.
* When the user has answered and blurred all questions, an "Edit" button appears.
* When a user clicks "Edit", replace both columns with a centered textarea containing the generated essay content.

Some more details:
* Don't worry about vendor prefixes; target the latest version of Chrome.
* The app should compile without any linter errors.
* Create as many or as few subcomponents as you like.
* Use whatever libraries you want. (But remember: if you worked here, we would
  want to pay attention to payload size. Choose wisely!)
* Eyeball the margins, paddings, and colors.


## When you're done

Remove the `node_modules` directory, zip up this project directory, and send it
back to us. (Or, if you want to, fork our repo on Github and make your changes there,
and send us the repo link.)

Thanks for your time, and good luck! We look forward to hearing from you!
