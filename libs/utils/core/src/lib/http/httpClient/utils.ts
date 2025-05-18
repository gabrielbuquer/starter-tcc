import { STATUS_CODE } from '../statusCode';

type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
}

export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
}

export const is3xxError = (status: number | undefined) =>
  status &&
  status >= STATUS_CODE.MULTIPLE_CHOICES &&
  status < STATUS_CODE.BAD_REQUEST;

export const is4xxError = (status: number | undefined) =>
  status &&
  status >= STATUS_CODE.BAD_REQUEST &&
  status < STATUS_CODE.INTERNAL_SERVER_ERROR;

export const is5xxError = (status: number | undefined) =>
  status &&
  status >= STATUS_CODE.INTERNAL_SERVER_ERROR &&
  status <= STATUS_CODE.NETWORK_AUTHENTICATION_REQUIRED;
