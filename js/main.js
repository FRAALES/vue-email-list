const {createApp} = Vue;

createApp({
    data(){
        return{
            emails: []
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( 
                emailNuova => {
                this.emails.push(emailNuova.data.response);
                }
            );
        }
    }
}) .mount('#app');


//generare 10 indirizzi email 
// stamparli in pagina all’interno di una lista.

//Far comparire gli indirizzi email solamente quando sono stati tutti generati.