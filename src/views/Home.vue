<template>
  <div class="home">
    <main>
      <section class="filters">
        <div class="input-container search">
          <span class="material-icons-outlined">search</span>
          <input
            type="text"
            v-model="query"
            placeholder="Search for a country..."
          />
        </div>

        <div class="input-container region">
          <select v-model="selectedRegion">
            <option value="">Filter by Region</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
      </section>

      <div class="countries-container">
        <Country
          v-for="country in filteredCountries"
          :country="country"
          :key="country.alpha2Code"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Country from "../components/Country";

export default {
  name: "Home",
  components: {
    Country,
  },
  data() {
    return {
      query: "",
      selectedRegion: "",
    };
  },
  computed: {
    allCountries() {
      return this.$store.getters.getCountries;
    },
    filteredCountries() {
      let filteredCountries = this.allCountries.filter((x) =>
        x.name.toLowerCase().includes(this.query.toLowerCase())
      );

      if (this.selectedRegion != "")
        filteredCountries = filteredCountries.filter(
          (x) => x.region == this.selectedRegion
        );

      return filteredCountries;
    },
    lightMode() {
      return this.$store.getters.getLightMode;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.home {
  padding: $default-padding;
  min-height: 91vh;
}

.filters {
  .region {
    width: 50%;
    display: inline-block;
    padding: 1.5rem;
    background: #fff;
    border-radius: 10px;

    margin-bottom: 3rem;
    box-shadow: $default-box-shadow;

    select {
      width: 100%;
      border: none;
      font-weight: 600;
      font-size: 1.5rem;
      cursor: pointer;
      background: transparent;

      option {
        font-weight: 600;
        font-size: 1.5rem;
        padding: 1rem 2rem;
      }
    }
  }
}

.search {
  display: flex;
  column-gap: 1rem;
  align-items: center;

  padding: 1.3rem 2rem;
  margin-bottom: 4rem;
  border-radius: 10px;
  transition: all 0.3s ease-out;
  box-shadow: $default-box-shadow;

  &:focus-within {
    box-shadow: 2px 2px 15px rgba(43, 57, 69, 0.5);
  }

  span {
    color: rgba(133, 133, 133, 0.5);
  }

  input {
    width: 100%;
    border: none;
    font-size: 1.5rem;
    background: transparent;
  }
}

.countries-container {
  display: flex;
  row-gap: 5rem;
  flex-wrap: wrap;  
}

@media screen and (min-width: $desktop-breakpoint) {
  .filters {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search {
      width: 20%;
    }

    .region {
      width: 15%;
    }
  }

  .countries-container {    
    justify-content: space-between;
  }
}
</style>