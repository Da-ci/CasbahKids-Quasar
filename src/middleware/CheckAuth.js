import axios from 'axios'
import { Notify } from 'quasar'
import Router from '../router/routes.js'

export default function checkAuth() {

    if (localStorage.getItem('bearerToken')) {

        const data = localStorage.getItem('bearerToken')

        axios.post('http://127.0.0.1:8000/api/checkAuth', data)
            .then((response) => {
                if(response.status == 205)
                {
                    console.log(response)
                    Router.push('/dashboard')
                }
            })
            .catch((error) => {
                console.log(error)
                if (error.response) {
                    if (error.response.status == 404) {
                        Notify.create({
                            color: 'red-5',
                            textColor: 'white',
                            icon: 'warning',
                            message: 'Session expiré'
                        })
                    }
                }
                else {
                    console.log("error")
                }

            });
    } else {
        console.log('there are not tokens')
    }

}