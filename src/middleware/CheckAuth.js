import axios from 'axios'

export default function checkAuth() {
    if (localStorage.getItem('loginToken')) {
        const data = localStorage.getItem('loginToken')

        axios.post('http://127.0.0.1:8000/api/checkAuth', data)
            .then(function (response) {
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            });
    } else {
        console.log('there are not tokens')
    }

}