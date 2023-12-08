<template>
  <span class="badge" :class="type">{{ text }}</span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.strength {
  background-color: #56a545;
  color: white;
}

.mobility {
  background-color: #4d69be;
  color: white;
}

.HIIT {
  background-color: #d232ad;
  color: white;
}
</style>
