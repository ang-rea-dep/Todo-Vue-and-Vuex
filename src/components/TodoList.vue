<template>
    <div>
        <p>Compete Tasks: {{todos.filter(todos => todos.done == true).length}}</p>
        <p>Paused Tasks: {{todos.filter(todos => todos.done == false).length}}</p>

        <create-todo v-on:add-todo="addTodoitem"></create-todo>
        <todo v-for="( todo, index ) in todos" v-bind:todoitem="todo" :todo.sync="todo"></todo>
    </div>

</template>

<script>
    import Todo from './Todo'
    import CreateTodo from './CreateTodo'
    // import sweetalert from 'sweetalert';

    export default {
        // props: ['todos'],
        // data: {
        //     todos {
        //         return this.$store.getters['todos/showTodo']
        //     }
        // },
        components: {
            Todo,
            CreateTodo
        },
        methods: {
            // deletetodoitem(todo) {
            //     const todoIndex = this.todos.indexOf(todo);
            //     this.todos.splice(todoIndex, 1);
            // },
            addTodoitem(todo) {
                console.log(todo)
                this.todos.push({
                    title: todo.title,
                    project: todo.project,
                    done: todo.done
                });
                // sweetalert('Success!', 'To-Do created!', 'success');
            },
            // completetodo(todo) {
            //     const todoIndex = this.todos.indexOf(todo);
            //     this.todos[todoIndex].done = true;
            // },
            // pendingtodo(todo) {
            //     const todoIndex = this.todos.indexOf(todo);
            //     this.todos[todoIndex].done = false;
            // }
        },
        computed: {
            todos(){
                return this.$store.getters['todos/showTodo']
            }
        }
    }
</script>