const app = new Vue({
    el: '#root',

    data:{
        todos:[
            {
               text: "Comprare l'acqua",
               done: true,
            },
            {
                text:'Comprare decorazioni Natalizie',
                done: false,
             },
             {
                text:"Fare l'esercizio Vue di Boolean",
                done: true,
             },
        ],
        input: '',
        arrayText: [],
    },

    methods:{
        add: function(){
                if(this.input != ""){
                    this.todos.push({text:this.input, done:false});
                    this.input = '';
                } 
        },

        remove: function(index){
            this.todos.splice(index, 1);
        },

        changeTodo: function(index){
           this.todos[index].done ? this.todos[index].done = false : this.todos[index].done = true
        },
    },
});

