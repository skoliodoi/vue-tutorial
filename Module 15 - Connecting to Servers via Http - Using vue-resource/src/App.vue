<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label>User Name</label>
                  <input class="form-control" type="text" v-model="user.name">
                </div>
                <div class="form-group">
                  <label>Email:</label>
                  <input class="form-control" type="text"
                  v-model="user.email">
                </div>
                <button class="btn btn-primary"
                @click="submit">Submit</button>
                <hr>
                <input type="text" class="form-control"
                v-model="node">
                <hr>
                <button class="btn btn-secondary" @click="fetchData">Fetch</button>
                <ul class="list-group">
                  <li class="list-group-item" v-for="u in users">{{ u.name }} - {{ u.email }}</li>
                </ul>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          user: {
            name: '',
            email: ''
          },
          users: [],
          resource: {},
          node: 'data'
        }
      },
      methods: {
        submit() {
          // this.$http.post('data.json', this.user)
          //   .then(response => {
          //     console.log(response)
          //   }, error => {
          //     console.log(error)
          //   });
          // this.resource.save({}, this.user);
          this.resource.saveAlt(this.user);
        },
        fetchData() {
          // this.$http.get('data.json')
          //   .then(response => {
          //     return response.json();
          //   })
          //   .then(data => {
          //     const returnArray = [];
          //     for (let key in data) {
          //       returnArray.push(data[key]);
          //     }
          //     this.users = returnArray;
          //   });
          this.resource.fetchData({node: this.node})
            .then(response => {
              return response.json();
            })
            .then(data => {
              const returnArray = [];
              for (let key in data) {
                returnArray.push(data[key]);
              }
              this.users = returnArray;
            });
        }
      },
      created() {
        const customActions = {
          saveAlt: {method: 'POST', url: 'alternative.json'},
          fetchData: {method: 'GET'}
        }
        this.resource = this.$resource('{node}.json', {}, customActions);
      }
    }
</script>

<style>
</style>
