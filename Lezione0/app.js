const app = Vue.createApp({
    
    data(){
        return {
           temperaturaAttuale : 4
        }
    },    
    methods : {
        salutami(){
            console.log("ciao come va!")
        },
        salutami(nome){
            console.log("ciao come va " + nome);
        },
        showOnScreen(){
            console.log("Ciao la temperatura " + this.temperaturaAttuale)
        }
    }
   
});

app.mount('#appShow');

console.log("Hello from this code");

