<template>
  <div class="home">
    
    <v-img 
    src="../assets/bg1.jpg"
    height="530"
    ></v-img>



    <!-- CAROUSEL -->
    <!-- <v-carousel
    cycle
    hide-delimiter-background
    hide-delimiters
    height="530"
   
   
    
  >
    <v-carousel-item
     src="../assets/1N.jpg"
     
    >
      <v-row align="end" justify="center" style='height:530px; padding: 20px'>
    
    <v-btn
      rounded
      color="#004D40"
      dark
      to="/about"
    >
      Our Product
    </v-btn>
  
  </v-row>  
    </v-carousel-item> -->
    
    <!-- <v-carousel-item
     src="../assets/2N.jpg"
     
    >
    
       <v-row align="end" justify="center" style='height:530px; padding: 20px'>
    
    <v-btn
      rounded
      color="yellow"
      dark
    >
      Our Product
    </v-btn>
  
  </v-row>
      </v-sheet>
    </v-carousel-item> -->

    <!-- <v-carousel-item
     src="../assets/3N.jpg"
    >
   
      <v-row align="end" justify="center" style='height:530px; padding: 20px'>
    
    <v-btn
      rounded
      color="#004D40"
      dark
      to="/about"
    >
      Our Product
    </v-btn>
  
  </v-row>
    </v-carousel-item>
  </v-carousel>
 -->


    <!-- KENAPA MEMILIH KAMI -->
    
    <v-row class="mt-10 mb-5">
      <v-col>
      <h1 class="text-center ">
      Mengapa Fruvee
      </h1>
      </v-col>
    </v-row >
    <v-container>
    <v-row>
      <v-col cols="12" md="6" v-for="whyFruvee in isiWhyFruvee" :key="whyFruvee" >
        <h2 class="mx-3 my-3 text-justify">{{whyFruvee.judul}}</h2>
        <p class="mx-3 mt-3 mb-5 text-justify">{{whyFruvee.isi}}</p>
      </v-col>
    </v-row>
    </v-container>





    <!-- TENTANG KAMI -->
    <v-card color="#f5f5f5">
    <v-row class="mt-16 mb-10">
      <v-col cols="12" md="6" class="my-10">
        <h1 class="text-justify mt-5 mx-5">Fruvee</h1>
        <p class="text-justify my-2 mx-5">Fruvee adalah layanan penjualan buah dan sayuran yang menghubungkan antara penjual dan pembeli secara langsung. Dengan Fruvee cara kita dengan mudah untuk mendapatkan akses hidup sehat. Fruvee cara mudah hidup sehat dengan hanya sekali klik!!!</p>
      </v-col>
      <v-col cols="12" md="6" class="my-10">
        <!-- <v-card height="250"> -->
         <v-img
        src="../assets/ab1.jpg"
        height="250"
                      
        contain>
      </v-img>

        <!-- </v-card> -->
      </v-col>
    </v-row>

    </v-card>


    <!-- PRODUCT Kami -->
<v-row>
  <v-col cols="12" class="my-5 mx-5">
<h1>Beli Buah atau Sayur?</h1>
      <p>Mau beli buah dan sayur tanpa ribet? Pake aja Fruvee, buah dan sayur datang dan kamu cuma dirumah</p>
  </v-col>
</v-row>
  
  <v-row class="mb-16">                             
    <v-col cols="12" md="6">
 <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="@/assets/var1.jpg"
    >
      
    </v-img>

    <v-card-subtitle class="pb-0">
      Vegetables
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Kind of vegetables</div>

    </v-card-text>

    <v-card-actions class="pb-0">
      <v-btn
        color="#05AD34"
        text
        to="/about"
      >
        Beli Disini
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>

    <v-col cols="12" md="6">
 <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="@/assets/var2.jpg"
    >
      
    </v-img>

    <v-card-subtitle class="pb-0">
      Fruits
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Kind of fruits</div>

    </v-card-text>

    <v-card-actions class="pb-0">
      <v-btn
        color="#05AD34"
        text
        to="/about"
      >
        Beli Disini
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>
  </v-row>


<!-- PARTNER KAMI -->

    <v-row >
      <v-col cols="12">
        <h1 class="text-center"> Partner Kami</h1>
      </v-col>
    </v-row>
    <v-row class="mb-16">
      <v-col cols="12" md="3" class="" align="center" justify="center">
        <v-img src="@/assets/lazismu.png" width="200"></v-img>
      </v-col>
      <v-col cols="12" md="3" class="" align="center" justify="center">
        <v-img src="@/assets/MM.png" width="200"></v-img>
      </v-col>
      <v-col cols="12" md="3" class="" align="center" justify="center">
        <v-img src="@/assets/NU1.png" width="300"></v-img>
      </v-col>
      <v-col cols="12" md="3" class="" align="center" justify="center">
        <v-img src="@/assets/diy.png" width="150"></v-img>
      </v-col>
    </v-row>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data:()=>{
    return{
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
           {
            src: '../assets/1N.jpg',
          },
          {
            src: '../assets/2N.jpg',
          },
        ],
         alignments: [
        'start',
        'center',
        'end',
      ],
    }
  },
  computed:{
    isiWhyFruvee(){
      return this.$store.state.kenapaFruvee
    }


  }
}
</script>
