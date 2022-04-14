<template>
  <div class="banner__header__container__text__search">
    <input
      v-model="query"
      @keyup="search"
      @click="listOpened = true"
      type="text"
      placeholder="Digite aqui o nome do produto..."
    />

    <a
      v-if="loading"
      :key="`loader_${loading}`"
      class="banner__header__container__text__search__btn"
      href="#"
    >
        <div class="animate-spin" role="status">
            <i class="uil uil-spin" />
        </div>
    </a>

    <a
      v-if="!loading"
      :key="`btn_search_${loading}`"
      @click.prevent="search"
      class="banner__header__container__text__search__btn"
      href="#"
    >
      <i class="uil uil-search-alt" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      loading: false
    };
  },

  methods: {
    search() {
        this.loading = true
    }
  },

};
</script>

<style lang="scss" scoped>
.banner__header__container__text__search {
  width: 95%;
  max-width: 750px;
  position: relative;
  z-index: 1;

  input {
    width: 100%;
    font-size: 16px;
    color: gray;
    font-family: "Roboto";
    outline: none;
    background: white;
    height: 64px;
    padding: 16px 56px 16px 32px;
    border-radius: 50px;
    transition: 0.4s all;
    
    &:focus {
        outline: none;
    }

    @media (max-width: 500px) {
      font-size: 14px;
    }

    @media (max-width: 400px) {
      font-size: 12px;
    }

    @media (max-width: 360px) {
      font-size: 10px;
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 50px;
    height: 50px;
    background: var(--primary);
    color: white;
    border-radius: 50%;
    top: 8px;
    right: 8px;
    transition: 0.6s all;
    cursor: pointer;

    i {
        font-size: 32px;
    }

    &:hover {
      background: #db8212;
    }
  }
}
</style>