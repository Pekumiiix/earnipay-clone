function toggleSections() {
    const businessSection = document.querySelector('.business')
    const employeesSection = document.querySelector('.employees')
    const employeesButton = document.querySelector('.first-button')
    const businessButton = document.querySelector('.second-button')

    businessButton.addEventListener('click', () => {
        employeesButton.classList.remove('active')
        businessButton.classList.add('active')

        employeesSection.classList.remove('show')
        employeesSection.classList.add('keep')
        businessSection.classList.remove('keep')
        businessSection.classList.add('show')
    })

    employeesButton.addEventListener('click', () => {
        businessButton.classList.remove('active')
        employeesButton.classList.add('active')

        businessSection.classList.remove('show')
        businessSection.classList.add('keep')
        employeesSection.classList.remove('keep')
        employeesSection.classList.add('show')
    })
}

toggleSections()

function toggleMenu() {
    const menuButton = document.querySelector('.menu-bar') 
    const menu = document.querySelector('.menu')

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('show')
    })
}

toggleMenu()