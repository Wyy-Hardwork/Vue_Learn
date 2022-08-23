export default{
    namespaced: true,
    actions: {
        jia: function (context, value) {
            console.log('actions调用!');
            context.commit('JIA', value)
            context.dispatch('jia_plus', value)
        },
        jia_plus() {

        },
        jiaOdd(context, value) {
            if (context.state.sum % 2)
                context.commit('JIA', value)
        },
        jiaTime(context, value) {
            setTimeout(() => { context.commit('JIA', value) }, 500)
        },
    },
    mutations: {
        JIA(state, value) {
            console.log('mutations调用!');
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '格黑娜',
        student: '空崎日奈',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}