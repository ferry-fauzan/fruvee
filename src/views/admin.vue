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
     

        <!-- <p>{{product}}</p> -->

         <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Price
          </th>
          <th class="text-left">
            Pict
          </th>
          <th class="text-left">
            Desc
          </th>
            <th class="text-left">
            Action
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item,index) in getProduct"
          :key="item.name"
        >
          <td>{{ item.name}}</td>
          <td>{{ item.price}}</td>
          <td><v-img :src="item.pict" style="width:50px"></v-img></td>
          <td>{{ item.desc}}</td>
          <td><v-btn @click="del(index)">Delete</v-btn></td>
          <td><v-btn @click="edit(index)">Edit</v-btn></td>
          <td><v-btn @click="save(index)">Save</v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
      
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
            'getProduct',
         'getProductVege'
        ]
        )
        
           
        
    },
    methods: {
        add(){
            this.$store.commit('addProduct',this.product)
        },
        del(index){
            this.$store.commit('deleteProduct',index)
        },
        edit(id){
            this.getProduct[id]
            console.log(this.getProduct[id])
            this.product.name=this.getProduct[id].name
            this.product.price=this.getProduct[id].price
            this.product.pict=this.getProduct[id].pict
            this.product.desc=this.getProduct[id].desc
            console.log(this.product)
        },
        save(id){
            const product = this.product
            this.$store.commit('editProduct', product, id)
        }

    }
}
</script>

<style>

</style>