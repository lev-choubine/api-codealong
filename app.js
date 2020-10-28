
const genre = 'mystery';
function appendBookToDom(cover, author, title) {
     const titleH1 = document.createElement('h3');
     titleH1.textContent=title;
     document.querySelector(`#display-book`).append(titleH1);

}

    //do anything with json

    function fetchBook(genre){
   
    fetch(`http://openlibrary.org/subjects/${genre}.json`)
.then(res => res.json())
.then(json => { 
    const randomBook = getRandomBook(json.works);
    console.log(randomBook);

    const title =randomBook.title;
    const author =randomBook.authors[0].name;
    const cover =`http://covers.openlibrary.org/b'/ID/${randomBook.cover_id}-M.jpg`;
    
    appendBookToDom(cover, author, title);

})}
;

function getRandomBook(books) {
    const randomIndex = Math.floor(Math.random() * books.length)
    return books[randomIndex]
};

function getAuthor(book) {
    return book.authors[0].name;
}


fetchBook(genre);






