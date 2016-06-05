angular.module('starter.services', [])



.factory('Books', function(){
  var books = [{
    id:0,
    title: "First Book",
    author: "John Doe",
    image: "img/catcher.jpg",
    description: "This is a great book that has a plot. The characters exist and they do many things"
  }, {
    id:1,
    title: "Second Book",
    author: "Jane Doe",
    image: "img/enders.jpg",
    description: "This is a great book that has a plot. The characters exist and they do many things"
  }, {
    id:2,
    title: "Third Book",
    author: "Juniper Doe",
    image: "img/download.jpeg",
    description: "This is a great book that has a plot. The characters exist and they do many things"
    }];

  return {
    all: function() {
      return books;
    },
    remove: function(book) {
      books.splice(books.indexOf(book), 1);
    },
    get: function(bookId) {
      for (var i = 0; i < books.length; i++) {
        if (books[i].id === parseInt(bookId)) {
          return books[i];
        }
      }
      return null;
    }
  };

})
