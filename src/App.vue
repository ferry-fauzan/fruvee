<template>
  <v-app>
    <v-app-bar
      app
      color="#05AD34"
      
    >
      <div class="head d-flex align-center">
        <!-- <v-img 
        src="@/assets/fl.png"
        width="80"
        class="mb-2 ml-10"
        /> -->
        <h1>FruuVee</h1>
      </div>

      <v-spacer></v-spacer>

    <div class="tombol">
      <v-row class="mt-7">
      <v-btn
        to="/"
        text
        color="#FFFFFF"
        bold
      >
        <span class="mr-2">
          Home
          </span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>

       <v-btn

        text
        to="/about"
        color="#FFFFFF"
      >
        <span class="mr-2">Product</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>


        <v-btn
        to="/tentang"
        text
        color="#FFFFFF"
      >
        <span class="mr-2">About Us</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>

      <v-btn
        to="/admin"
        text
        color="#FFFFFF"
      >
        <span class="mr-2">Admin</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
      <v-text-field
            color="white"
            label="Lagi Nyari Apa ?"
            dense
            solo
            class="mr-5"
          ></v-text-field>
      </v-row>
    </div>

    
    </v-app-bar>

    <v-main>
      <!-- <HelloWorld/> -->
      <!-- <Home/> -->
      <router-view></router-view>
    </v-main>

   <template>
  <v-footer
    color="#008F28"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
     <v-btn

        color="white"
        text
        rounded
        class="my-2"
      >
      <v-list-item-icon class="ml-7">
            <v-icon class="mx-2">mdi-facebook</v-icon>
            <v-icon class="mx-2">mdi-twitter</v-icon>
            <v-icon class="mx-2">mdi-linkedin</v-icon>
            <v-icon class="mx-2">mdi-instagram</v-icon>
          </v-list-item-icon>
      </v-btn>
      <v-col
        class="#05AD34 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Fruvee</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Home from './views/Home';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    // Home
  },

  data: () => ({
    links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    //
  }),
  methods:{
    
  }
};
</script>


<style >
*{
 font-family: 'Raleway', sans-serif;

}

.head{
  font: bold;
  color: #FFFFFF;
  font-size: 70px 70%;
  
}

.tombol{
  font:bold;
}
</style>