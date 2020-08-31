import { mount } from "@vue/test-utils";
import App, { characterInfo } from "@/App.vue";

global.fetch = jest.fn(() =>
Promise.resolve({
  json: () => Promise.resolve({} ),
})
);

describe("App", () => {
    it("should have a quote me button", async () => {
        const wrapper = mount(App);
        wrapper.setData({characterInfo: characterInfo})
        await wrapper.vm.$nextTick();
        const button = wrapper.findAll("button");
        expect(button).toHaveLength(1);
    })
})