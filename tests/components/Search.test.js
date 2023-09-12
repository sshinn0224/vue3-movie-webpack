import { shallowMount } from '@vue/test-utils'
import Search from '~/components/Search'

describe('components/search', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Search)
  })

  test('선택 가능한 연도의 개수가 일치 합니다.', () => {
    const years = wrapper.vm.filters.find((filter) => {
      return filter.name === 'year'
    })

    const yearLength = new Date().getFullYear() - 1985 + 1

    expect(years.items.length).toBe(yearLength)
  })
})
