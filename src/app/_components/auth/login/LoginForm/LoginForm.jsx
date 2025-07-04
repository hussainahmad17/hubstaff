import LoadingButton from "@mui/lab/LoadingButton";
import {
  JumboForm,
  JumboInput,
  JumboOutlinedInput,
} from "@jumbo/vendors/react-hook-form";
import { validationSchema } from "../validation";
import { IconButton, InputAdornment, Stack, Typography, Alert } from "@mui/material";
import { Link } from "@jumbo/shared";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "@app/_components/_core/AuthProvider/hooks";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleLogin = async (data) => {
    setError("");
    const result = await login({
      email: data.email,
      password: data.password
    });
    
    if (result.success) {
      navigate("/");
    } else {
      setError(result.message || "Login failed");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <JumboForm
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      <Stack spacing={3} mb={3}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        
        <JumboInput
          fullWidth
          fieldName="email"
          label={t("login.email")}
          type="email"
        />
        
        <JumboOutlinedInput
          fieldName="password"
          label={t("login.password")}
          type={showPassword ? "text" : "password"}
          margin="none"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          sx={{ bgcolor: (theme) => theme.palette.background.paper }}
        />

        <LoadingButton
          fullWidth
          type="submit"
          variant="contained"
          size="large"
          loading={loading}
        >
          {t("login.loggedIn")}
        </LoadingButton>
        
        <Typography textAlign="center" variant="body1">
          Don't have an account?{" "}
          <Link underline="none" to="/auth/register">
            Sign up
          </Link>
        </Typography>
      </Stack>
    </JumboForm>
  );
};

export { LoginForm };