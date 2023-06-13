export type forecastDataType = {
  cod: string;
  message: number;
  cnt: number;
  list: forecastEntry[];
};

export type forecastEntry = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: forecastDescription[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
};

export type forecastDescription = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
