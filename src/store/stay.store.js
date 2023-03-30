// import { stayService } from '../services/stay.service.local'
import { stayService } from '../services/stay.service.local'

// export function getActionRemoveStay(stayId) {
//     return {
//         type: 'removeStay',
//         stayId
//     }
// }

// export function getActionAddStay(stay) {
//     return {
//         type: 'addStay',
//         stay
//     }
// }

// export function getActionUpdateStay(stay) {
//     return {
//         type: 'updateStay',
//         stay
//     }
// }

// export function getActionAddStayMsg(stayId) {
//     return {
//         type: 'addStayMsg',
//         stayId,
//         txt: 'Stam txt'
//     }
// }

export const stayStore = {
  state: {
    stays: [],
    filter: '',
  },
  getters: {
    stays({ stays }) {
      return stays
    },
  },
  mutations: {
    setStays(state, { stays }) {
      state.stays = stays
    },
    addStay(state, { stay }) {
      state.stays.push(stay)
    },
    updateStay(state, { stay }) {
      const idx = state.stays.findIndex((c) => c._id === stay._id)
      state.stays.splice(idx, 1, stay)
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
    async addStay({ commit }, { stay }) {
      try {
        stay = await stayService.save(stay)
        commit(getActionAddStay(stay))
        return stay
      } catch (err) {
        console.log('stayStore: Error in addStay', err)
        throw err
      }
    },
    async updateStay({ commit }, { stay }) {
      try {
        stay = await stayService.save(stay)
        commit(getActionUpdateStay(stay))
        return stay
      } catch (err) {
        console.log('stayStore: Error in updateStay', err)
        throw err
      }
    },
    async loadStays({ commit }) {
      try {
        const stays = await stayService.query()
        commit({ type: 'setStays', stays })
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
    async setFilterBy({ commit }, { filter }) {
      const stays = await stayService.query(filter)
      commit({ type: 'setStays', stays })
    },
    async getStay({ commit }, { stayId }) {
      console.log('stayId:', stayId)
      const stay = await stayService.getById(stayId)
      return stay
    },
    async searchByUserSpecs({ commit, state }, { filterUserSpecs }) {
      try {
        const stays = await stayService.query(state.filter, filterUserSpecs)
        commit({ type: 'setStays', stays })
      } catch (err) {
        console.log('stayStore: Error in addStayMsg', err)
        throw err
      }
    },
  },
}
