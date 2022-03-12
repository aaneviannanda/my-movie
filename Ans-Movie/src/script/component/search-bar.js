// component Search Bar
class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('.search-button').value;
    }

    render() {
        this.innerHTML = /*html*/ `
        <style>
            .searching {
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('https://cdn.hipwallpaper.com/i/50/67/cYouQ1.jpg');
            }
            h2 {
                color: white;
                font-size: 40px;
                text-shadow: 2px 1px rgba(0, 0, 0, 0.5);
            }
        </style>
        <div class="container-fluid searching text-center mt-5" id="searching">
            <div class="row d-flex justify-content-center flex-column text-center text-white">
                <h2 class="my-3">Searching Movie</h2>
                <h4 class="my-1">Masukan judul film favoritmu...</h4>
            </div>
            <div class="row d-flex justify-content-center mt-5">
                <div class="col-md-6">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control keyword-search" placeholder="Search movie..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-primary search-button" type="button">Search</button>
                        </div>
                    </div>
                    <p class="text-muted">contoh: Marvel, Avengers, Harry Potter</p>
                </div>
            </div>
            <div class="row data-searching-movie row-cols-4 d-flex justify-content-around mt-5 ms-3 me-3">
                <!-- Card Search Movie -->
            </div>
        </div>
        `;

        this.querySelector('.search-button').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);
