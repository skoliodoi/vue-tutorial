<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="makeBlue">Load Blue Template</button>
                <button class="btn btn-success"
                @click="makeGreen">Load Green Template</button>
                <button class="btn btn-danger"
                @click="makeRed">Load Red Template</button>
                <hr>
                <component :is="showComponent">
                  <h1>This component is {{ textColor }}</h1>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data() {
          return {
            showComponent: "",
            textColor: ""
          }
        },
        methods: {
          makeBlue() {
            this.showComponent='app-blue';
            this.textColor = "Blue!"
          },
          makeGreen() {
            this.showComponent='app-green';
            this.textColor = "Green!"
          },
          makeRed() {
            this.showComponent='app-red';
            this.textColor = "Red!"
          }
        }
    }
</script>

<style>
</style>
