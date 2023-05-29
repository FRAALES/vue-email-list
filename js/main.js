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
        .then(function (response)
            {
            const result = response.data;
            });
    }
}) .mount('#app');


//generare 10 indirizzi email 
// stamparli in pagina all’interno di una lista.