const INSTAGRAM_APP_ID = process.env.INSTAGRAM_APP_ID;
const REDIRECT_URI = 'https://f032-174-93-35-241.ngrok-free.app/api/instagram';

const instagram_url = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_APP_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;

export default function Instagram() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-semibold'>Instagram</h1>
      <a href={instagram_url} className='mt-4 p-4 bg-blue-500 text-white rounded-md'>Connect Instagram</a>
    </div>
  )
}