<template>
  <base-card>
    <div class="controls">
      <base-button mode="outline" @click="loadCoaches()">Refresh</base-button>
      <base-button v-if="!isCoach" link to="/register"
        >Register as Coach</base-button
      >
    </div>
    <ul>
      <coach-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :types="coach.types"
        :genders="coach.genders"
        :levels="coach.levels"
      ></coach-item>
    </ul>
  </base-card>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: {
    CoachItem,
  },
  computed: {
    isCoach() {
      console.log(this.$store.getters['coaches/isCoach']);
      return this.$store.getters['coaches/isCoach'];
    },
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    async loadCoaches(refresh = false) {
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
