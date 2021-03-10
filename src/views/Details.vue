<template>
  <div class="details">
    <header>
      <a @click="back">
        <span class="material-icons-outlined"> arrow_back </span>
        Back
      </a>
    </header>

    <main>
      <img :src="country?.flag" :alt="country?.name" />

      <div class="info-block">
        <h2>{{ country?.name }}</h2>
        <div class="infos">
          <section>
            <p>
              <span>Native Name: </span>
              {{ country?.nativeName }}
            </p>
            <p>
              <span>Population: </span>
              {{ Number(country?.population).toLocaleString() }}
            </p>
            <p>
              <span>Region: </span>
              {{ country?.region }}
            </p>
            <p>
              <span>Sub Region: </span>
              {{ country?.subregion }}
            </p>
            <p>
              <span>Capital: </span>
              {{ country?.capital }}
            </p>
          </section>

          <section>
            <p>
              <span>Top Level Domain: </span>
              {{ country?.topLevelDomain[0] }}
            </p>
            <p>
              <span>Currencies: </span>
              <template
                v-for="curren in country?.currencies"
                :key="curren.code"
              >
                {{ `${curren.name}, ` }}
              </template>
            </p>
            <p>
              <span>Languages: </span>
              <template
                v-for="lang in country?.languages"
                :key="lang.nativeName"
              >
                {{ `${lang.name}, ` }}
              </template>
            </p>
          </section>
        </div>
      </div>

      <footer>
        <h3>Border Countries:</h3>
        <div class="border-countries">
          <router-link
            :to="`/details/${bCountry.alpha3Code}`"
            v-for="bCountry in borderCountries"
            :key="bCountry.name"
          >
            {{ bCountry.name }}
          </router-link>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  name: "Details",
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  computed: {
    country() {
      let countries = this.$store.getters.getCountries;

      return countries.filter(
        (x) => x.alpha3Code == this.$route.params.countryCode
      )[0];
    },
    borderCountries() {
      let countries = this.$store.getters.getCountries;

      return countries.filter((x) =>
        this.country.borders.includes(x.alpha3Code)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.details {
  padding: $default-padding;
  min-height: 91vh;
}

header {
  margin-bottom: 5rem;

  a {
    display: inline-flex;
    align-items: center;
    column-gap: 0.7rem;

    font-size: 1.3rem;
    font-weight: 600;

    padding: 0.8rem 2.5rem;

    text-decoration: none;
    letter-spacing: 0.1rem;
    box-shadow: $default-box-shadow;

    cursor: pointer;

    span {
      font-size: 1.8rem;
    }
  }
}

main {
  img {
    width: 100%;
    max-height: 25rem;
    margin-bottom: 4rem;
  }
}

.info-block {
  h2 {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  section {
    margin-bottom: 3.5rem;

    p {
      font-size: 1.6rem;
      margin-bottom: 1.3rem;

      span {
        font-weight: 700;
      }
    }
  }
}

footer {
  padding-bottom: 2rem;

  h3 {
    font-weight: 600;
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  .border-countries {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    a {
      flex-basis: 31%;
      font-size: 1.4rem;
      padding: 0.7rem 0.5rem;

      text-align: center;
      text-decoration: none;

      border-radius: 5px;
      box-shadow: $default-box-shadow;
      border: 1px solid rgba(200, 200, 200, 0.5);

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

@media screen and (min-width: $desktop-breakpoint) {
  main {
    display: grid;
    grid-template-columns: auto 3fr;
    grid-template-rows: 2fr 1fr;

    column-gap: 100px;

    img {
      width: 500px;

      margin: 0;
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
  }

  .info-block {
    .infos {
      display: flex;
      column-gap: 100px;
    }
  }

  footer {
    display: flex;
    align-items: flex-start;

    h3 {
      flex-grow: 1;
    }

    .border-countries {
      width: 100%;

      a {
        flex-basis: initial;
        padding: 0.7rem 2rem;
      }
    }
  }
}
</style>