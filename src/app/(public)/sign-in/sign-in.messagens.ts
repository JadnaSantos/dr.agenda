export const SIGN_IN_ERROR_CODES = {
  USER_NOT_FOUND: "USER_NOT_FOUND",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;

export const SIGN_IN_ERROR_MESSAGES = {
  USER_NOT_FOUND: "Usuário não encontrado. Senha ou e-mail incorretos.",
  UNKNOWN_ERROR: "Erro ao logar. Por favor, Tente novamente mais tarde.",
};
