<template>
  <BaseView>
    <section>
      <h1>Clientes</h1>
      <CustomerList />
    </section>
  </BaseView>
</template>

<script setup lang="ts">
import BaseView from "@/components/BaseView.vue";
import CustomerList from "@/components/CustomerList.vue";
</script>
