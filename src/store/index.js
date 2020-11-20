import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        numb: 0,
        user: '',
        products: [{
                name: "Apel",
                price: "10.000",
                pict: require('@/assets/apel.jpg'),
                desc: "Ditanam dan dirawat secara organik diatas tanah yang subur serta kaya akan kandungan mineral untuk menghasilkan buah yang terbaik  ",
                // id: 1
            },
            {
                name: "Pisang",
                price: "20.000",
                pict: require('@/assets/banana.jpg'),
                desc: 'Ditanam dan dirawat secara organik diatas tanah yang subur serta kaya akan kandungan mineral untuk menghasilkan buah yang terbaik',
                // id: 2

            },
            {
                name: "Durian",
                price: "20.000",
                pict: require('@/assets/durian.jpg'),
                desc: "Ditanam dan dirawat secara organik diatas tanah yang subur serta kaya akan kandungan mineral untuk menghasilkan buah yang terbaik",
                // id: 3
            },
            {
                name: "Semangka",
                price: "20.000",
                pict: require('@/assets/semangka.jpg'),
                desc: 'Ditanam dan dirawat secara organik diatas tanah yang subur serta kaya akan kandungan mineral untuk menghasilkan buah yang terbaik',
                // id: 4
            },
        ],
        productsVege: [{
                name: "Lombok",
                price: "10.000",
                pict: require('@/assets/lombok.jpg'),
                desc: "Ditanam dan dirawat secara organik diatas tanah yang subur serta kaya akan kandungan mineral untuk menghasilkan buah yang terbaik  ",
                id: 100
            },
            {
                name: "Paprika",
                price: "20.000",
                pict: require('@/assets/paprika.jpg'),
                desc: 'Ditanam dan dirawat secara organik diatas tanah yang subur serta kaya akan kandungan mineral untuk menghasilkan buah yang terbaik',
                id: 200

            },
            {
                name: "Tomat",
                price: "20.000",
                pict: require('@/assets/tomat.jpg'),
                desc: "Ditanam dan dirawat secara organik diatas tanah yang subur serta kaya akan kandungan mineral untuk menghasilkan buah yang terbaik",
                id: 300
            },
            {
                name: "Wortel",
                price: "20.000",
                pict: require('@/assets/wortel.jpg'),
                desc: 'Ditanam dan dirawat secara organik diatas tanah yang subur serta kaya akan kandungan mineral untuk menghasilkan buah yang terbaik',
                id: 400
            },
        ],
        kenapaFruvee: [{
                judul: "Belanja Mudah",
                isi: "Belanja kebutuhan sehari-hari tanpa ribet. Hanya dengan sekali klik, barang yang anda pesan akan sampai kepada anda. Pemesanan dijamin akan tepat waktu, sesuai dengan pesanan. Kita akan menggaransi semua jika ada pesanan yang tidak sesuai. Belanja di Fruvee lebih hemat dan mudah"
            },
            {
                judul: "Hidup Lebih Sehat",
                isi: "Mari ubah gaya hidup kita menjadi lebih sehat dengan mengkonsumsi makanan yang bergizi dan bermanfaat bagi tubuh. Investaikan kesehatan anda mulai dari sekarang, denagn fruvee pilih makanan sehat sesuka kamu dan semuanya akan sampai ditempat kamu tepat waktu dan sesuai"
            }
        ]
    },
    getters: {
        getProduct(state) {
            return state.products
        },
        getProductVege(state) {
            return state.productVege
        }
    },
    mutations: {
        addProduct(state, data) {
            state.products.push(data)
        },
        deleteProduct(state, id) {
            state.products.splice(id, 1)
        },
        editProduct(state, product, id) {
            console.log('gghj', product);
            state.products[id] = product
            console.log('yhjhj', state.products[id])
            console.log(state.products)
        }
        // addNumb(state) {
        //     state.numb++
        // },
        // addUser(state, data) {
        //     state.user = data
        // }
    },
    actions: {
        addProduct({ commit }, data) {
            commit('addProduct', data)
        },
        deleteProduct({ commit }, data) {
            commit('deleteProduct', data)
        },
        // getUser({ commit }) {
        //     fetch('https://jsonplaceholder.typicode.com/todos/1')
        //         .then(response => response.json())
        //         .then(json => commit('addUser', json))
        // }
    },
    modules: {}
})