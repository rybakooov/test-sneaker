export const state = () => ({
  text: '',
})

export const mutations = {
  changeText (state, _text) {
    state.text = _text;
  }
}