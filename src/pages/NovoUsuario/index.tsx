import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import { TipoUsuario } from '../../store/user/types';
import { ChangeHandlerParam } from '../../types';
import { Option } from "../../components/Select/interfaces";
import Select from '../../components/Select';
import { startAddUser } from '../../store/user/actions';

const usuarioVazio = {
  id: "",
  nome: "",
  email: "",
  senha: "",
  confirmaSenha: "",
  dataNascimento: "",
  tipoUsuario: TipoUsuario.Colaborador,    
};

const getArrOptions = (): Option[] => {
  const arrOpt = [];
  arrOpt.push({ nome: TipoUsuario.Colaborador, valor: "c" });
  arrOpt.push({ nome: TipoUsuario.Administrador, valor: "a" });
  arrOpt.push({ nome: TipoUsuario.Gerente, valor: "g" });
  return arrOpt;
}; 

export const NovoUsuario: React.FC = () => {
  const [usuario, setUsuario] = useState(usuarioVazio);

  const dispatch = useDispatch();

  const handleChange = (event:ChangeHandlerParam): void => {
    const alterado = {...usuario, [event.target.name]: event.target.value };
    setUsuario(alterado);
  }

  const handleSubmit = () => {
    console.log('clicou');
    dispatch(startAddUser(usuario));
    setUsuario(usuarioVazio);
  }

  return (
    <div>
      <h1>Cadastro de usuários</h1>
      <br />
      <h4 className="info">Enter User Info</h4>
      <Input type="text" label="nome" changeHandler={handleChange} />
      <Input type="email" label="email" changeHandler={handleChange} />
      <Input type="password" label="senha" changeHandler={handleChange} />
      <Input type="password" label="confirmaSenha" changeHandler={handleChange} />
      <Input type="text" label="dataNascimento" changeHandler={handleChange} />
      <Select label="Tipo Usuario" options={getArrOptions()} />
      <button onClick={handleSubmit}>Add</button>
    </div>    
  )
}

export default NovoUsuario;