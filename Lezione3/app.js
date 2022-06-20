
Vue.createApp({

    data(){
        return {

            pc :[
                {marca:'acer', os:'linux' , img:'assets/linux.png' , costo:700},
                {marca:'dell' , os:'win64' , img:'assets/win.png' , costo:800},
                {marca:'dellSuper' , os:'win64' , img:'assets/win.png' , costo:1300},
                {marca:'dellPro' , os:'win64' , img:'assets/win.png' , costo:1250},
                {marca:'dellPower' , os:'win64' , img:'assets/win.png' , costo:1800},
                {marca:'apple' , os:'mac' , img:'assets/mac.png', costo:900 },
                {marca:'apple' , os:'mac' , img:'assets/mac.png', costo:900 },
                {marca:'apple' , os:'mac' , img:'assets/mac.png', costo:900 }
            ],
            cercaProdotto :""

        }
    },
    methods : {
        filteredPc(){
            console.log("ok funzione " + this.cercaProdotto)
            return this.pc.filter( myPc => myPc.os == this.cercaProdotto);
        }
    }



}).mount("#app")