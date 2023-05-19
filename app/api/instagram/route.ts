import { updateToken } from "@/model/client";

const INSTAGRAM_APP_ID = process.env.INSTAGRAM_APP_ID || '';
const INSTAGRAM_APP_SECRET = process.env.INSTAGRAM_APP_SECRET || '';
const clientName = 'bdj-contracting';
const redirect_uri = 'https://f032-174-93-35-241.ngrok-free.app/api/instagram';


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    throw new Error('No code provided');
  }

  const form_data = new FormData();
  form_data.append('client_id', INSTAGRAM_APP_ID);
  form_data.append('client_secret', INSTAGRAM_APP_SECRET);
  form_data.append('code', code);
  form_data.append('grant_type', 'authorization_code');
  form_data.append('redirect_uri', redirect_uri);

  const response = await fetch('https://api.instagram.com/oauth/access_token', {
    method: 'POST',
    body: form_data
  });

  const data = await response.json();

  if (data.error_type) {
    throw new Error(data.error_message);
  }

  const {
    access_token,
    user_id,
  } = data;

  // get the long-lived token
  const response2 = await fetch(`https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${INSTAGRAM_APP_SECRET}&access_token=${access_token}`);

  const data2 = await response2.json();

  const {
    access_token: long_lived_token,
    expires_in
  } = data2;

  // save the token
  await updateToken(clientName, {
    instagram_access_token: long_lived_token,
    instagram_user_id: user_id,
    expires_in
  });

  return Response.redirect('https://bdjcontracting.com');
}