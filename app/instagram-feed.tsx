import { getClient, Client } from "@/model/client";
import Image from "next/image";
import { AspectRatio } from "../components/ui/aspect-ratio";

interface Media {
  id: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO';
  media_url: string;
  permalink: string;
  timestamp: string;
  username: string;
}

const getMe = async (access_token: string) => {
  const response = await fetch(`https://graph.instagram.com/me?fields=id,username,media_count&access_token=${access_token}`);
  const data = await response.json();
  return data;
}

const getMedia = async (access_token: string) => {
  const params = new URLSearchParams({
    fields: 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username',
    access_token,
  });

  const response = await fetch(`https://graph.instagram.com/me/media?${params.toString()}`);
  const data = await response.json();
  return data as {
    data: Media[];
  }
}

let client: Client | null = null;

const getClientFromCache = async (slug: string) => {
  if (!client) {
    client = await getClient(slug);
  }
  return client;
}

export async function InstagramFeed() {
  const client = await getClientFromCache('bdj-contracting');

  if (!client) {
    return <div>No client.</div>
  }

  const mediaResponse = await getMedia(client.instagram_access_token);
  const media = mediaResponse?.data?.filter(v => v.media_type !== 'VIDEO').slice(0, 8);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {media && media.map((item) => (
        <a key={item.id} href={item.permalink} target="_blank">
          <AspectRatio ratio={1 / 1} className="shadow-md">
            <Image
              className="rounded-md"
              src={item.media_url}
              alt={item.caption}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </AspectRatio>
        </a>
      ))}
    </div>
  )
}