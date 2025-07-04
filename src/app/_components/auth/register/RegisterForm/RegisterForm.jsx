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

const RegisterForm = () => {
  const { register, loading } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleRegister = async (data) => {
    setError("");
    const result = await register({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    });
    
    if (result.success) {
      navigate("/");
    } else {
      setError(result.message || "Registration failed");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <JumboForm
      validationSchema={validationSchema}
      onSubmit={handleRegister}
    >
      <Stack spacing={3} mb={3}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        
        <Stack direction="row" spacing={2}>
          <JumboInput
            fullWidth
            fieldName="firstName"
            label="First Name"
          />
          <JumboInput
            fullWidth
            fieldName="lastName"
            label="Last Name"
          />
        </Stack>
        
        <JumboInput
          fullWidth
          fieldName="email"
          label="Email"
          type="email"
        />
        
        <JumboOutlinedInput
          fieldName="password"
          label="Password"
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
          Sign Up
        </LoadingButton>
        
        <Typography textAlign="center" variant="body1">
          Already have an account?{" "}
          <Link underline="none" to="/auth/login">
            Sign in
          </Link>
        </Typography>
      </Stack>
    </JumboForm>
  );
};

export { RegisterForm };