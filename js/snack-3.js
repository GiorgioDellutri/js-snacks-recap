const {createApp} = Vue; 


createApp({
    data() {
        return{
            // Array conversazione
            conversation:[],
            // Messaggio inserito dall'utente
            inputMessage:'',
        };
    },

    methods: {
        // Con la funzione sendMessage aggiungo il messaggio scritto dall'utente alla conversazione inserendolo nell'array 'conversation'
        sendMessage(){
            this.conversation.push({
                sender:'user',
                text: this.inputMessage
            });
        // Svuoto il messaggio dopo averlo inviato
        this.inputMessage= '';
        this.getRandomPhrase();
        },

        getRandomPhrase() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/sentence")
                .then((response) => {
                    this.conversation.push({
                        sender: 'computer',
                        text: response.data.response
                    });
            });
        }
    },

    created() {
        this.getRandomPhrase();
    }

}).mount('#app')

