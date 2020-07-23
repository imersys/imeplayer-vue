/*!
 * vue-vrplayer v0.1.3
 * (c) 2019 Imersys Software S/A.
 * Released under the MIT License.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.VueVrplayer = global.VueVrplayer || {})));
}(this, (function (exports) { 'use strict';

var host = 'https://localhost:8080/video/';

var VrPlugin = {
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
    updateVideoId: function updateVideoId (videoId) {
      if (!this.iframe) {
        return
      }

      if (!videoId) {
        return
      }

      this.iframe.setAttribute('src', host + videoId);
    }
  },
  watch: {
    videoId: 'updateVideoId'
    // width (val) {
    // },
    // height (val) {
    // }
  },
  mounted: function mounted () {
    if (this.posterOnly) {
      var img = document.createElement('img');
      img.setAttribute('src', host + this.videoId + '/poster.jpg');
      img.setAttribute('style', 'width: 100%; border: none;');
      this.$el.appendChild(img);
    } else {
      this.iframe = document.createElement('iframe');
      this.iframe.setAttribute('src', host + this.videoId);
      this.iframe.setAttribute('allowfullscreen', '');
      this.iframe.setAttribute('allow', 'vr,gyroscope,accelerometer,fullscreen');
      this.iframe.setAttribute('style', 'display: block; width: 100%; height: 400px; border: none;');

      this.$el.appendChild(this.iframe);
    }
  },
  render: function render (h) {
    return h('div')
  }
};

function plugin (Vue) {
  Vue.component('vrplayer', VrPlugin);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

var version = '0.1.3';

exports['default'] = plugin;
exports.VrPlugin = VrPlugin;
exports.version = version;

Object.defineProperty(exports, '__esModule', { value: true });

})));
