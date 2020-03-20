<template>
    <div id="app">
        <counter></counter>
        <todo-list></todo-list>
    </div>
</template>

<script>
import TodoList from './components/TodoList'
import Counter from './components/Counter'

export default {
    name: 'App',
    components: {
        TodoList,
        Counter
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
