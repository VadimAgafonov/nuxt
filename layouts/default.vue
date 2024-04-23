<script setup>
import Header from "~/components/site/Header.vue";
import Footer from "~/components/site/Footer.vue";
</script>

<template>
    <div>
        <Header />
        <slot />
        <Footer />
    </div>
</template>
