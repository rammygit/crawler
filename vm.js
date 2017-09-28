
new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        todoText:'',
        todoDesc:'',
        results:  []
    },
    created: function () {
        // `this` points to the vm instance
        axios.get("http://localhost:3001/todo")
            .then(response => {this.results = response.data})
    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        },
        createTodo: function(){
            axios.post('/addTodo', {
                todoText: this.todoText,
                todoDesc: this.todoDesc
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        } // end of create todo
    } // end of methods.
})