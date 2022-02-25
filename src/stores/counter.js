import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    name: "Eduardo",
    isAdmin: true,
    users: [
      {
        name: "pepe",
        id: 1,
        active: true,
      },
      {
        name: "paco",
        id: 2,
        active: false,
      },
      {
        name: "maria",
        id: 3,
        active: true,
      },
    ],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    doublePlusOne() {
      return this.counter * 2 + 1;
    },
    getActiveUserById(state) {
      const activeUsers = state.users.filter((user) => user.active);
      return (userId) => activeUsers.find((user) => user.id === userId);
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
