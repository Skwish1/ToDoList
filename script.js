const App = {

    data() {
        return {
            plHolText: 'Введите задачу',
            inpValue: '',
            allTasks: [],
        }
    },

    mounted() {
        if (localStorage.getItem('Задача')) {
          try {
            this.allTasks = JSON.parse(localStorage.getItem('Задача'))
          } catch(e) {
            localStorage.removeItem('Задача')
          }
        }
    },

    methods: {
        inpList(event) {
            this.inpValue = event.target.value
            if(this.inpValue.length > 100) {
                this.inpValue = ""
            }
        },
        addTask() {
            if(this.inpValue.length == 0) {
                alert('Нужно ввести задачу :)')
            } else {
                this.allTasks.push(this.inpValue)
                this.inpValue = ''
                this.saveTask()
            }
        },
        completeTask(index) {
            this.allTasks.splice(index, 1);
            this.saveTask();
            alert('На одно дело стало меньше :)')
        },
        removeTask(index) {
            this.allTasks.splice(index, 1);
            this.saveTask();
        },
        saveTask() {
            localStorage.setItem('Задача', JSON.stringify(this.allTasks))
            JSON.parse(localStorage.getItem('Задача'))
        }
    }
}

const startApp = Vue.createApp(App)

startApp.mount('.container')
