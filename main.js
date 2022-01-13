//Organizing codes in objects format

// Constructor for marking books objects:

const books = {
    title: " ",
    author: " ",
    pages: 120,
    isRead: true,
  }
  
  {
    title: " ",
    author: " ",
    pages: 120,
    isRead: true,
  }

  {
    title: " ",
    author: " ",
    pages: 120,
    isRead: true,
  }

 {
    title: " ",
    author: " ",
    pages: 120,
    isRead: true,
  }

  function printName(info) {
    books.forEach(book => {
    for (let key in book) {
        console.log(`${key}: ${book[key]}`);
    }
})
};
