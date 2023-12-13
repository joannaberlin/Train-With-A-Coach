<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">Firstname must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Lastname must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Description must not be empty.</p>
    </div>
    <div class="form-controls" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rate.isValid">Hourly Rate must be greater than 0.</p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !types.isValid }"
      @blur="clearValidity('types')"
    >
      <h3>Types of workouts offered:</h3>
      <div>
        <input
          type="checkbox"
          id="strength"
          value="strength"
          v-model="types.val"
        />
        <label for="strength">Strength workout</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="mobility"
          value="mobility"
          v-model="types.val"
        />
        <label for="mobility">Mobility workout</label>
      </div>
      <div>
        <input type="checkbox" id="HIIT" value="HIIT" v-model="types.val" />
        <label for="HIIT">HIIT workout</label>
      </div>
      <p v-if="!types.isValid">At least one type must be selected.</p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !levels.isValid }"
      @blur="clearValidity('levels')"
    >
      <h3>Levels:</h3>
      <div>
        <input
          type="checkbox"
          id="beginner"
          value="beginner"
          v-model="levels.val"
        />
        <label for="beginner">Beginner</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="advanced"
          value="advanced"
          v-model="levels.val"
        />
        <label for="advanced">Advanced</label>
      </div>
      <p v-if="!levels.isValid">At least one level must be selected.</p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: !genders.isValid }"
      @blur="clearValidity('genders')"
    >
      <h3>Who is it for?</h3>
      <div>
        <input
          type="checkbox"
          id="female"
          value="female"
          v-model="genders.val"
        />
        <label for="female">Females</label>
      </div>
      <div>
        <input type="checkbox" id="male" value="male" v-model="genders.val" />
        <label for="male">Males</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="everyone"
          value="everyone"
          v-model="genders.val"
        />
        <label for="everyone">Everyone</label>
      </div>
      <p v-if="!genders.isValid">At least one gender must be selected.</p>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      types: {
        val: [],
        isValid: true,
      },
      levels: {
        val: [],
        isValid: true,
      },
      genders: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.types.val.length === 0) {
        this.types.isValid = false;
        this.formIsValid = false;
      }
      if (this.levels.val.length === 0) {
        this.levels.isValid = false;
        this.formIsValid = false;
      }
      if (this.genders.val.length === 0) {
        this.genders.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        types: this.types.val,
        levels: this.levels.val,
        genders: this.genders.val,
      };

      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #8d0084;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  accent-color: #8d0084;
  outline: #8d0084 solid 1px;
}

input[type='checkbox']:checked {
  accent-color: #8d0084;
  outline: #8d0084 solid 1px;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
