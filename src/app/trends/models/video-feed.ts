export interface VideoFeed {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  viewCount: number;
  likeCount: number;
  statistics?: {
    likeCount: number;
    viewCount: number;
  };
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string
      }
    };
    publishedAt: string;
  }
};
