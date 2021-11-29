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
    },
    
    methods:{},

});