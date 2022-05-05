<template>
  <BaseView>
    <section>
      <h1 class="slogan">
        Mais de 25 anos de experiência em gestão empresarial
      </h1>
      <p>
        Com uma carreira sólida ocupando posições de alta gerência como General
        Manager e CEO em diversos setores industriais, Eduardo Assêncio tem
        auxiliado empresas a regorganizarem-se estruturalmente e a desenvolver
        planejamentos estratégicos com o fim de obter resultados de alta
        performance.
      </p>
      <p>
        Para saber mais sobre como nós podemos auxiliar a sua empresa, entre em
        contato conosco:
      </p>
      <article class="contact-options">
        <ContactCard
          :image="linkedInLogo"
          name="LinkedIn"
          url="https://www.linkedin.com/in/eduardo-assencio-msc-4b5464"
        />
        <ContactCard
          :image="emailIcon"
          name="Email"
          url="mailto:eduardo@assencio.com"
        />
      </article>
    </section>
  </BaseView>
</template>

<script setup lang="ts">
import BaseView from "@/components/BaseView.vue";
import ContactCard from "@/components/ContactCard.vue";
import emailIcon from "@/assets/email.png";
import linkedInLogo from "@/assets/linkedin.png";
</script>

<style scoped lang="scss">
$base-width: $view-paragraph-font-size;

.contact-options {
  column-gap: $base-width;
  display: grid;
  grid-template-areas: "card card";
  justify-content: center;
}
</style>
