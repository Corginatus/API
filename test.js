const requestURL = 'https://spb-classif.gate.petersburg.ru/api/v2/datasets/145/versions/latest/data/166/'

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        var XMLHttpRequest = require('xhr2');
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ2a2lkMDAwMDAwMDAwIiwiZXhwIjoxNjczMDk4NDk3fQ.jU1raLl7kvOfOyksa26Triuq1dCusw4c7j3TuErJS1s");

        xhr.responseType = 'json'

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send()
    })
}

sendRequest('GET', requestURL)
    .then(data => {
        // document.querySelector('.content').innerHTML = `<table class="name"></table>`

        // let row = document.createElement('tr')

        for (key in data['results']) {
            console.log(data['results'][key]['name'])
            console.log(data['results'][key]['address_manual'])
            console.log(data['results'][key]['www'])
            console.log(data['results'][key]['coord'])

            // row.innerHTML = `<td>${data['results'][key]['name']}</td>`

            // let row = document.createElement('tr')
            // row.innerHTML = `<td colspan="2">${key}</td>`
            // document.querySelector('.name').appendChild(row)
            //
            // out.innerHTML += data['results'][key]['name'] + '<br>';
        }

    })
    .catch(err => console.log(err))



