<template>
    <div class="sidebar">
        <ul class="sidebar__menu">
            <li>
                <router-link :to="{name: 'homepage'}" class="sidebar__link">{{ $t('link.home') }}</router-link>
            </li>
            <li>
                <router-link class="sidebar__link" :to="{name: 'about'}">{{ $t('link.about') }}</router-link>
            </li>
            <li><a class="sidebar__link" :href="$url.catalog">{{ $t('link.catalog') }}</a></li>
            <li><a class="sidebar__link" :href="$url.profile">{{ $t('link.profile') }}</a></li>
            <li><a class="sidebar__link" :href="$url.stylists">{{ $t('link.stylists') }}</a></li>
            <li><a class="sidebar__link" :href="$url.styleImages">{{ $t('link.styleImages') }}</a></li>
            <li>
                <router-link class="sidebar__link" :to="{name: 'contacts'}">{{ $t('link.contacts') }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'side-bar'
  }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins.scss";

    .sidebar {
        position: absolute;
        top: 100%;
        right: 0;
        padding: 2em 4.5em;
        width: 144px;
        min-height: 270px;
        opacity: 0.95;
        background-color: #f3f3f3;
        z-index: 20;

        &__menu {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        &__link {
            @include responsiveFont(20px, 15px);
            font-weight: normal;
            line-height: 3;
            letter-spacing: 2px;
            color: #4d4d4d;
            text-decoration: none;
            &:hover {
                color: #32d0e7;
            }
        }
    }

</style>