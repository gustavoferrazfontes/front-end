import { shallowMount } from '@vue/test-utils'
import Modal from '@/components/Modal.vue'

describe('MoneyCard.vue', () => {
    let wrapper;
    const mocks = { $emit: jest.fn(), "$eventhub": { $on: jest.fn(), $emit: jest.fn() } }
    const stubs = ['Cash', 'CloseIcon'];

    wrapper = shallowMount(Modal, {
        stubs: stubs,
        mocks,
        data: () => ({
            show: true,
            name: "foo"
        })
    });

    it("Should close modal", () => {
        wrapper.vm.close();
        expect(wrapper.vm.show).toBeFalsy()
    })

    it("Should register modal open event", () => {
        expect(mocks.$eventhub.$on).toHaveBeenCalledWith("modal:open:foo", wrapper.vm.open)
    })

    it("Should open modal", () => {
        wrapper.setProps({ show: false })

        wrapper.vm.open({ title: "foo2" });

        expect(wrapper.vm.show).toBeTruthy()
        expect(wrapper.vm.title).toBe("foo2")
    })

});