const requestURL = 'https://spb-classif.gate.petersburg.ru/api/v2/datasets/139/versions/latest/data/569/'

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

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
    .then(data => console.log((data)))
    .catch(err => console.log(err))