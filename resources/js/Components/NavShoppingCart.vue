<script>
export default {
  data() {
    return {
      opened: false
    }
  },

  methods: {
    openCloseCart() {
      this.opened = !this.opened
    },

    handleFocusOut() {
        this.opened = false
    }
  }
}
</script>

<template>
    <div class="shopping__cart__container">
        <a @click="openCloseCart" class="shopping__cart__container__btn" :class="{'active': opened}">
            <i class="uil uil-shopping-cart" />
        </a>

        <div @focusout="handleFocusOut" tabindex="0"
                class="shopping__cart__container__content"
                :class="{'active': opened}">
            <h2>Carrinho</h2>
            <a @click.prevent="openCloseCart" href="" class="shopping__cart__container__content__close__btn"></a>

            <div class="shopping__cart__container__content__item">
                <div class="shopping__cart__container__content__item__title">
                    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg" />
                    <p>Tênis Nike</p>
                </div>
                <div class="shopping__cart__container__content__item__amount">
                    <div class="shopping__cart__container__content__item__amount__qtd">
                        <a href="" class="uil uil-minus"></a>
                        <input type="text" value="5">
                        <a href="" class="uil uil-plus"></a>
                    </div>
                    <div class="shopping__cart__container__content__item__amount__value">R$ 25,00</div>
                </div>
            </div>

            <div class="shopping__cart__container__content__item">
                <div class="shopping__cart__container__content__item__title">
                    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg" />
                    <p>Tênis Nike</p>
                </div>
                <div class="shopping__cart__container__content__item__amount">
                    <div class="shopping__cart__container__content__item__amount__qtd">
                        <a href="" class="uil uil-minus"></a>
                        <input type="text">
                        <a href="" class="uil uil-plus"></a>
                    </div>
                    <div class="shopping__cart__container__content__item__amount__value">R$ 25,00</div>
                </div>
            </div>

            <div class="flex justify-end m-2">
                <a href="" class="shopping__cart__container__content__see_all_bnt"><i class="uil uil-shopping-cart"/> Ver todos</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.shopping__cart__container {
    width: 600px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    position: relative;

    @media (max-width: 700px) {
        width: 100%;
    }

    &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: var(--primary);
        font-size: 28px;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        transition: 0.6s all;

        &:hover {
            background: var(--primary);
            color: white;
        }

        &.active {
            background: var(--primary);
            color: white;
        }

    }

    &__content {
        display: none;
        background: black;
        width: 100%;
        position: absolute;
        top: 4.5rem;
        border-radius: 16px;
        transition: 0.4s all;
        background: white;
        padding: 56px 32px 32px 32px;
        position: absolute;
        box-shadow: 0 0 2px var(--primary);
        z-index: 1000;
        
        &__see_all_bnt {
            background: var(--primary);
            color: white;
            padding: 4px 56px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 800;
            text-align: center;
            transition: width 1.4s;
            width: 200px;

            &:hover {
                width: 100%;
            }
        }

        &.active {
            display: block;
        }

        &__item {
            padding: 16px 24px;
            width: 100%;
            background: white;
            margin: 16px 0;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid var(--primary);
            cursor: pointer;

            &__title {
                display: flex;
                color: var(--primary);

                img {
                    width: 64px;
                    height: 64px;
                    object-fit: cover;
                    border-radius: 8px;
                }

                p {
                    margin-left: 8px;
                    font-weight: 700;
                    font-size: 16px;
                    color: var(--primary);
                }
            }

            &__amount {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                input {
                    width: 48px;
                    height: 24px;
                    border: 1px solid gray;
                    border-radius: 6px;
                    margin: 4px;
                    outline: 0;
                    text-align: center;
                    color: gray;
                    background: whitesmoke;

                    &:hover, &:focus {
                        color: var(--primary);
                        border-color: var(--primary);
                    }
                }

                &__value {
                    font-weight: 700;
                    font-size: 16px;
                    color: var(--primary);
                }

                &__qtd {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    a {
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        background: var(--primary);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 6px;
                        color: white;
                        font-weight: 800;
                    }
                }
            }
        }

        h2 {
            position: absolute;
            top: 20px;
            left: 32px;
            width: 4px;
            height: 24px;
            color: var(--primary);
            font-weight: 700;
            font-size: 22px;
        }

        &__close__btn {
            position: absolute;
            top: 22px;
            right: 32px;
            width: 4px;
            height: 24px;

            &:after {
                position: absolute;
                content: "";
                width: 4px;
                height: 24px;
                background: var(--primary);
                transform: rotate(45deg);
                transition: 0.6s all;
            }

            &:hover:after {
                transform: rotate(60deg);
                width: 6px;
            }

            &:before {
                position: absolute;
                content: "";
                width: 4px;
                height: 24px;
                background: var(--primary);
                transform: rotate(-45deg);
                transition: 0.6s all;
            }

            &:hover:before {
                transform: rotate(-60deg);
                width: 6px;
            }
        }
    }

}
</style>