// Component Navbar
class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/ `
            <style>
                .navbar {
                    background-color: #2d31fa;
                }
                .navbar-nav {
                    margin-left: 80px;
                }
                .nav-item a {
                    color: white;
                    font-size: 18px;
                }
                .navbar-brand {
                    font-family: 'Pattaya', sans-serif;
                    margin-right: 80px;
                    color: white;
                    font-size: 20px;
                }
                .nav-item a:hover {
                    font-weight: bold;
                    color: white;
                }
                .navbar-brand:hover {
                    color: #00ffdd;
                    cursor: pointer;
                }
            </style>
            <nav class="navbar navbar-expand-lg navbar-dark shadow fixed-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#searching">Searching Movie</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#favoriteMovie">Favorite</a>
                            </li>
                        </ul>
                        <a class="navbar-brand" href="#"> Aan Movie </a>
                    </div>
                </div>
            </nav>`;
    }
}

customElements.define('nav-bar', NavBar);
