import { useForm } from "react-hook-form" //importando react hooks
import { yupResolver } from "@hookform/resolvers/yup"//importando metodo de validaçao react hooks forms
import * as yup from "yup"// importando o Yup
import { api } from "../../services/api" //importando o serviço de api
import { toast } from "react-toastify"// importando a biblioteca react-toastify
import { useNavigate } from "react-router-dom"


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
import Logo from '../Login/img_login/hamburger.svg';
import Logo__1 from '../Login/img_login/folhas.svg';
import Logo__2 from '../Login/img_login/background.svg';
import { Button } from '../../components/ButtonGlobal';

export function Register() {
    const navigate = useNavigate();
    const schema = yup
        .object({
            name: yup
                .string()
                .required("Nome é obrigatório"),
            email: yup
                .string()
                .email("Digite um email válido")
                .required("Email é obrigatório"),

            password: yup
                .string()
                .min(6, "A senha deve conter no mínimo 6 dígitos")
                .required("Senha é obrigatória"),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref("password")], "As senhas devem ser iguais")
                .required("confirme sua senha"),

        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        try {
            const response = await toast.promise(
                api.post("/users", {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                }),
                {
                    pending: "Verificando seus dados...",
                    success: {
                        render() {
                            setTimeout(() => {
                                navigate("/login");
                            }, 2000);
                            return `Cadastro realizado com sucesso!`;
                        },
                    },
                    error: "🤯Erro ao realizar login. Verifique suas credenciais.",
                }
            );
            console.log(response.data); // Processa a resposta conforme necessário
        } catch (error) {
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
                    <figcaption><H1 className='code__byte'>CodeByte Burger Bar</H1>
                    </figcaption>
                </figure>
            </Img__Container>
            <Login__Container>
                <H1 className='criar__conta'>Criar conta...</H1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input__Container>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </Input__Container>
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
                    <Input__Container>
                        <label>Repita a senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </Input__Container>

                    <Button type="submit">Logar</Button>
                </Form>
                <H3>Não possui conta? <Link to="/login">Clique aqui</Link></H3>
            </Login__Container>
        </Container>
    );
}
