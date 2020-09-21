<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 69, duration: 750})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 420, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        methods: {
          ...mapActions([
            'asyncIncrement',
            'asyncDecrement'
          ])
        }
    }
</script>