document.getElementById('copy-btn').addEventListener('click', function() {
  var text = this.getAttribute('data-clipboard-text');
  navigator.clipboard.writeText(text).then(function() {
    alert('Text copied to clipboard!');
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
});
[
  {
    "title": "ZAKÁ HÓMÉS",
    "content": "This is the content of page 1.",
    "url": "ZAKÁ.html"
  },
]
function search(query) {
  fetch('ZAKÁ.html')
    .then(response => response.json())
    .then(data => {
      const results = data.filter(item => {
        return item.title.toLowerCase().includes(query.toLowerCase()) || item.content.toLowerCase().includes(query.toLowerCase());
      });
      displayResults(results);
    });
}

function displayResults(results) {
  const searchResults = document.getElementById('search-container');
  searchResults.innerHTML = 'ZAKÁ.html';
  results.forEach(result => {
    const resultHTML = `
      <div>
        <h2><a href="${result.url}">${result.title}</a></h2>
        <p>${result.content}</p>
      </div>
    `;
    searchResults.innerHTML += resultHTML;
  });
}
document.getElementById('search-bar').addEventListener('submit', function(event) {
  event.preventDefault();
  const query = document.getElementById('search-bar').value;
  search(query);
});