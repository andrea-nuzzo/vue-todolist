const app = new Vue({
    el: '#root',

    data:{
        todos:[
            {
               text: "Comprare l'acqua",
               done: true,
            },
            {
                text:'Comprare decorazione Natalizie',
                done: false,
             },
             {
                text:"Fare l'esercizio Vue di Boolean",
                done: true,
             },
        ],
        input: '',
    },

    methods:{
        add: function(){
            for(key in this.todos){
                console.log(key)
            }
            // if(this.input != ""){
            //     this.todos.push({text:this.input, done:false});
            // }
        }
    },

});