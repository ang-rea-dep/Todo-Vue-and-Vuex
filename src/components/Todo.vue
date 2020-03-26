<template>
  <div class='ui centered card'>
    <div class='content' v-show="!isEditing">
        <div class='header'>
            {{ todoitem.title }}
        </div>
        <div class='meta'>
            {{ todoitem.project }}
        </div>
        <div class='extra content'>
            <span class='right floated edit icon' v-on:click="showform">
                <i class='edit icon'></i>
            </span>
           <span class='right floated trash icon' v-on:click="deleteTodo(todoitem)">
                <i class='trash icon'></i>
            </span>
        </div>
    </div>
    <div class="content" v-show="isEditing">
        <div class='ui form'>
            <div class='field'>
                <label>Title</label>
                <input type='text' v-model="todoitem.title" >
            </div>
            <div class='field'>
                <label>Project</label>
                <input type='text' v-model="todoitem.project" >
            </div>
            <div class='ui two button attached buttons'>
                <button class='ui basic blue button' v-on:click="hideform">
                    Close X
                </button>
            </div>
        </div>
    </div>
    <div class='ui bottom attached green basic button' v-show="!isEditing && todoitem.done" @click="pendingTodo(todoitem)" disabled>
        Completed
    </div>
    <div class='ui bottom attached red basic button' v-show="!isEditing && !todoitem.done" @click="completeTodo(todoitem)">
        Pending
    </div>
</div>
</template>

<script type="text/javascript">
    export default {
        props: ['todoitem'],
        data() {
            return {
                isEditing: false,
            }
        },
        methods: {
            showform() {
                this.isEditing = true
            },
            hideform() {
                this.isEditing = false
            },
            completeTodo(todo){
                this.$store.dispatch('todos/completeTodo', todo)
            },
            pendingTodo(todo){
                this.$store.dispatch('todos/pendingTodo', todo)
            },
            deleteTodo(todo) {
                this.$store.dispatch('todos/deleteTodo', todo)
            }
        }
    };
</script>