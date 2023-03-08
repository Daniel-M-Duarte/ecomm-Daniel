import bcryptjs from 'bcryptjs';

function senhaEcrypt(senha) {
  const salt = bcryptjs.genSaltSync();
  const senhaHasheada = bcryptjs.hashSync(senha, salt);
  return senhaHasheada;
}

export default senhaEcrypt;

