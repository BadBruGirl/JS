"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicalCollection = {
  albums: [{
    title: "Bleach",
    artist: "Nirvana",
    year: "1989"
  },
    {
      title: "Nevermind",
      artist: "Nirvana",
      year: "1991"
    },
    {
      title: "In Utero",
      artist: "Nirvana",
      year: "1993"
    }],
  *[Symbol.iterator]() {
    for (const album of this.albums) {
      yield album;
    }
  }
}

for (const album of musicalCollection) {
  console.log(album);
}