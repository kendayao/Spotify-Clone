export const authEndpoint="https://accounts.spotify.com/authorize";

const redirectUri="http://localhost:3000/"

const clientId= "24d358e01d7045d9b713e5cc045c9a96"

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl=()=>{
    // gets access token from URL after sign in
    return window.location.hash
        .substring(1).split('&').reduce((initial,item)=>{
            let parts=item.split('=');
            initial[parts[0]]=decodeURIComponent(parts[1])

            return initial;
        },{});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;