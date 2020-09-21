<template>
<div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks: {{ clickCounter }}</p>
</div>
</template>

<script>
    import * as types from '../store/types'
    import {mapGetters} from "vuex";
    export default {
        computed: {
          ...mapGetters({
            doubleCounter: types.DOUBLE_COUNTER,
            clickCoumter: types.CLICK_COUNTER
          })
        }
    }
</script>