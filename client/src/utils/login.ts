import { LOGIN_USER, ADD_USER } from "./mutations";
import { QUERY_USER, QUERY_ME } from "./queries";
import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState, useLayoutEffect } from "react";
import ErrorPage from "../pages/Error";


const retrieveUser = async (userId: string) => {
  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { userId },
  });

  if (loading) return null;
  if (error) throw new Error("Failed to retrieve user");

  return data.user;
}

export { retrieveUser };