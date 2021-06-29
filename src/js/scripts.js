document.addEventListener('click', clickHandlers);

// store the link plus the API key in a variable
const key = 'RoyKDiqnB1x5y8HB4IgobrZjZY0hSxcD';

const API = `https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=${key}`;

console.log(API);

function clickHandlers(event) {
  if (!event.target.matches('button')) return;
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data.results));
}

/*
function showData(stories) {
  console.log(stories[0].title);

  var looped = '';
  for (let story of stories) {
    console.log(story);
    looped += `
    <div class="item">
        <h3>${story.title}</h3>
        <p>${story.abstract}</p>
    </div>
    `;
  }
  document.querySelector('.stories').innerHTML = looped;
}

*/

function showData(stories) {
  var looped = stories
    .map(
      (result) => `
      <div class="item">
        
        <div><a href="${result.multimedia[0].url}"  target="https://www.nytimes.com/"><img src="${result.multimedia[0].url}"></a> </div>
        <p class="caption">${result.multimedia[0].caption}</p>
        <h3 class="news-title"><a href="${result.url}">${result.title}</a></h3>
        <p class="abstract">${result.abstract}</p>
        </div>
    `,
    )
    .join('');

  document.querySelector('.stories').innerHTML = looped;
}
