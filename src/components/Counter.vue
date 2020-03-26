<template>
    <div>
        <h1>Hello Vuex counter</h1>
        {{counter}}
        <button @click="incrementCounter">Increment counter</button>
    </div>
</template>

<script>

export default {
    methods: {
        incrementCounter() {
            this.$store.dispatch('counter/incrementAction', 1)
        }
    },
    computed: {
        counter(){
            return this.$store.getters['counter/counter']
        }
    }
}
</script>