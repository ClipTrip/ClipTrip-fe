import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi } from "@/services/authService";
import type { AuthenticationResponse, LoginRequest, LoginResponse } from "@/types/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import type { ApiFailResponse } from "@/types/api";

export const useAuthentication = () => {
  return useQuery<AuthenticationResponse, Error, AuthenticationResponse>({
    queryKey: ["me"],
    staleTime: Infinity,
    queryFn: authApi.authentication,
    retry: false,
    refetchOnWindowFocus: false
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation<LoginResponse, ApiFailResponse, LoginRequest>({
    mutationFn: (data) => authApi.login(data),
    onSuccess: (res) => {
      console.log(res.data.language);
      queryClient.invalidateQueries({
        queryKey: ["me"]
      });
      navigate("/");
    },

    onError: (error) => {
      console.error("로그인 실패:", error.message);
      toast.error(error.message);
    }
  });
};
