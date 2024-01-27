export function sinceLink() {
    if (document.querySelector('#since-link')) {
      const sinceLink = document.querySelector('#since-link');
      const month = document.querySelector('#since-month');
      const year = document.querySelector('#since-year');
      const day = document.querySelector('#since-day');
      const hour = document.querySelector('#since-hour');

      month.onchange = setLink;
      year.onchange = setLink;
      day.onchange = setLink;
      hour.onchange = setLink;

      function setLink() {
        console.log('Running since-link');
        
        const url = 'https://paulcushing.github.io/since.html?m=' + month.value + '&y=' + year.value + '&d=' + day.value + '&h=' + hour.value;

        sinceLink.innerHTML = '<a href="' + url + '">' + url + '</a>';
      }
    }
  }