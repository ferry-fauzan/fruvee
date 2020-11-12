<template>
  <div>
      <v-container>
          <v-row>
              <v-col>
                  <v-text-field
            label="Name product"
            placeholder="name product"
            outlined
            v-model="name"
          ></v-text-field>
              </v-col>
          </v-row>
              <v-btn @click="add">Add</v-btn>
      </v-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            name: ""
        }
    },
    computed: {
        ...mapGetters([
            'getProduct'
        ])
    },
    methods: {
        add(){
            console.log(this.name);
            const product = {
                name: this.name
            }
            this.$store.dispatch("addProduct", product)
            console.log(this.getProduct)
            this.name = "";
        }
    }
}
</script>

<style>

</style>