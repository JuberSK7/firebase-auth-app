import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert(`User Login Successfully ${userCredential.user.email}`);
        navigate("/table");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "400px",
            height: "400px",
            backgroundColor: "#F4F6F6",
            borderRadius: "12px",
          }}
        >
          <Box
            sx={{
              marginBottom: "12px",
              backgroundColor: "",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src="https://img.icons8.com/color/512/circled-user-male-skin-type-1-2--v1.png"
              alt="img"
              style={{ width: "70px" }}
            />
            <h1>LogIn Form</h1>
          </Box>
          <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            variant="contained"
            color="success"
            size="large"
            type="submit"
            sx={{ marginTop: "18px" }}
          >
            Log In
          </Button>
          <Box sx={{ marginTop: "44px" }}>
            <h4>
              You don't have Account{" "}
              <Link to="/" style={{ textDecorationLine: "none" }}>
                Register
              </Link>
            </h4>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default SignIn;
