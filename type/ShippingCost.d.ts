interface reqQuerySearchProps {
  search: string;
  limit: number;
  offset: number;
}

interface reqQueryCalculateProps {
  origin: string;
  destination: string;
  weight: number;
  courir: string;
  price: string;
}

interface reqQueryTrackProps {
  awb: string;
  courier: string;
}
