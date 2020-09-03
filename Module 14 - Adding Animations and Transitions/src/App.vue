<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <select v-model="alertAnimation">
                  <option value="fade">Fade</option>
                  <option value="slide">Slide</option>
                </select>
                <hr>
                <button class="btn btn-success"
                @click="show=!show">Show alert</button>
                <transition :name="alertAnimation">
                  <div class="alert alert-info"
                  v-if="show">Some info</div>
                </transition>
                <transition :name="alertAnimation">
                  <div class="alert alert-info info"
                  v-if="show">Some new info</div>
                </transition>
                <transition  
                appear
                enter-active-class="animate__animated animate__rubberBand"
                leave-active-class="animate__animated animate__swing">
                  <div class="alert alert-info"
                  v-if="show">Some other info</div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                  <div class="alert alert-info"
                  v-if="show"
                  key="info">Some newer info</div>
                  <div class="alert alert-warning"
                  v-else
                  key="warning">Some newer warning</div>
                </transition>
                <hr>
                <hr>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load/Remove Element</button>
                <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled"
                
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="enterCancelled">
                  <div
                  v-if="load" 
                  style="width: 100px; height:100px; background-color: green; margin-top:20px"></div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              show: false,
              load: true,
              alertAnimation: 'fade'
            }
        },
        methods: {
          beforeEnter(el) {
            console.log("Before Enter")
          },
          enter(el, done) {
            console.log("Enter")
            done();
          },
          afterEnter(el){
            console.log("After Enter")
          },
          enterCancelled(el) {
            console.log("Enter Cancelled")
          },
          beforeLeave(el) {
            console.log("Before Leave")
          },
          leave(el, done) {
            console.log("Leave")
            done()
          },
          afterLeave(el) {
            console.log("After Leave")
          },
          leaveCancelled(el) {
            console.log("Leave Cancelled")
          }
        }
    }
</script>

<style>

 .fade-enter {
   opacity: 0;
 }

 .fade-enter-active {
   transition: opacity 1s;
 }
 .fade-leave {
 }

 .fade-leave-active {
   transition: opacity 1s;
   opacity: 0;
 }
 .slide-enter {
  
 }

 .slide-enter-active {
   animation: slide-in 1s ease-out forwards;
 }
 .slide-leave {
  
 }

 .slide-leave-active {
   animation: slide-out 1s ease-out forwards;
 }

 @keyframes slide-in {
   from {
     transform: translateY(20px);
   } to {
     transform: translateY(0);
   }
 }
 @keyframes slide-out {
   from {
     transform: translateY(0);
   } to {
     transform: translateY(20px);
   }
 }
</style>
