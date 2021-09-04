new Vue({
    el: '#app',
    data() {
        return {
            yesOrNo: '?',
            yesOrNoClicks: 0,
            choiceInput: '',
            choices: ['']
        }
    },
    methods: {
        insertChoice(){
            this.choices.push(this.choiceInput)
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