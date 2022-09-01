import { httpService } from "./http-service";

const AUTH = "/auth/login";

const efetuarLogin = ({ email, senha }) => {
  return httpService.post(AUTH, {
    email,
    password: senha,
  });
};

export const autenticacaoService = {
  efetuarLogin,
};
