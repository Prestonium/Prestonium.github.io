new Vue({
    el: '#app',
    data() {
        return {
            numberOfCards: '',
            info: null
        }
    },
    computed: {},
    methods: {
        getCards() {
            axios
                .get('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=' + this.numberOfCards)
                .then(response => (this.info = response.data.cards));
        },
        getPosition(card) {
            if (Math.random() < .5) {

                return 'Upright'
            } else {
                return 'Reversed'
            }
        },
        getImgPath(card) {
            prefix = String(card.name_short).substring(0, 2)
            suffix = card.value_int
            if (String(suffix).length < 2) {
                suffix = "0" + suffix;
            }
            suffix = suffix + '.jpeg'
            if (card.type == 'minor') {
                return 'cards/' + prefix + suffix;
            } else if (card.type == 'major') {
                return 'cards/ar' + suffix
            }
        },
        getMeaning(position, card){
            if(position == 'Upright'){
                return card.meaning_up
            }else if(position == 'Reversed'){
                return card.meaning_rev
            }
        },
        rotated(position){
            if(position == 'Reversed'){
                return {rotate:true}
            }
            return {rotate:false}
        }
    }
})