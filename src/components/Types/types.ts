export interface Data {
  id: string;
  likes: number;
  alt_description: string | null;
  color: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    name: string | null;
    location: string | null;
  };
}
