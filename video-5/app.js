var myApp = new Vue ({
    el: "#my-app",
    data: {
        counter: 0
    },
    methods: {
        increment: function(inc) {
            this.counter += inc;
        }, 
        decrement: function(dec) {
            this.counter -= dec;
        }
    }
});