<template>
    <div class="row">
        <div class="card" style="width: 15rem; text-align: center" v-for="item in products" :key="item.id">
        <!-- <div class="card" style="width: 15rem; text-align: center" v-for="item in florist" :key="item.id"> -->
            <img :src="item.imgUrl" class="card-img-top" :alt="item.title">
            <div class="card-body">
                <p class="card-title">{{item.title}}</p>
                <p class="card-text">Rp. {{item.price}}</p>
                <a href="#" @click="addToCart(item)" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>

    </div>
    
</template>
<style>

</style>
<script>
import gql from 'graphql-tag';
import { mapGetters, mapActions} from 'vuex';

export const GET_MY_FLORIST = gql`
    query getFlorist {
    florist {
        title
        price
        id
        imgUrl
    }
}`;

export default {
    name : "productList",
    computed: {
        ...mapGetters(["products"])
    },
    methods: {
        ...mapActions(["getProducts", "addToCart" ])

    },
    mounted() {
        this.getProducts();
        // console.log("🚀 ~ file: productList.vue ~ line 45 ~ mounted ~ comp", comp)
    },
    apollo: {
        florist: {
        // graphql query
        query: GET_MY_FLORIST,
        },
    },

}
</script>
<style>
.card{
    padding: 20 px;
    border: none;
}
</style>
