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

.female,
.male,
.everyone {
  font-size: 0.8rem;
  text-transform: lowercase;
  background-color: white;
  padding: 0.5rem 0.8rem;
}

.beginner {
  font-size: 0.8rem;
  background-color: rgb(127, 209, 145);
  padding: 0.5rem 0.8rem;
}

.advanced {
  font-size: 0.8rem;
  background-color: rgb(206, 121, 90);
  padding: 0.5rem 0.8rem;
}
</style>
