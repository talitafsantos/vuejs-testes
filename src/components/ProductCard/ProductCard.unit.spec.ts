import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import ProductCardVue from './ProductCard.vue'
const product = {
  id: 1,
  title: 'Titulo 1',
  body:'',
}
describe('Product Card', () => {
  it('should match snapshot', () => {
    
  })
  it('should mount the component', async() => {
    const wrapper = mount(ProductCardVue, {props: {product}})
    expect(wrapper.vm).toBeDefined()
    expect(wrapper.text()).toContain('Titulo 1')
    expect(wrapper.text()).toContain('Description')
  })

  it('should emit addToCart when the button is clicked', () => {
    const wrapper = mount(ProductCardVue, {props: {product}})

    expect(wrapper.find('button').trigger('click'))
    expect(wrapper.emitted().addToCart).toBeTruthy()
    expect(wrapper.emitted().addToCart[0]).toEqual([product])
  })
})