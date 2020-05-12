import { shallowMount } from '@vue/test-utils'
import AmountFeedback from '@/components/AmountFeedback.vue'

describe('AmountFeedback.vue', () => {
    let wrapper;
    const stubs = ['CurrencyIcon'];


    beforeEach(() => {
        wrapper = shallowMount(AmountFeedback, {
            stubs: stubs,
            propsData: { value: 0 }
        });
    })

    it("Should render empty feedback", () => {
        expect(wrapper.vm.message).toBe("Você não adicionou nada");
    })

    it("Should apply empty style", () => {
        expect(wrapper.vm.backgroundColorStyle).toBe("empty");
    })

    it("Should render felled feedback", () => {
        wrapper.setProps({ value: 25 })
        expect(wrapper.vm.message).toBe("Você já adicionou R$ 25,00");
    })

    it("Should apply felled feedback", () => {
        wrapper.setProps({ value: 25 })
        expect(wrapper.vm.backgroundColorStyle).toBe("added");
    })

})

