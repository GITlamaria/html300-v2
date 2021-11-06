<template>
  <div id="app">
  <header-slot>
      <!-- headerslot content will display here -->
  </header-slot>
  
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <router-link class="nav-link" to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" to="/erunners">Elite Runners</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" to="/training">Training</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" to="/createroute">Create Route</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link class="nav-link" to="/about">About</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <router-view />     <!-- this is where the components will render when the links are triggered -->
    
    <footer-slot>       <!-- footer slot content -->
    </footer-slot>
  </div>
</template>

<script>
import HeaderSlot from './components/HeaderSlot.vue'
import FooterSlot from './components/FooterSlot.vue'

export default {
  name: 'App',
  components: {
    HeaderSlot,
    FooterSlot,
    
  }
}
</script>

<!-- link to global stylesheet -->
<style scoped src="@/assets/styles/appStyle.css" />
