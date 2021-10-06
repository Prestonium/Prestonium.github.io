new Vue({
    el: "#app",
    data() {
        return {
            imgPath: "",
            type: "",
            category: ""
        }
    },
    methods: {
        getImg() {
            axios
                .get('https://api.waifu.pics' + "/" + this.type + '/' + this.category)
                .then(response => (this.imgPath = response.data.url));
        }
    }
})