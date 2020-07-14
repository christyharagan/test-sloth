import { test_src } from 'segment-local-functions'
import { src_payload } from './payload'

const settings: FunctionSettings = {
}

test_src(src_payload, settings, 3001).then(result => {
  console.log(result)
}).catch(e =>{
  console.error(e)
})