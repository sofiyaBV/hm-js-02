//*Створити об'єкт, який містить список фільмів та їх жанри. Напишіть метод, який виводить на екран список фільмів у вибраному жанрі.

const movies = {
  action: ["Die Hard", "John Wick", "The Matrix"],
  comedy: ["The Hangover", "Bridesmaids", "Step Brothers"],
  drama: ["The Shawshank Redemption", "The Godfather", "Schindler's List"],
  horror: ["The Shining", "A Nightmare on Elm Street", "The Exorcist"],

  getMoviesByGenre: function (genre) {
    const movie = movies[genre];
    if (movie) {
      let list = [];
      movie.forEach((item) => {
        list.push(item);
      });
      return `Фільми у жанрі ${genre}: ${list}`;
    }
    return `Жанр ${genre} не знайдено`;
  },
};

console.log(movies.getMoviesByGenre("horror"));
