import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const auth0ProviderWithNavigate = ({children}: Props) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOAMIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if(!domain || !clientId || !redirectUri){
    throw new Error("unable to initialize auth");
  }

  const onRedirectCallback = ()=>{
    
    navigate("/auth-callback");
  }
  
  return (
    <Auth0Provider 
        domain={domain} 
        clientId={clientId}
        authorizationParams={{
            redirect_uri : redirectUri
        }}
        onRedirectCallback={onRedirectCallback}>

           {children} 
    </Auth0Provider>
  )
}

export default auth0ProviderWithNavigate;

function getAccessTokenSilently() {
  throw new Error("Function not implemented.");
}
