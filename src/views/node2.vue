<template>
  <div>
      <v-row justify="center">
    <v-col>
      <v-img 
      :src="getProductByIdVege.pict"
      contain
      ></v-img>
    </v-col>
      </v-row>


       <v-row justify="center"  >
          <v-col cols="12" md="6" class="text-center justify-center" >
       <h3 class="mt-8">{{}}</h3>
       <v-divider inset></v-divider>
       <h5 class="mt-2 mb-2">Harga Per-Kilo: Rp. {{}}</h5>
       <v-divider inset></v-divider>
       <h5 class="my-2">Deskripsi</h5>
       <p>{{}}</p>
         <v-btn
      rounded
      color="primary"
      dark
      href="https://api.whatsapp.com/send?phone=6285641723138&text=Hai%20Pesan%20Sayur%20dan%20%20buah%20-%20buahanya%20dong%0ANama%20%3A%0APesan%20Sayur%20%3A%0APesan%0ABuah%20%3A%0AAlamat%20Tujuan%20%3A">
      Beli-Hubungi Penjual
    </v-btn>
        </v-col>
      </v-row>

  </div>
</template>

<script>
export default {
    computed:{
        getProductByIdVege(){
            return this.$store.state.productsVege[this.$route.params.id]
        }
    }

}
</script>

<style>

</style>