"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  /**
   *
   * @type {Set<string>}
   */
  #books = new Set();

  /**
   * @param {string} books
   */
  constructor(...books) {
    if (this.#checkDuplicates(books)) {
      throw new Error("Found some duplicates");
    }
    books.forEach(book => this.#books.add(book));
  }

  get allBooks() {
    return [...this.#books];
  }

  /**
   * @param {string} title
   * @returns {boolean}
   */
  hasBook(title) {
    return this.#books.has(title);
  }

  /**
   * @param {string} title
   */
  addBook(title) {
    if (this.hasBook(title)) {
      throw new Error(`${title} is already added`);
    }
    this.#books.add(title);
  }

  /**
   * @param {string} title
   */
  removeBook(title) {
    if (!this.hasBook(title)) {
      throw new Error(`Can't find ${title}`);
    }
    this.#books.delete(title);
  }

  /**
   * @param {string[]} arr
   * @returns {boolean}
   */
  #checkDuplicates(arr) {
    return arr.length === new Set().add(...arr).size;
  }
}

const library = new Library("Jain Eyre", "The Goldfinch", "Dune", "The Colour of Magic", "Pyramids", "Reaper Man");

try {
  console.log(library.hasBook("Dune"));
  console.log(library.hasBook("Maskerade"));
} catch (e) {
  console.log(e.message);
}

try {
  library.addBook("Dune");
} catch (e) {
  console.log(e.message);
}

try {
  library.addBook("Maskerade");
} catch (e) {
  console.log(e.message);
}

try {
  library.removeBook("Maskerade");
} catch (e) {
  console.log(e.message);
}

try {
  library.removeBook("Jingo");
} catch (e) {
  console.log(e.message);
}