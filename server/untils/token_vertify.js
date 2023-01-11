import jwt from 'jsonwebtoken'
let signkey = 'this_is_for_ximuCMS_API'

function setToken({ name, uid, role, team_id }) {
  return new Promise((resolve) => {
    const token = jwt.sign({
      _uid: uid,
      name: name,
      role: role,
      team_id: team_id
    }, signkey, { expiresIn: '24h' });
    resolve(token)
  })
}

export { signkey, setToken }