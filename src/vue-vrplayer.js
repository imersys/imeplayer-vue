const host = 'https://localhost:8080/video/'

export default {
  name: 'VrPlayer',
  props: {
    videoId: String,
    posterOnly: Boolean
    // height: {
    //   type: [Number, String],
    //   default: 360
    // },
    // width: {
    //   type: [Number, String],
    //   default: 640
    // }
  },
  methods: {
    updateVideoId (videoId) {
      if (!this.iframe) {
        return
      }

      if (!videoId) {
        return
      }

      this.iframe.setAttribute('src', host + videoId)
    }
  },
  watch: {
    videoId: 'updateVideoId'
    // width (val) {
    // },
    // height (val) {
    // }
  },
  mounted () {
    if (this.posterOnly) {
      var img = document.createElement('img')
      img.setAttribute('src', host + this.videoId + '/poster.jpg')
      img.setAttribute('style', 'width: 100%; border: none;')
      this.$el.appendChild(img)
    } else {
      this.iframe = document.createElement('iframe')
      this.iframe.setAttribute('src', host + this.videoId)
      this.iframe.setAttribute('allowfullscreen', '')
      this.iframe.setAttribute('allow', 'vr,gyroscope,accelerometer,fullscreen')
      this.iframe.setAttribute('style', 'display: block; width: 100%; height: 400px; border: none;')

      this.$el.appendChild(this.iframe)
    }
  },
  render (h) {
    return h('div')
  }
}
