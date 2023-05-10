function dateHeaderMain() {
  function getDateContainer() {
    return document.querySelector('.date-container');
  }

  function toTitleCase(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  }
  
  function init() {
    const dateContainer = getDateContainer();
    const date = new Date();

    const weekDay = toTitleCase(date.toLocaleString('uk-UA', { weekday: 'long' }));
    const month = toTitleCase(date.toLocaleString('uk-UA', { month: 'long' }));
    const day = toTitleCase(date.toLocaleString('uk-UA', { day: 'numeric' }));
    dateContainer.innerHTML = `${weekDay}, ${day} ${month}`
  }

  return { init }
}