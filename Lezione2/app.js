

const app = Vue.createApp({

    data(){
       
       return {
            x:0,
            y:0,
            frase :''

       }
       
    },
    methods : {
        handlerMouse(e){

            //console.log(e)
            //console.log("U HAVE MOUSE MOVE...")
            this.x = e.clientX
            this.y = e.clientY
        },
        handlerMouseOver(){
            this.frase="ciao a tutti"
        },
        handlerMouseLeave(){
            this.frase="";
        }
    }


})

app.mount("#app")