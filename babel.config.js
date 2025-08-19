module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    ['babel-plugin-transform-define', {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    }]
  ]
};