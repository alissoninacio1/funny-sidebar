const aside = document.querySelector('aside');
const icon = aside.querySelector('.menu-icon');
const li = aside.getElementsByClassName('nav-item')

icon.onclick = () => {
    aside.classList.toggle('expand');
}

for (const i of li) {
    i.onclick = activeLi;
}

function activeLi() {
    const list = Array.from(li)
    list.forEach(e => e.classList.remove('active'))
    this.classList.add('active')
}