import { shallowMount } from '@vue/test-utils'
import AddMoneyButton from '@/components/AddMoneyButton.vue'

describe('MoneyCard.vue', () => {
    let wrapper;
    const mocks = { $emit: jest.fn(), "$eventhub": { $on: jest.fn(), $emit: jest.fn() } }
    const stubs = ['PlusIcon'];


    beforeEach(() => {
        wrapper = shallowMount(AddMoneyButton, {
            stubs: stubs,
            mocks,
            propsData: {
                employeeName: "foo"
            }
        });
    })

    it('Should call open modal', () => {
        wrapper.vm.openModal();
        expect(mocks.$eventhub.$emit).toHaveBeenCalledWith("modal:open:modal", { add: wrapper.vm.addMoney, "title": "foo" })
    })

    it("should emit added event", () => {
        wrapper.vm.addMoney(125);
        expect(mocks.$emit).toHaveBeenCalledWith("added", 125)
    })
})