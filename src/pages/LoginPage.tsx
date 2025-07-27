import AppBar from "@/components/common/AppBar";
import ButtonActionFill from "@/components/common/ButtonActionFill";
import Headline from "@/components/common/Headline";
import TextField from "@/components/common/TextField";
import ArrowBackIcon from "@/components/icons/system/ArrowBackIcon";
import { useLogin } from "@/hooks/useAuth";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(["headline", "textField", "buttonAction"]);
  const { mutateAsync, isPending } = useLogin();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async () => {
    if (isPending) return null;

    if (emailRef.current?.value && passwordRef.current?.value)
      await mutateAsync({ email: emailRef.current.value, password: passwordRef.current.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="flex flex-col items-center">
      <AppBar LeadingIcon={ArrowBackIcon} onLeadingIconClick={() => navigate(-1)} />

      <Headline
        className="w-[200px] mt-7"
        title={t("headline_title_login")}
        description={t("headline_supportingText_logIn")}
      />

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8 mt-6">
        <TextField
          placeholder={t("textField:textField_logIn-id")}
          type="email"
          ref={emailRef}
          onIconClick={() => {
            if (emailRef.current) emailRef.current.value = "";
          }}
        />
        <TextField
          placeholder={t("textField:textField_logIn-password")}
          type="password"
          ref={passwordRef}
          onIconClick={() => {
            if (passwordRef.current) passwordRef.current.value = "";
          }}
        />

        <ButtonActionFill variant="primary" disabled={isPending} className="mt-[18px]">
          {t("buttonAction:button-action_signUp")}
        </ButtonActionFill>
      </form>
    </div>
  );
};

export default LoginPage;
