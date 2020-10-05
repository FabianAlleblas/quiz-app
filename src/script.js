const question = document.querySelector('.nav__icon-question')
const bookmark = document.querySelector('.nav__icon-bookmark')
const create = document.querySelector('.nav__icon-create')
const profile = document.querySelector('.nav__icon-profile')

const questionHeading = document.querySelector('.header__question')
const bookmarkHeading = document.querySelector('.header__bookmark')
const createHeading = document.querySelector('.header__create')
const profileHeading = document.querySelector('.header__profile')

const questionContent = document.querySelector('.header__question')
const bookmarkContent = document.querySelector('.header__bookmark')
const createContent = document.querySelector('.header__create')
const profileContent = document.querySelector('.header__profile')

question.addEventListener('click', switchQuestion)
//bookmark.addEventListener('click')
//create.addEventListener('click')
//profile.addEventListener('click')

function switchQuestion() {
  questionHeading.className.toggle('hidden')
}

//function switchBookmark() {}

//function switchCreate() {}

//function switchProfile() {}
