
new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        results:  []
    },
    created: function () {
        // `this` points to the vm instance
        axios.get("http://localhost:3001/todo")
            .then(response => {this.results = response.data})
    }
})