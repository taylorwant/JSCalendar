window.addEventListener('click', e => {
  console.log(e.target)
  if (e.target.classList.contains("option")) {
    e.target.classList.toggle("active")
    e.target.classList.toggle("strikethrough")
    remakeList()
  } else if (e.target.classList.contains("select")) {
    const options = {
      "location" : document.querySelectorAll(".option.location"),
      "date" : document.querySelectorAll(".option.date"),
      "content" : document.querySelectorAll(".option.content")
    }
    console.log(options)
    let type = e.target.classList[2]
    let toggle = e.target.classList[1]
    if (toggle == "deselectall") {
      options[type].forEach( item => {
        item.classList.remove("active")
        item.classList.add("strikethrough")
      })
    } else if (toggle == "selectall") {
      options[type].forEach( item => {
        item.classList.add("active")
        item.classList.remove("strikethrough")
      })
    }
    remakeList()
  }
})


function remakeList() {
  const rows = document.querySelectorAll(".coursecard")
  // console.log(rows)
  updatePreferences()
  rows.forEach(row => {
    // console.log(row)
    // console.log(preferences)
    // console.log(row.dataset.location)
    // console.log(preferences.location)
    // console.log(preferences.location.includes(row.dataset.location))
    if (preferences.location.includes(row.dataset.location) && preferences.course.includes(row.dataset.course) && preferences.session.includes(row.dataset.session)) {
      row.classList.remove("hidden")
    } else {
      row.classList.add("hidden")
    }
  })
}

function updatePreferences() {
  preferences = {
    'location': [],
    'session': [],
    'course': []
  }
  const options = document.querySelectorAll(".option")
  // console.log(options)
  options.forEach(chosenOption => {
    if (!chosenOption.classList.contains("strikethrough")) {
      preferences[chosenOption.dataset.type].push(chosenOption.dataset[chosenOption.dataset.type])
    }
  })
  // console.log(preferences)
}
