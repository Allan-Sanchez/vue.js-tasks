
const app = new Vue({
    el:'#app',
    data:{
        title:'GYM',
        tasks:[],
        newTask:'',
    },
    methods: {
        addTask(){
            if (this.newTask !== '') {
                
                this.tasks.push({
                    name:this.newTask,
                    state:false,
                });
            }
            this.newTask= '';
            localStorage.setItem('tasks',JSON.stringify(this.tasks));
        },
        updateTask(index){
            this.tasks[index].state = true;
            localStorage.setItem('tasks',JSON.stringify(this.tasks));
        },
        deleteTask(index){
            this.tasks.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(this.tasks));
        }
    },
    created() {
        let datos = JSON.parse(localStorage.getItem('tasks'));
        if (datos === null) {
            this.tasks = [];
        }else{
            this.tasks = datos;
        }
    },
});