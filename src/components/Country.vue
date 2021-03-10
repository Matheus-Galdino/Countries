<template>
  <div class="country-card" @click="seeDetails">
    <div class="country-card__header">
      <img :src="country.flag" :alt="`${country.name} flag`" />
    </div>
    <div class="country-card__body">
      <h2>
        {{ country.name }}
      </h2>

      <div class="extra-info">
        <p>
          <span>Population:</span>
          {{ Number(country.population).toLocaleString() }}
        </p>
        <p>
          <span>Region:</span>
          {{ country.region }}
        </p>
        <p>
          <span>Capital:</span>
          {{ country.capital }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Country",
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
  methods: {
    seeDetails() {
      this.$router.push(`/details/${this.country.alpha3Code}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.country-card {
  border-radius: 12px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  cursor: pointer;

  &__header {
    img {
      width: 100%;
      height: 20rem;
      max-height: 20rem;
      object-fit: cover;
    }
  }

  &__body {
    padding: $default-padding;
    padding-bottom: 6rem;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    .extra-info {
      display: flex;
      row-gap: 0.5rem;
      flex-direction: column;

      p {
        font-size: 1.7rem;

        span {
          font-weight: 600;
        }
      }
    }
  }
}

@media screen and (min-width: $desktop-breakpoint) {
  .country-card{
    flex-basis: 22%;
  }  
}
</style>