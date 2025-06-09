export const SIGN_UP_ERROR_CODES = {
  USER_ALREADY_EXISTS: "USER_ALREADY_EXISTS",
  INVALID_FORM_DATA: "INVALID_FORM_DATA",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
} as const;

export const SIGN_UP_ERROR_MESSAGES = {
  USER_ALREADY_EXISTS:
    "E-mail já cadastrado. Tente fazer login ou recupere sua senha.",
  INVALID_FORM_DATA:
    "Erro ao criar conta. Verifique se todos os campos estão preenchidos corretamente e tente novamente.",
  UNKNOWN_ERROR: "Erro ao criar conta. Tente novamente mais tarde.",
};
