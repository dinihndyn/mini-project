<template>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light"> -->
    <nav class="navbar navbar-expand-lg navbar navbar-light" style="background-color: #c5a8b0;">
    
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src='../assets/logo.png' alt="" width="100" height="80" class="logo"  ></a>
                  
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Decoration</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Bouquet</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Flower Story</a>
                    </li>

                </ul>
            </div>
            <div>
                <span class="navbar-brand mb-0 h3" >Cart ( {{ totalQty }} )</span>
            </div>
        </div>
    </nav>
    
</template>

<script>
import { mapGetters } from 'vuex';


export default{
    name: 'headerComponent',
    computed: {
        ...mapGetters(["cart"]),
        totalQty() {
            return this.cart.reduce((a, b) => a+b.qty, 0);

        }
    },
};
</script>

<style scoped>
    nav {
        margin-bottom: 50px;
        background-color: aqua;
    }
    .logo {
        border-radius: 20%;
    }
</style>