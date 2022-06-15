import React from "react";
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
	
	const { loginWithRedirect } = useAuth0();

	return (

        <>
        <h1>Welcome to my webapp</h1>
	
			<Button
				variant="contained"
				color="primary"
				onClick={() => loginWithRedirect()}
			>
				Log In
			</Button>
            </>
	);
};

export default LoginPage;