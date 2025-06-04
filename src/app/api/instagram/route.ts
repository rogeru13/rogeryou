import { NextResponse } from 'next/server';

const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

export async function GET() {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );
    
    const data = await response.json();
    
    // Filter for reels only and get the most recent one
    const reels = data.data.filter((item: any) => 
      item.media_type === 'VIDEO' && item.caption?.includes('#reel')
    );
    
    if (reels.length === 0) {
      return NextResponse.json({ error: 'No reels found' }, { status: 404 });
    }

    const latestReel = reels[0];
    const reelId = latestReel.permalink.split('/reel/')[1].split('/')[0];

    return NextResponse.json({ reelId });
  } catch (error) {
    console.error('Error fetching Instagram reel:', error);
    return NextResponse.json({ error: 'Failed to fetch reel' }, { status: 500 });
  }
} 