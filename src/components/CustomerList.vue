<template>
  <article class="customers">
    <CustomerListItem
      :image="logoAbitrigo"
      name="Abitrigo"
      url="https://www.abitrigo.com.br"
    />
    <CustomerListItem
      :image="logoBunge"
      name="Bunge"
      url="https://www.bunge.com.br"
    />
    <CustomerListItem
      :image="logoMassaLeve"
      name="Massa Leve"
      url="https://www.massaleve.com.br"
    />
    <CustomerListItem
      :image="logoBigFrango"
      name="Big Frango"
      url="https://jbs.com.br"
    />
    <CustomerListItem
      :image="logoSeara"
      name="Seara"
      url="https://www.seara.com.br"
    />
    <CustomerListItem
      :image="logoAmavita"
      name="Amavita Alimentos"
      url="http://amavitaalimentos.com.br"
    />
    <CustomerListItem
      :image="logoMoinhoPaulista"
      name="Moinho Paulista"
      url="https://nita.com.br"
    />
    <CustomerListItem
      :image="logoMoinhoHortolandia"
      name="Moinho Hortolândia"
      url="https://moinhohortolandia.com.br"
    />
    <CustomerListItem
      :image="logoMoinhoIguacuMirim"
      name="Moinho Guaçu Mirim"
      url="http://moinhoguacumirim.com.br"
    />
    <CustomerListItem
      :image="logoIntermedica"
      name="Intermédica"
      url="https://www.gndi.com.br"
    />
    <CustomerListItem
      :image="logoInterodonto"
      name="Interodonto"
      url="https://www.gndi.com.br/odonto/sobre-a-interodonto"
    />
    <CustomerListItem
      :image="logoInformaEconomics"
      name="Informa Economics"
      url="https://www.informa.com"
    />
    <CustomerListItem
      :image="logoAdinor"
      name="Adinor"
      url="http://www.adinor.com.br"
    />
    <CustomerListItem
      :image="logoAmhaSaude"
      name="AMHA Saúde"
      url="http://amha.com.br"
    />
    <CustomerListItem
      :image="logoNoroaco"
      name="Noroaço"
      url="http://www.noroaco.com.br"
    />
  </article>
</template>

<script setup lang="ts">
import CustomerListItem from "@/components/CustomerListItem.vue";
import logoAbitrigo from "@/assets/abitrigo.png";
import logoAdinor from "@/assets/adinor.png";
import logoAmavita from "@/assets/amavita.png";
import logoAmhaSaude from "@/assets/amha-saúde.png";
import logoBigFrango from "@/assets/big-frango.png";
import logoBunge from "@/assets/bunge.svg";
import logoInformaEconomics from "@/assets/informa-economics.png";
import logoIntermedica from "@/assets/intermédica.png";
import logoInterodonto from "@/assets/interodonto.png";
import logoMassaLeve from "@/assets/massa-leve.png";
import logoMoinhoHortolandia from "@/assets/moinho-hortolândia.png";
import logoMoinhoIguacuMirim from "@/assets/moinho-guaçu-mirim.png";
import logoMoinhoPaulista from "@/assets/moinho-paulista.png";
import logoNoroaco from "@/assets/noroaço.png";
import logoSeara from "@/assets/seara.png";
</script>

<style scoped lang="scss">
.customers {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    min(50%, 0.25 * $desktop-width-mode)
  );
  justify-content: space-around;
}
</style>
