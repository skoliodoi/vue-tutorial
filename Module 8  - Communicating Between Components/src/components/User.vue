<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <button @click="changeName">Change my name!</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                :name="name" 
                @nameWasReset="name=$event"
                :resetFn="resetName"
                :userAge="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                :userAge="age"
                :changeAge="editAge"
                @ageWasChanged="age=$event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
          return {
            name: 'Szymon',
            age: 27
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
          changeName() {
            this.name = "Henio";
          },
          resetName() {
            this.name = "Szymon";
          },
          editAge() {
            this.age = 30;
          }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
