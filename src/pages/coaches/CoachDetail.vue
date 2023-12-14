<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>€{{ rate }}/hour</h3>
      <p>{{ description }}</p>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Sounds like a good match? Reach out now!</h2>
        <base-button
          v-if="!contactFormIsOpened"
          @click="contactClickHandler"
          link
          :to="contactLink"
          >Contact</base-button
        >
      </header>
      <router-view></router-view>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
      contactFormIsOpened: false,
    };
  },
  computed: {
    contactLink() {
      return this.$route.path + '/contact';
    },
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
  methods: {
    contactClickHandler() {
      this.contactFormIsOpened = !this.contactFormIsOpened;
    },
  },
};
</script>
