<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>
      €<span>{{ rate }}</span
      >/hour
    </h4>
    <div>
      <base-badge
        v-for="type in types"
        :key="type"
        :type="type"
        :title="type"
      ></base-badge>
    </div>
    <div>
      <base-badge
        v-for="gender in genders"
        :key="gender"
        :type="gender"
        :title="gender"
      ></base-badge>
    </div>
    <div>
      <base-badge
        v-for="level in levels"
        :key="level"
        :type="level"
        :title="level"
      ></base-badge>
    </div>
    <div class="buttons_wrapper">
      <base-button mode="outline" link :to="coachContactLink"
        >Contact</base-button
      >
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'types', 'levels', 'genders', 'rate'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  background-color: #dcdbdb;
}

h3 {
  font-size: 1.5rem;
}

h4 span {
  font-size: 1.2rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.buttons_wrapper {
  margin-top: 1.2rem;
}
</style>
