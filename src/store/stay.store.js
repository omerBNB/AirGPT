import { stayService } from '../services/stay.service'
// import { stayService } from '../services/stay.service.local'

export const stayStore = {
  state: {
    stays: [],
    filter: '',
  },
  getters: {
    stays({ stays }) {
      // console.log(stays)
      return stays
    },
  },
  mutations: {
    setStays(state, { stays }) {
      state.stays = stays
    },
    saveStay(state, { stay }) {
      const idx = state.stays.findIndex((c) => c._id === stay._id)
      if (idx > -1) state.stays.splice(idx, 1, stay)
      else state.stays.unshift(stay)
    },
    removeStay(state, { stayId }) {
      state.stays = state.stays.filter((stay) => stay._id !== stayId)
    },
    addStayMsg(state, { stayId, msg }) {
      const stay = state.stays.find((stay) => stay._id === stayId)
      if (!stay.msgs) stay.msgs = []
      stay.msgs.push(msg)
    },
  },
  actions: {
    // async addStay({ commit }, { stay }) {
    //   try {
    //     stay = await stayService.save(stay)
    //     commit(getActionAddStay(stay))
    //     return stay
    //   } catch (err) {
    //     console.log('stayStore: Error in addStay', err)
    //     throw err
    //   }
    // },
    async saveStay({ commit }, { stay }) {
      try {
        stay = await stayService.save(stay)
        commit({ type: 'saveStay', stay })
        return stay
      } catch (err) {
        console.log('stayStore: Error in updateStay', err)
        throw err
      }
    },
    async loadStays({ commit }, { filter }) {
      try {
        console.log('filter', filter)
        const stays = await stayService.query(filter)
        commit({ type: 'setStays', stays })
        return stays
      } catch (err) {
        console.log('stayStore: Error in loadStays', err)
        throw err
      }
    },
    async removeStay({ commit }, { stayId }) {
      try {
        await stayService.remove(stayId)
        commit(getActionRemoveStay(stayId))
      } catch (err) {
        console.log('stayStore: Error in removeStay', err)
        throw err
      }
    },
    async addStayMsg({ commit }, { stayId, txt }) {
      try {
        const msg = await stayService.addStayMsg(stayId, txt)
        commit({ type: 'addStayMsg', stayId, msg })
      } catch (err) {
        console.log('stayStore: Error in addStayMsg', err)
        throw err
      }
    },
    async getStay({ commit }, { stayId }) {
      const stay = await stayService.getById(stayId)
      return stay
    },

  },
}
