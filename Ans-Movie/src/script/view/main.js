// Import Component
import '../component/search-bar.js';
// Import Jquery
const $ = require('jquery');

const main = () => {
    const upcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=32295151438dc4f0e138e86c12c5ae54';
    const imgUrl = 'https://image.tmdb.org/t/p/w500';

    // Mengambil data API Upcoming Movie
    fetch(upcomingUrl)
        .then(response => response.json())
        .then(responseJson => {
            const movies = responseJson.results;
            let cards = '';

            movies.forEach(movie => {
                cards += showCard(movie);
            });

            // Mengambil Element Modal Upcaming dan memasukkan Cards
            const upcomingMovieContainer = document.querySelector('.data-upcoming-movie');
            upcomingMovieContainer.innerHTML = cards;

            // Menampilkan Detail Movie
            const modalDetailBtn = document.querySelectorAll('.modal-detail-button');

            modalDetailBtn.forEach(button => {
                button.addEventListener('click', function () {
                    const movieId = this.dataset.movieid;

                    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=32295151438dc4f0e138e86c12c5ae54`)
                        .then(response => response.json())
                        .then(movie => {
                            const movieDetail = showMovieDetail(movie);
                            const modalBody = document.querySelector('.modal-body');

                            modalBody.innerHTML = movieDetail;
                        });
                });
            });
            // Tambah Ke bagian Favorite
            const verifikasiVaforite = document.querySelectorAll('.modal-vaforite-button');

            verifikasiVaforite.forEach(buttonFavorite => {
                buttonFavorite.addEventListener('click', function () {
                    const favoriteId = this.dataset.favoriteid;

                    fetch(`https://api.themoviedb.org/3/movie/${favoriteId}?api_key=32295151438dc4f0e138e86c12c5ae54`)
                        .then(response => response.json())
                        .then(movie => {
                            const favoriteMovie = addToFavorite(movie);
                            const modalBody = document.querySelector('.favorite');

                            modalBody.innerHTML = favoriteMovie;
                        });
                });
            });
        })
        .catch(error => {
            showResponseError(error);
        });

    // Mengambil data API Seraching Movie
    const buttonSearch = document.querySelector('.search-button');
    buttonSearch.addEventListener('click', () => {
        // Ambil input Value
        const inputValue = document.querySelector('.keyword-search');
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=32295151438dc4f0e138e86c12c5ae54&language=en-US&query=${inputValue.value}&include_adult=false`)
            .then(response => response.json())
            .then(responseJson => {
                if (inputValue.value === '') {
                    alert('Anda Belum Memasukan Judul Movie!');
                    setTimeout(() => {
                        location.reload();
                    }, 500);
                } else {
                    const movies = responseJson.results;
                    let cards = '';

                    movies.forEach(movie => {
                        cards += showCard(movie);
                    });

                    // Mengambil Element Modal Upcaming dan memasukkan Cards
                    const searchingMovieContainer = document.querySelector('.data-searching-movie');
                    searchingMovieContainer.innerHTML = cards;

                    // Menampilkan Detail Movie
                    const modalDetailBtn = document.querySelectorAll('.modal-detail-button');

                    modalDetailBtn.forEach(button => {
                        button.addEventListener('click', function () {
                            const movieId = this.dataset.movieid;

                            fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=32295151438dc4f0e138e86c12c5ae54`)
                                .then(response => response.json())
                                .then(movie => {
                                    const movieDetail = showMovieDetail(movie);
                                    const modalBody = document.querySelector('.modal-body');

                                    modalBody.innerHTML = movieDetail;
                                });
                        });
                    });

                    // Tambah Ke bagian Favorite
                    const verifikasiVaforite = document.querySelectorAll('.modal-vaforite-button');

                    verifikasiVaforite.forEach(buttonFavorite => {
                        buttonFavorite.addEventListener('click', function () {
                            const favoriteId = this.dataset.favoriteid;

                            fetch(`https://api.themoviedb.org/3/movie/${favoriteId}?api_key=32295151438dc4f0e138e86c12c5ae54`)
                                .then(response => response.json())
                                .then(movie => {
                                    const favoriteMovie = addToFavorite(movie);
                                    const modalBody = document.querySelector('.favorite');

                                    modalBody.innerHTML = favoriteMovie;
                                });
                        });
                    });
                }
            })
            .catch(error => {
                showResponseError(error);
            });
    });

    // Scroll Smooth
    const headerHeight = $('header').outerHeight();

    $('.navbar-nav li a').click(function (e) {
        const targetHref = $(this).attr('href');

        $('html, body').animate(
            {
                scrollTop: $(targetHref).offset().top - headerHeight,
            },
            1000
        );

        e.preventDefault();
    });

    // Error Message
    const showResponseError = (message = 'Uuups... Check your connection!') => {
        alert(message);
    };

    // Fungsi untuk menampilkan cards
    const showCard = _movie => {
        return /*html*/ `
            <div class="card my-3" style="width: 15rem">
                <img src="${imgUrl + _movie.poster_path}" class="card-img-top mt-2" alt="${_movie.title}" />
                <div class="card-body">
                    <h6 class="card-title fw-bold">${_movie.title}</h6>
                    <p class="card-text fs-6">${_movie.release_date}</p>
                    <a href="#" class="btn btn-secondary btn-sm modal-vaforite-button" data-bs-toggle="modal" data-bs-target="#moviefavoriteModal" data-favoriteId="${_movie.id}">Favorite</a>
                    <a href="#" class="btn btn-primary btn-sm modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-movieId="${_movie.id}">Detail</a>
                </div>
            </div>`;
    };
    // Fungsi untuk menampilkan detail Upcoming Movie
    const showMovieDetail = _movie => {
        return /*html*/ `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${imgUrl + _movie.poster_path}" class="img-fluid" alt="${_movie.title}" />
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <strong><p class="fs-4">${_movie.title} (${_movie.release_date})</p></strong>
                            </li>
                            <li class="list-group-item"><strong>Popularity : </strong>${_movie.popularity} K</li>
                            <li class="list-group-item"><strong>Overview : </strong>${_movie.overview}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
    };

    // Tambah ke Favorite
    const addToFavorite = _movie => {
        return /*html*/ `
            <h3 class="fw-bold mt-5">Vaforite Movie</h3>
            <div class="row data-favorite-movie row-cols-4 d-flex justify-content-around mt-5">
                <!-- Card Upcoming Movie -->
                <div class="card my-3" style="width: 15rem">
                    <img src="${imgUrl + _movie.poster_path}" class="card-img-top mt-2" alt="${_movie.title}" />
                    <div class="card-body">
                        <h6 class="card-title fw-bold">${_movie.title}</h6>
                        <p class="card-text fs-6">${_movie.release_date}</p>
                    </div>
                </div>
            </div>`;
    };
};

// Export main
export default main;
