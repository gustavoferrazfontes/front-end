import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import MoneyCard from '@/components/MoneyCard.vue'

describe('MoneyCard.vue', () => {
    let wrapper;
    const localVue = createLocalVue();
    const actions = { "updateAmount": jest.fn() }
    const stubs = ['CurrencyIcon', 'AmountFeedback', 'MoneyProgressBar', 'AddMoneyButton'];
    const employee = { employee_name: "foo", amount: 25 }

    localVue.use(Vuex);
    const store = new Vuex.Store({ actions })

    beforeEach(() => {
        wrapper = shallowMount(MoneyCard, {
            stubs: stubs,
            store,
            propsData: {
                employee,
                index: 1
            }
        });
    })

    it('Should get name from employee', () => {
        expect(wrapper.vm.name).toBe("foo")
    })

    it('Should get amount from employee', () => {
        expect(wrapper.vm.amount).toBe(25)
    })

    it('Should get isMaxAmount true', () => {
        wrapper.setProps({ employee: { ...employee, amount: 200 } })

        expect(wrapper.vm.isMaxAmount).toBeTruthy()
    })

    it('Should get isMaxAmount false', () => {
        wrapper.setProps({ employee: { ...employee, amount: 125 } })

        expect(wrapper.vm.isMaxAmount).toBeFalsy()
    })
})