
import React from 'react';
import {
  Container,
  Img__Container,
  Login__Container,
  H1, P,
  Input__Container,
  Button__logar,
  H3,
  Form
} from './styles';
import Logo from './img_login/hamburger.svg';
import Logo__1 from './img_login/folhas.svg';
import Logo__2 from './img_login/background.svg';

export function Login() {
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
        <H1 className='bemVindo'>Bem vindos !</H1>
        <P className='description' >Somos uma <span>hamburgueria</span> temática voltada<br></br> para amantes
          de tecnologia e gastronomia.<br></br> Nossa missão é proporcionar
          uma experiência única, <br></br>combinando a paixão por códigos
          com deliciosos hambúrgueres <br></br>artesanais. Nosso ambiente
          é descontraído e moderno, <br></br>inspirado no universo da
            programação e do desenvolvimento de software. </P>
        <Form>
          <Input__Container>
            <label>Email</label>
            <input type="email" placeholder="E-mail" />
          </Input__Container>
          <Input__Container>
            <label>Senha</label>
            <input type="password" placeholder="Senha" />
          </Input__Container>
          <H3 className='recovery'>Esqueçi minha <a>senha.</a></H3>
          <Button__logar>Logar</Button__logar>
        </Form>
        <H3>Não possui conta? <a className='click__here'>Clique aqui</a></H3>
      </Login__Container>
    </Container>
  );
}
