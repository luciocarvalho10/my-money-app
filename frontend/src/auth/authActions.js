import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'

const submit = (value, url) => dispatch => axios
  .post(url, value)
  .then(resp =>
    dispatch([{
        type: 'USER_FETCHED',
        payload: resp.data
    }])
  )
  .catch(e =>
    e.response.data.errors.forEach(error => toastr.error('Erro', error))
  )

export const login = value => submit(value, `${consts.OAPI_URL}/login`)

export const signup = value => submit(value, `${consts.OAPI_URL}/signup`)

export const logout = () => ({type: 'TOKEN_VALIDATED', payload: false})

export const validateToken = token => dispatch => {
  if (token) {
    axios.post(`${consts.OAPI}/validateToken`, { token })
      .then(resp => dispatch({
        type: 'TOKEN_VALIDATED', payload: resp.data.valid
      }))
      .catch(e => dispatch(logout()))
  } else {
    dispatch(logout())
  }
}