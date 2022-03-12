// Component Welcome
class WelcomeBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/ `
            <style>
                .welcome {
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://interpret.la/wp-content/uploads/2020/06/Digital-Entertainment-1.png');
                    height: 100vh;
                }
                h1 {
                    color: white;
                    font-size: 50px;
                    text-shadow: 2px 1px rgba(0, 0, 0, 0.5);
                }
                h4 {
                    color: white;
                    font-size: 23px;
                    text-shadow: 2px 1px rgba(0, 0, 0, 0.5);
                }
            </style>
            <div class="welcome container-fluid d-flex" id="home">
                <div class="container d-flex justify-content-center flex-column">
                    <div class="row d-flex justify-content-center flex-column text-center">
                        <h1 class="my-3">Aan Movie</h1>
                        <h4 class="my-3 cari">Cari film favorite mu dan temukan kejutan di dalamnya...</h4>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define('welcome-bar', WelcomeBar);
