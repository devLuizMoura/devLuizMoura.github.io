const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const linkNavibarMobile = document.querySelector('.mobile__links')
const button = document.querySelector('.burguer');
const listaRepositorios = document.querySelector('.projects ul');

button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active')
})

linkNavibarMobile.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active')
})

window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
})

function getApiGitHub() {
    fetch('https://api.github.com/users/devLuizMoura/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            var data = await res.json()

            data.map(item => {
                let li = document.createElement('li')

                li.innerHTML = `
            <div class="image">
                <img src="assets/gitRepositorio.png" alt="${item.name}">
            </div>
            <div class="projects__info">
                <h3 class="tertiary-title">${item.name}</h3>
                <hr />
                <p> ${item.description}<br>
                (${item.language})</p>
                <h4>                
                <b>Data de Criação:</b> 
                    ${Intl.DateTimeFormat('pt-BR')
                            .format(new Date(item.created_at))}
                </h4>
                
                <p class="link"><a href="${item.html_url}" target="_blank">Acessar &rarr;</a></p>
                
            </div>
            
            `
                console.log(li)
                listaRepositorios.appendChild(li)

            })

        }).catch(e => console.log(e))

}

getApiGitHub()