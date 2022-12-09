let themebutton = document.getElementById('themebutton')
window.onload = function(){
    themebutton.setAttribute("onclick", "LightMode()")
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

    themebutton.setAttribute('onclick', "DarkMode()")
}

function DarkMode() {
    let roots = [
        firstLightBg = '#202020',
        secondtLightBg = '#lightslategray',
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

    themebutton.setAttribute('onclick', "LightMode()")
}