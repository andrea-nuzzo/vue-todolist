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
            if(this.input != ""){
                this.todos.push({text:this.input, done:false});
            }
        },

        remove: function(index){
            this.todos.splice(index, 1);
        },

        changeTodo: function(index){
           if(this.todos[index].done == true){
            this.todos[index].done = false;
           }else{
            this.todos[index].done = true;
           }
        },
    }

});