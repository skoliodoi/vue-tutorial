<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <exercise-one></exercise-one>
                <exercise-two></exercise-two>
                <exercise-three></exercise-three>
                <exercise-four></exercise-four>
            </div>
        </div>
    </div>
</template>

<script>
    import ExerciseOne from './exercises/ExerciseOne.vue'
    import ExerciseTwo from './exercises/ExerciseTwo.vue'
    import ExerciseThree from './exercises/ExerciseThree.vue'
    import ExerciseFour from './exercises/ExerciseFour.vue'
    export default {
      components: {
        exerciseOne: ExerciseOne,
        exerciseTwo: ExerciseTwo,
        exerciseThree: ExerciseThree,
        exerciseFour: ExerciseFour
      }
    }
</script>

<style>
</style>
