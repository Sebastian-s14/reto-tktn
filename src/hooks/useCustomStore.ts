import { shallow } from 'zustand/shallow'

import { useStore } from '@store'

export const useCustomStore = () => useStore(state => ({ ...state }), shallow)
