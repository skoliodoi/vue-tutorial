<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  
  <div class="navbar-header">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
  </div>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/portfolio" 
        class="nav-link" 
        active-class="active">Portfolio </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/stocks" 
        class="nav-link" 
        active-class="active">Stocks </router-link>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li class="nav-item"><a href="" class="nav-link">End Day</a></li>
      <li class="nav-item dropdown">
        <a 
        class="nav-link dropdown-toggle" 
        href="#" id="navbarDropdown" 
        role="button" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Save</a>
          <a class="dropdown-item" href="#">Load</a>
        </div>
      </li>
    </ul>

  </div>
</nav>
</template>

<script>
export default {};
</script>

<style scoped>
</style>