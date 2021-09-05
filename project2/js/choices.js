new Vue({
    el: '#app',
    data() {
        return {
            yesOrNo: '?',
            yesOrNoClicks: 0,
            choiceInput: '',
            choices: [],
            choiceMade: false,
            choice: {}

        }
    },
    methods: {
        reset(){
            this.choiceInput = ''
            this.choices = []
            this.choice = {}
            this.choiceMade = false
        },
        pick(){
            this.choice = this.choices[Math.floor(Math.random() * this.choices.length)]
            this.choice.chosen = true
            this.choiceMade = true
        },
        insertChoice(){
            this.choices.push({
                choice: this.choiceInput,
                chosen: false
            })
            this.choiceInput = ''
        },
        generateYesOrNo() {
            this.yesOrNoClicks = this.yesOrNoClicks + 1
            if (Math.random() < .5){
                this.yesOrNo = 'Yes'
            }
            else {
                this.yesOrNo = 'No'
            }
        }
    }
})