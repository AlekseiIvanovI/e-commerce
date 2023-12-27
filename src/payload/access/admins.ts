import type { AccessArgs } from 'payload/config'
import { checkRole } from '../collections/Users/checkRole'
import type { User } from '../payload-types'

type isAdmin = (args: AccessArgs<unknown, User>) => boolean

export const admins: isAdmin = ({ req: { user } }) => {
  if (checkRole(['admin'], user)) {
    return true; // User has the "admin" role, grant access
  } else {
    throw new Error('Access Denied'); // User does not have the "admin" role, deny access
  }
}



// import type { AccessArgs } from 'payload/config'

// import { checkRole } from '../collections/Users/checkRole'
// import type { User } from '../payload-types'

// type isAdmin = (args: AccessArgs<unknown, User>) => boolean

// export const admins: isAdmin = ({ req: { user } }) => {
//   return checkRole(['admin'], user)
// }
