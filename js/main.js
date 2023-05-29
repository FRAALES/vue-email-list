const {createApp} = Vue;

createApp({
    data(){
        return{
            email1: '',
            email2: '',
            email3: '',
            email4: '',
            email5: '',
            email6: '',
            email7: '',
            email8: '',
            email9: '',
            email10: '',
        }
    },

    mounted() {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( 
            response => {
                console.log(response.data.response);
            this.email1 = response.data.response;
            });

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( 
            response => {
                console.log(response.data.response);
            this.email2 = response.data.response;
            });

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( 
            response => {
                console.log(response.data.response);
            this.email3 = response.data.response;
            });
        
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( 
            response => {
                console.log(response.data.response);
            this.email4 = response.data.response;
            });
            
    }
}) .mount('#app');


//generare 10 indirizzi email 
// stamparli in pagina all’interno di una lista.