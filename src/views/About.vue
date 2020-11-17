<template>
  <div class="about">
    <v-row class="mt-8 mb-8">
      <v-col cols="12" md="6">
        <h1 class="ml-10">Promo Buah dan Sayuran dalam semangat di Hari Pahlawan</h1>
        <p class="ml-10 mt-5">Dapatkan potongan harga hingga 50% untuk tiap pembelian buah-sayur dengan berat minimal 10 Kg</p>
        
    <v-btn
      depressed
      color="primary"
      class="ml-16"
    >
      Promo
    </v-btn>

      </v-col>
      <v-col cols="12" md="6">
        <v-img    
        height="200px"
        width="70%"
        src="@/assets/vege.jpg"
        class="white--text align-end ml-15"
        ></v-img>
      </v-col>
    </v-row>



    <!-- INI BUAH PRODUCT -->
    <v-row class="my-8">
      <h1 class="ml-8 mt-8">
      Yuk Pilih Buah
      </h1>
    </v-row>
    <v-row>

       <v-col cols="12" md="3" v-for="(product,index) in listProducts" :key="product.name">
 <v-card
    class="mx-auto"
    max-width="200"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="product.pict"
    >
      
    </v-img>

    <v-card-text class="text--primary pb-0
    ">
      <div>{{product.name}}</div>

    </v-card-text>

    <v-card-actions class="pb-0">
      <v-btn
        color="orange"
        text
        :to="`/node/${index}`"
      >
        Beli Disini
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>

    </v-row>



  <!-- PILIH SAYUR -->
  <v-row class="my-8">
      <h1 class="ml-8 mt-8">
      Yuk Pilih Sayur

      
      </h1>
    </v-row>
    <v-row>
       <v-col cols="12" md="3" v-for="productVege in listProductsVege" :key="productVege">
 <v-card
    class="mx-auto"
    max-width="200"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="productVege.pict"
    >
      
    </v-img>

    <v-card-text class="text--primary pb-0
    ">
      <div>{{productVege.name}}</div>

    </v-card-text>

    <v-card-actions class="pb-0">
      <v-btn
        color="orange"
        text
        
      >
        Beli Disini
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>
    </v-row>

  </div>
</template>


<script>
export default {
  computed:{
    listProducts(){
      return this.$store.state.products
    },
    listProductsVege(){
      return this.$store.state.productsVege
    }
  },
  // mounted(){
  //   console.log(this.listProducts)
  // }
}
</script>