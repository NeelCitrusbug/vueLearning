const app = Vue.createApp({
    data(){
        return{
            courseGoalA:'Finish the course and learn vue!',
            courseGoalB:'Mater vue!',
            vueLink:'https://vuejs.org/'
        };
    },
    methods:{
        outputGoals(){
            const randomNumber = Math.random();
            
            if (randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal')