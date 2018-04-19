<template>
    <div class="description__wrapper" id="imigize-landing-description">
        <div class="description">
            <h2 class="description__title">
                {{ $t('description.title')}}
            </h2>
            <p class="description__title-bottom">
                {{ $t('description.titleBottom')}}
            </p>

            <div class="description__text">
                {{ $t('description.text')}}
            </div>

            <div class="description__products">
                <div class="description__products-item">
                    <div class="description__sector">
                        <div class="description__sector-img">96%</div>
                        <div class="description__sector-text-top">{{ $t('description.sectorTextTop')}}</div>
                        <div class="description__sector-text">{{ $t('description.sectorText')}}</div>
                    </div>

                    <div class="description__products-item-img" data-img="1"></div>
                    <div class="description__products-item-text">{{ $t('description.size')}}: US
                        <div class="description__products-item-size_span">7
                        </div>
                    </div>
                </div>

                <div class="description__products-item">
                    <div class="description__sector">
                        <div class="description__sector-img">97%</div>
                        <div class="description__sector-text-top">{{ $t('description.sectorTextTop')}}</div>
                        <div class="description__sector-text">{{ $t('description.sectorText')}}</div>
                    </div>

                    <div class="description__products-item-img" data-img="2"></div>
                    <div class="description__products-item-text">{{ $t('description.size')}}: US
                        <div class="description__products-item-size_span">7.5
                        </div>
                    </div>
                </div>

                <div class="description__products-item">
                    <div class="description__sector">
                        <div class="description__sector-img">96%</div>
                        <div class="description__sector-text-top">{{ $t('description.sectorTextTop')}}</div>
                        <div class="description__sector-text">{{ $t('description.sectorText')}}</div>
                    </div>

                    <div class="description__products-item-img" data-img="3"></div>
                    <div class="description__products-item-text">{{ $t('description.size')}}: US
                        <div class="description__products-item-size_span">7.5
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'description'
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .description {
        padding: 6em 4% 6.1em 4%;
        min-height: 515px;
        text-align: center;
        color: #3a3535;
        position: relative;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;

        &__wrapper {
            background-color: #FFFEFF;
        }

        &__title {
            margin-bottom: 15px;
            @include responsiveFont(37px, 24px);
            line-height: 1.17;
            text-align: center;
            color: $landing3a3535;
        }

        &__title-bottom {
            margin-bottom: 2.5em;
            @include responsiveFont(27px, 18px);
            line-height: 1.167;
            text-align: center;
            color: $landing3a3535;
            letter-spacing: -0.045em;
        }

        &__text {
            margin: 0 auto 2.8em auto;
            max-width: 795px;
            @include responsiveFont(19px, 16px);
            line-height: 2;
            text-align: center;
            color: $landing5f5f5f;
        }

        &__products-item {
            position: relative;
            display: inline-block;
            vertical-align: top;
            padding: 5px;
            max-width: 336px;
            width: 100%;
            box-sizing: border-box;
            &:after {
                content: '';
                position: absolute;
                top: 12%;
                right: 0;
                width: 2px;
                height: 90%;
                background-color: #a8a8a8;
            }
            &:last-of-type {
                &:after {
                    background-color: transparent;
                }
            }

            &:last-child {
                &:after {
                    background-color: transparent;
                }
            }

            @include w320-767 {
                padding: 3% 1%;
                &:after {
                    top: auto;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                }
            }
        }

        &__sector {
            margin-bottom: 0.3em;
        }

        &__sector-img {
            margin: 0 auto 0.4em auto;
            height: 118px;
            width: 118px;
            @include responsiveFont(31px, 24px);
            line-height: 118px;
            letter-spacing: -0.015em;
            color: #43b749;
            background: url("../assets/img/description/icon-sector.png") no-repeat;
            background-size: contain;
        }

        &__sector-text-top {
            @include responsiveFont(14px, 12px);
            line-height: 1.5;
            letter-spacing: -0.015em;
            color: $landing3a3535;
        }

        &__sector-text {
            @include responsiveFont(16px, 14px);
            font-weight: 600;
            letter-spacing: -0.015em;
            line-height: 2.3;
            color: $landing3a3535;
        }

        &__products {
            margin-bottom: 25px;
        }

        &__products-item-img {
            margin: 0 auto 0.9em;
            height: 167px;
            max-width: 287px;
            min-width: 245px;
            width: 100%;
            background: no-repeat center;
            background-size: contain;

            &[data-img="1"] {
                background-image: url("../assets/img/description/kross1.jpg");
            }
            &[data-img="2"] {
                background-image: url("../assets/img/description/kross2.jpg");
            }
            &[data-img="3"] {
                background-image: url("../assets/img/description/kross3.jpg");
            }
        }

        &__products-item-text {
            font-size: 13px;
            line-height: 18px;
            letter-spacing: -0.015em;
            color: $landing3a3535;
        }

        &__products-item-size_span {
            display: inline;
            margin-left: 9px;
            font-weight: 600;
        }
    }
</style>