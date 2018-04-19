<template>
    <section class="video">
        <a class="video__link" ref="link"
           @click.prevent="onLinkClick"
           :href="videoLink"
           :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
            <h2 class="video__title">{{ title}}</h2>
            <div class="video__icon-play"></div>
        </a>
        <div class="ytPlayer" ref="ytPlayer"></div>
    </section>
</template>

<script>
  export default {
    name: 'video-player',
    data: () => ({
      title: null,
      backgroundImage: require('../assets/img/videoPlayer/video-gif5.gif')
    }),

    computed: {
      videoId() {
        return this.$i18n.t('url.youtubeVideoId')
      },
      videoLink() {
        return `https://www.youtube.com/embed/${this.videoId}?rel=0`
      }
    },
    methods: {
      onLinkClick() {
        this.$refs.link.style.display = 'none'
        this.onYouTubeIframeAPIReady()
      },

      onYouTubeIframeAPIReady() {
        let height = '200px'
        // eslint-disable-next-line
        new YT.Player(this.$refs.ytPlayer,
          {
            height: height,
            width: '100%',
            videoId: this.videoId,
            playerVars: {
              'rel': 0
            },
            events: {
              'onReady': this.onPlayerReady
            }
          })
      },

      onPlayerReady(event) {
        event.target.playVideo()
      },

      _initVideoOpen() {
        let tag = document.createElement('script')

        tag.src = 'https://www.youtube.com/iframe_api'
        let firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      }
    },
    mounted() {
      this._initVideoOpen()
    }
  }
</script>


<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .video {
        position: relative;
        width: 100%;
        text-align: center;

        a:nth-child(2) {
            position: relative;

            &::after {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 2px;
                background: rgba(255, 255, 255, 0.3);
                content: "";
                opacity: 0;
                transition: opacity 0.2s, transform 0.2s;
                transform: translateY(8px);
            }

            &:hover::after,
            &:focus::after {
                opacity: 1;
                transform: translateY(0px);
            }
        }

        &__link {
            display: block;
            width: 100%;
            min-height: 180px;
            background: no-repeat center;
            background-size: contain;
        }

        &__title {
            position: absolute;
            top: 7%;
            left: 0;
            width: 100%;

            @include responsiveFont(24px, 18px);

            line-height: 1.22;
            letter-spacing: 0;
            text-align: center;
            color: #fff;
        }

        &__icon-play {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -25px;
            margin-top: -25px;
            width: 50px;
            height: 50px;
            box-sizing: border-box;
            background-color: transparent;
            border: 2px solid #fff;
            border-radius: 100%;
            z-index: 5;

            &::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -10px;
                margin-left: -8px;
                width: 0;
                height: 0;
                border-top: 10px solid transparent;
                border-left: 20px solid #fff;
                border-bottom: 10px solid transparent;
                background-color: transparent;
                z-index: 5;
            }
        }
    }
</style>
