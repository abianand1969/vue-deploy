import { reactive, readonly } from "vue";

const store = {
    debug: true,

    state: reactive({
        message: "Hello!"
    }),

    setMessageAction(newValue) {
        if (this.debug) {
            console.log("setMessageAction triggered with", newValue);
        }

        this.state.message = newValue;
    },

    clearMessageAction() {
        if (this.debug) {
            console.log("clearMessageAction triggered");
        }

        this.state.message = "";
    },
}
const state = reactive({
    fnacResults: [],
    interResults: []
});

export default {
    state: readonly(state),
    actions: {
        addFnacResult(item) {
            state.fnacResults.push(item);
        },
        addInterResult(item) {
            state.interResults.push(item);
        }
    }
};