const {createApp} = Vue;

createApp({
    data(){
        return{
            emails: [
                
            ]
        }
    },

    mounted() {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( 
            emailNuova => {
                console.log(emailNuova.data.response);
            this.emails.push (emailNuova.data.response) = emailNuova.data.response;
            });
    }
}) .mount('#app');


//generare 10 indirizzi email 
// stamparli in pagina all’interno di una lista.