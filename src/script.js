const question = document.querySelector('.nav__icon-question')
const bookmark = document.querySelector('.nav__icon-bookmark')
const create = document.querySelector('.nav__icon-create')
const profile = document.querySelector('.nav__icon-profile')

const questionHeading = document.querySelector('.header__question')
const bookmarkHeading = document.querySelector('.header__bookmark')
const createHeading = document.querySelector('.header__create')
const profileHeading = document.querySelector('.header__profile')

const questionContent = document.querySelector('.content-question')
const bookmarkContent = document.querySelector('.content-bookmark')
const createContent = document.querySelector('.content-create')
const profileContent = document.querySelector('.content-profile')

question.addEventListener('click', switchQuestion)
bookmark.addEventListener('click', switchBookmark)
create.addEventListener('click', switchCreate)
profile.addEventListener('click', switchProfile)

function switchQuestion() {
  questionHeading.classList.remove('hidden')
  bookmarkHeading.classList.add('hidden')
  createHeading.classList.add('hidden')
  profileHeading.classList.add('hidden')
  question.classList.add('nav__icon--active')
  bookmark.classList.remove('nav__icon--active')
  create.classList.remove('nav__icon--active')
  profile.classList.remove('nav__icon--active')
  questionContent.classList.remove('hidden')
  bookmarkContent.classList.add('hidden')
  createContent.classList.add('hidden')
  profileContent.classList.add('hidden')
}

function switchBookmark() {
  bookmarkHeading.classList.remove('hidden')
  questionHeading.classList.add('hidden')
  createHeading.classList.add('hidden')
  profileHeading.classList.add('hidden')
  bookmark.classList.add('nav__icon--active')
  question.classList.remove('nav__icon--active')
  create.classList.remove('nav__icon--active')
  profile.classList.remove('nav__icon--active')
  bookmarkContent.classList.remove('hidden')
  questionContent.classList.add('hidden')
  createContent.classList.add('hidden')
  profileContent.classList.add('hidden')
}

function switchCreate() {
  createHeading.classList.remove('hidden')
  bookmarkHeading.classList.add('hidden')
  questionHeading.classList.add('hidden')
  profileHeading.classList.add('hidden')
  create.classList.add('nav__icon--active')
  bookmark.classList.remove('nav__icon--active')
  question.classList.remove('nav__icon--active')
  profile.classList.remove('nav__icon--active')
  createContent.classList.remove('hidden')
  bookmarkContent.classList.add('hidden')
  questionContent.classList.add('hidden')
  profileContent.classList.add('hidden')
}

function switchProfile() {
  profileHeading.classList.remove('hidden')
  bookmarkHeading.classList.add('hidden')
  createHeading.classList.add('hidden')
  questionHeading.classList.add('hidden')
  profile.classList.add('nav__icon--active')
  bookmark.classList.remove('nav__icon--active')
  create.classList.remove('nav__icon--active')
  question.classList.remove('nav__icon--active')
  profileContent.classList.remove('hidden')
  bookmarkContent.classList.add('hidden')
  createContent.classList.add('hidden')
  questionContent.classList.add('hidden')
}
