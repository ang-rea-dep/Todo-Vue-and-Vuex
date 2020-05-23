export const todoStore = {
    namespaced: true,
    state: {
        todos: [{
            title: 'Todo A',
            project: 'Project A',
            done: false
        }, {
            title: 'Todo B',
            project: 'Project B',
            done: true
        }, {
            title: 'Todo C',
            project: 'Project C',
            done: true
        }]
    },
    mutations: {
        completeTodo(state, payload) {
            const todoIndex = state.todos.indexOf(payload);
            state.todos[todoIndex].done = true;
        },
        pendingTodo(state, payload) {
            const todoIndex = state.todos.indexOf(payload);
            state.todos[todoIndex].done = false;
        },
        deleteTodo(state, payload) {
            const todoIndex = state.todos.indexOf(payload);
            console.log(todoIndex);
            state.todos.splice(todoIndex, 1);
        },
        addTodo(state, todo) {
            state.todos.push({
                title: todo.title,
                project: todo.project,
                done: todo.done
            });
            // sweetalert('Success!', 'To-Do created!', 'success');
        }
    },
    actions: {
        completeTodo({ commit }, payload) {
            commit('completeTodo', payload)
        },
        pendingTodo(context, payload) {
            context.commit('pendingTodo', payload)
        },
        deleteTodo({ commit }, payload) {
            commit('deleteTodo', payload)
        },
        addTodo({ commit }, todo) {
            commit('addTodo', todo)
        }
    },
    getters: {
        showTodo(state) {
            return state.todos
        }
    }
}