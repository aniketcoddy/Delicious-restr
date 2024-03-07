
'use client'
import { Provider } from 'react-redux'
import Store from '../Store/index'

interface CreateStoreProps {
    children: any;
  }

const CreateStore :React.FC<CreateStoreProps> = ({children}) => {
  return (
    <Provider store={Store}>
        {children}
    </Provider>
  )
}

export default CreateStore
