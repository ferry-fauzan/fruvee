<template>
  <div>
      <!-- <v-container> -->
      <v-row justify="center" >
          <v-col cols="12" md="6" class="text-center justify-center" >
            <v-img
      height="400px"
      width="400px"
      :src='getProductById.pict'
      class="white--text align-end ml-16"
    >
    </v-img>

    <!-- KANAN -->
       <h3 class="mt-8">{{getProductById.name}}</h3>
       <v-divider inset></v-divider>
       <h5 class="mt-2">Harga Per-Kilo: Rp. {{getProductById.price}}</h5>
       <v-divider inset></v-divider>
       <h5 class="my-2">Deskripsi</h5>
       <p>{{getProductById.desc}}</p>
         <v-btn
      rounded
      color="primary"
      dark
      href="https://api.whatsapp.com/send?phone=6285641723138&text=Hai%20Pesan%20Sayur%20dan%20%20buah%20-%20buahanya%20dong%0ANama%20%3A%0APesan%20Sayur%20%3A%0APesan%0ABuah%20%3A%0AAlamat%20Tujuan%20%3A">
      Beli-Hubungi Penjual
    </v-btn>
        </v-col>
      </v-row>

   
      <!-- </v-container> -->
  </div>
</template>

<script>
export default {
  computed:{
    getProductById(){
      return  this.$store.state.products[this.$route.params.id]
    }
  }

}
</script>

<style>

</style>