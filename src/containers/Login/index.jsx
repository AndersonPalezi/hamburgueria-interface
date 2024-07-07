import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import React from 'react';
import {
  Container,
  Img__Container,
  Login__Container,
  H1, P,
  Input__Container,
  H3,
  Form,
  Link
} from './styles';
import Logo from './img_login/hamburger.svg';
import Logo__1 from './img_login/folhas.svg';
import Logo__2 from './img_login/background.svg';
import { Button } from '../../components/ButtonGlobal';

export function Login() {
  const { putUserData } = useUser(); // Utilizando o hook useUser corretamente
  const navigate = useNavigate();

  // Definindo o schema Yup para validação do formulário
  const schema = yup.object().shape({
    email: yup.string().email("Digite um email válido").required("Email é obrigatório"),
    password: yup.string().min(6, "A senha deve conter no mínimo 6 dígitos").required("Senha é obrigatória"),
  });

  // Configurações do react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Função para lidar com o envio do formulário
  const onSubmit = async (userData) => {
    try {
      // Envia uma requisição POST para a API de login
      const response = await toast.promise(
        api.post("/sessions", {
          email: userData.email,
          password: userData.password,
        }),
        {
          pending: "Fazendo login...",
          success: {
            render() {
              setTimeout(() => {
                navigate("/");
              }, 2000);
              return `Login realizado com sucesso!`;
            },
          },
          error: "🤯Erro ao realizar login. Verifique suas credenciais.",
        }
      );

      // Exemplo de atualização dos dados do usuário após o login
      putUserData(userData);

      console.log(response.data); // Processa a resposta da API conforme necessário
    } catch (error) {
      // Trata erros durante a solicitação
      toast.error("Erro na solicitação. Verifique sua conexão ou tente novamente mais tarde.");
      console.error("Erro na solicitação", error);
    }
  };

  return (
    <Container>
      <Img__Container>
        <img src={Logo__2} alt="Background" className="background-image" />
        <figure>
          <img className='hamburguer' src={Logo} alt="Logo" />
          <img className='folhas' src={Logo__1} alt="Logo__1" />
          <figcaption><H1 className='code__byte'>CodeByte Burger Bar</H1></figcaption>
        </figure>
      </Img__Container>
      <Login__Container>
        <H1 className='bemVindo'>Bem vindos !</H1>
        <P className='description'>Somos uma <span>hamburgueria</span> temática voltada<br /> para amantes
          de tecnologia e gastronomia.<br /> Nossa missão é proporcionar
          uma experiência única, <br /> combinando a paixão por códigos
          com deliciosos hambúrgueres <br /> artesanais. Nosso ambiente
          é descontraído e moderno, <br /> inspirado no universo da
          programação e do desenvolvimento de software. </P>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input__Container>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </Input__Container>
          <Input__Container>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </Input__Container>
          <H3 className='recovery'>Esqueci minha <a className='click__here'>senha.</a></H3>
          <Button type="submit">Logar</Button>
        </Form>
        <H3>Não possui conta? <Link to="/cadastro">Clique aqui</Link></H3>
      </Login__Container>
    </Container>
  );
}
