

const app = Vue.createApp({

    data(){
        return {
            numeroPosti :0,
            materiale :'',
            colore : '#5e34eb',
            showDivano : true,
            awesome : false,
            numero : 13
        }
    },
    methods : {

        changeToRed(){
            this.colore = '#d11800';
        },
        awesomeFun(){
            this.awesome = !this.awesome;
        }

    }

})

app.mount("#app")