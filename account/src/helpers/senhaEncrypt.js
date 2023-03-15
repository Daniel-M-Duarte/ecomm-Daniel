/* eslint-disable linebreak-style */
/* eslint linebreak-style: ["error", "unix"] */
import bcryptjs from 'bcryptjs';

function senhaEcrypt(senha) {
  const salt = bcryptjs.genSaltSync();
  return bcryptjs.hashSync(senha, salt);
}

export default senhaEcrypt;
