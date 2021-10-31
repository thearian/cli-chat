import { LOGIN } from "@/graphql/auth";
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { LoginForm } from "../@types";

export function useLogin() {
  const formMethods = useForm<LoginForm>({ mode: "all" });
  const [login, { error, loading }] = useLazyQuery(LOGIN);

  const submit = (variables: LoginForm) => {
    login({ variables });
  };

  return { formMethods, submit, error, loading };
}
