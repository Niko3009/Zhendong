// import axios from 'axios'

import { DOMAIN, PATH } from '@/global/data/api'

export const postData = async (data, pageURL, pageName) => {
  const url = DOMAIN + PATH.callback

  const formData = new FormData()
  for (const key in data) formData.append(key, data[key])
  formData.append('type', pageName)
  formData.append('url', pageURL)

  // const responseData = await axios.post(url, formData, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //     Accept: 'application/json',
  //   },
  //   withCredentials: false,
  // })

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
  })
  const responseData = await response.json()

  return responseData
}

export const checkData = (data) => {
  return data
}

// const responseData = await axios({
//   url,
//   method: 'post',
//   data: formData,
//   headers: {
//     'Content-Type': 'multipart/form-data',
//     Accept: 'application/json',
//   },
// })

// const responseData = await axios.post(url, formData, {
//   headers: {
//     'Content-Type': 'multipart/form-data',
//     Accept: 'application/json',
//   },
// })
