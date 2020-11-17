<template>
  <div>
      <v-container>
          <v-row>
              <v-col>
                  <v-text-field
            label="Name product"
            placeholder="name product"
            outlined
            v-model="product.name"
          ></v-text-field>
              </v-col>
              <v-col>
                  <v-text-field
            label="Price Tag"
            placeholder="Price Tag"
            outlined
            v-model="product.price"
          ></v-text-field>
              </v-col>
              <v-col>
                  <v-text-field
            label="Description"
            placeholder="Description"
            outlined
            v-model="product.desc"
          ></v-text-field>
              </v-col>
          </v-row>
              <v-btn @click="add">Add</v-btn>
      </v-container>

        <p>{{product}}</p>
      
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            name: "",
            product: {
                name:'',
                price:'',
                pict:"https://ecs7.tokopedia.net/img/cache/700/product-1/2019/7/15/2114547/2114547_5e0aab14-4035-4893-890b-df8918656332_1080_1080.jpg",
                desc:'',
            }
        }
    },
    computed: {
        ...mapGetters([
            'getProduct'
        ])
    },
    methods: {
        add(){
            this.$store.commit('addProduct',this.product)
        },

    }
}
</script>

<style>

</style>