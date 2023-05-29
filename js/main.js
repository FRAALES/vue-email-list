const {createApp} = Vue;

createApp({
    data(){
        return{
            emails: [
                '',
                '',
                '',
                ''
            ]
        }
    },

    mounted() {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( 
            response => {
                console.log(response.data.response);
            this.emails = response.data.response;
            });
    }
}) .mount('#app');


//generare 10 indirizzi email 
// stamparli in pagina all’interno di una lista.