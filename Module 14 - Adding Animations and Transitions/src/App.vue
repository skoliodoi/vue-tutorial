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
                @leave-cancelled="enterCancelled"
                :css="false">
                  <div
                  v-if="load" 
                  style="width: 300px; height:100px; background-color: green; margin-top:20px">
                  </div>
                </transition>
                <hr>
                <button class="btn btn-primary"
                style="margin-bottom:20px"
                @click = "showAlert == 'app-success-alert' ? showAlert = 'app-danger-alert' : showAlert = 'app-success-alert'"
                >Toggle Alerts</button>
                <transition name="fade" mode="out-in">
                  <component :is="showAlert">

                  </component>
                </transition>
                <hr>
                <button class="btn btn-secondary"
                @click="addItem">Add Item</button>
                <ul class="list-group">
                  <li 
                  @click="removeItem(index)"
                  class="list-group-item" 
                  v-for="(number, index) in numbers"
                  style="cursor: pointer">
                    {{ number }}
                  </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue'
    import SuccessAlert from './SuccessAlert.vue'
    export default {
        components: {
          appDangerAlert: DangerAlert,
          appSuccessAlert: SuccessAlert
        },
        data() {
            return {
              show: false,
              load: true,
              alertAnimation: 'fade',
              elementWidth: 100,
              showAlert: 'app-danger-alert',
              numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
          addItem() {
            let pos = Math.floor(Math.random() * this.numbers.length)
            this.numbers.splice(pos, 0, this.numbers.length + 1)
          },
          removeItem(index) {
            this.numbers.splice(index, 1)
            console.log(index)
          },
          beforeEnter(el) {
            console.log("Before Enter")
            this.elementWidth = 100;
            el.style.width = this.elementWidth + "px";
          },
          enter(el, done) {
            console.log("Enter")
            let round = 1;
            const interval = setInterval(() => {
              el.style.width = (this.elementWidth + round * 10) + "px";
              round++;
              if (round > 20) {
                clearInterval(interval);
                done();
              }
            }, 20);
          },
          afterEnter(el){
            console.log("After Enter")
          },
          enterCancelled(el) {
            console.log("Enter Cancelled")
          },
          beforeLeave(el) {
            console.log("Before Leave")
            this.elementWidth = 300;
            el.style.width = this.elementWidth + "px";
          },
          leave(el, done) {
            console.log("Leave")
            let round = 1;
            const interval = setInterval(() => {
              el.style.width = (this.elementWidth - round * 10) + "px";
              round++;
              if (round > 20) {
                clearInterval(interval);
                done()
              }
            }, 20)
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
