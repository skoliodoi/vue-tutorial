<template>
    <div class="container">
        <form class="panel-body">
            <div class="row" v-if="!isSubmitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                  <app-name v-model="namesValue"></app-name>
                  <div class="form-group">
                    <label for="email">Mail:</label>
                    <input type="mail" 
                    class="form-control" v-model="userData.emailValue">
                  </div>
                  <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" 
                    class="form-control" v-model="userData.passValue">
                  </div>
                  <div class="form-group">
                    <p>Store Data?</p>
                    <label for="yes">
                      <input type="radio" 
                      value="Yes"
                      v-model="userData.dataStore"> Yes
                    </label>
                    <label for="no">
                      <input type="radio" 
                      value="No"
                      v-model="userData.dataStore"> No
                    </label>
                  </div>
                 
                
                                        <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                   <button
                    class="btn btn-primary"
                    @click.prevent="isSubmitted=!isSubmitted">Submit!
                  </button>
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" >
            <div v-if="isSubmitted" class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ namesValue }} </p>
                        <p>Mail: {{ userData.emailValue }}</p>
                        <p>Password: {{ userData.passValue }} </p>
                        <p>Store in Database?: {{ userData.dataStore }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Names from './Names.vue'
    export default {
      data() {
        return {
          userData: {
            mailValue: '',
            passValue: '',
            dataStore: true
          },
          isSubmitted: false,
          namesValue: 'Szymon Zygaluk'
        }
      },
      components: {
        appName: Names
      }
    }
</script>

<style>
  .display {
    display: flex;
    flex-direction: column;
    border: solid 1px red;
  }
</style>
