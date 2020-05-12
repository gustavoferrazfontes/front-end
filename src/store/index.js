const baseURL = process.env.VUE_APP_URL_BASE

const initializeState = () => ({
  employees: []

})
const state = initializeState()

const getters = {
  employees: (state) => state.employees
}

const mutations = {
  SET_EMPLOYEES: (state, employees) => state.employees = employees,

  UPDATE_EMPLOYEE_AMOUNT: (state, { index, employee }) =>
    state.employees.splice(index, 1, employee)

}

const actions = {
  getEmployees({ commit }) {
    fetch(`${baseURL}employees`, {
      method: 'GET',
      cache: 'default',
      headers: new Headers({ "Content-Type": "application/json" })

    }).then((resp) => resp.json())
      .then(({ data }) => {
        commit("SET_EMPLOYEES", data)
      })
  },

  updateAmount({ state, commit }, { index, amount }) {
    const employee = { ...state.employees[index] };

    if (employee) {
      const sum = (actualValue, newValue) => {
        let sum = actualValue ? actualValue + newValue : newValue
        if (sum > 200)
          sum = 200;
        return sum;
      }
      const updatedAmount = sum(employee.amount, amount);

      commit("UPDATE_EMPLOYEE_AMOUNT", { index, employee: { ...employee, amount: updatedAmount } })
    }
  }
}


export default {
  state,
  getters,
  actions,
  mutations,
}
