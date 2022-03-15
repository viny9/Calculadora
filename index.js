
const result = testes => {
    const view = document.getElementById('results').innerHTML
    document.querySelector('#results').innerHTML = view + testes

}

const clean = () => {
    const view = document.querySelector('#results')
    view.innerHTML = ''
}

const calculate = () => {
    const view = document.querySelector('#results').innerHTML

    if(view) {
       return document.getElementById('results').innerHTML = eval(view)
    } else {
        return document.getElementById('results').innerHTML = ''
    }

}

