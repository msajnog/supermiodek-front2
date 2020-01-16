export interface Photo {
  thumbnailUrl: string;
  photoUrl: string;
}

export interface TemperatureResponse {
  data: Temperature[];
}

export interface Temperature {
  fileName: string;
  date: string;
  temperatures: string[];
}
