let themebutton = document.querySelectorAll('button.theme')
let lampada = document.querySelectorAll('img.lampada')

window.onload = function () {
    for (let i = 0; i <= themebutton.length; i++) {
        themebutton[i].setAttribute("onclick", "LightMode()")
    }
}


function LightMode() {
    let roots = [
        firstLightBg = '#bdecf13b',
        secondtLightBg = '#2e51b1',
        thirdLightBg = '#60cdef',
        fontLightColor = 'black',
        tableBg = '#60cdef',
        tableHead = '#2e51b1',
        nameFooter = '#60cdef'
    ]

    document.documentElement.style.setProperty('--first-bg', roots[0])

    document.documentElement.style.setProperty('--second-bg', roots[1])

    document.documentElement.style.setProperty('--third-bg', roots[2])

    document.documentElement.style.setProperty('--font-color', roots[3])

    document.documentElement.style.setProperty('--table', roots[4])

    document.documentElement.style.setProperty('--tablehead', roots[5])

    document.documentElement.style.setProperty('--namefooter', roots[6])


    ChangeTheme();
}

function DarkMode() {
    let roots = [
        firstLightBg = '#202020',
        secondtLightBg = 'lightslategray',
        thirdLightBg = '#464646',
        fontLightColor = 'white',
        tableBg = '#727272',
        tableHead = '#494949',
        nameFooter = '#3343d8'
    ]

    document.documentElement.style.setProperty('--first-bg', roots[0])

    document.documentElement.style.setProperty('--second-bg', roots[1])

    document.documentElement.style.setProperty('--third-bg', roots[2])

    document.documentElement.style.setProperty('--font-color', roots[3])

    document.documentElement.style.setProperty('--table', roots[4])

    document.documentElement.style.setProperty('--tablehead', roots[5])

    document.documentElement.style.setProperty('--namefooter', roots[6])

    ChangeTheme();
}

function ChangeTheme() {
    for (let count = 0; count <= themebutton.length; count++) {
        let target = themebutton[count].getAttribute('onclick')
        if (target == 'DarkMode()') {
            themebutton[count].setAttribute('onclick', "LightMode()")
            lampada[count].setAttribute("src", "src/images/lampada-acesa.svg")
        } else {
            themebutton[count].setAttribute('onclick', "DarkMode()")
            lampada[count].setAttribute("src", "src/images/lampada-apagada.svg")
            
        }
    }
}