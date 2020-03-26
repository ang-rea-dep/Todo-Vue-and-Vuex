<template>
    <div>
        <h1>TodoAPP using Vue.js and Vuex</h1>
        <p>Compete Tasks: {{todos.filter(todos => todos.done == true).length}}</p>
        <p>Paused Tasks: {{todos.filter(todos => todos.done == false).length}}</p>

        <create-todo></create-todo>
        <todo v-for="( todo, index ) in todos" v-bind:todoitem="todo" :todo.sync="todo"></todo>
    </div>

</template>

<script>
    import Todo from './Todo'
    import CreateTodo from './CreateTodo'
    // import sweetalert from 'sweetalert';

    export default {
        components: {
            Todo,
            CreateTodo
        },
        methods: {
        },
        computed: {
            todos(){
                return this.$store.getters['todos/showTodo']
            }
        }
    }
</script>