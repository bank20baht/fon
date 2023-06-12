// https://api.openweathermap.org/data/2.5/forecast?lat=40.7128&lon=-74.0060&units=metric&appid=c0d919cc900c017e3eb82c52744080e0
// get current weather https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longtitude}&units=metric&appid=c0d919cc900c017e3eb82c52744080e0
export const sampleData = {
  coord: {
    lon: 99.7404,
    lat: 8.4576,
  },
  weather: [
    {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10d',
    },
  ],
  base: 'stations',
  main: {
    temp: 30.66,
    feels_like: 34.85,
    temp_min: 30.66,
    temp_max: 31.24,
    pressure: 1006,
    humidity: 63,
    sea_level: 1006,
    grnd_level: 960,
  },
  visibility: 10000,
  wind: {
    speed: 3.03,
    deg: 266,
    gust: 5.48,
  },
  rain: {
    '1h': 2.33,
  },
  clouds: {
    all: 97,
  },
  dt: 1686477774,
  sys: {
    type: 2,
    id: 2038449,
    country: 'TH',
    sunrise: 1686438149,
    sunset: 1686483529,
  },
  timezone: 25200,
  id: 1151278,
  name: 'Phrom Khiri',
  cod: 200,
};

export const data5days = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1686571200,
      main: {
        temp: 20.11,
        feels_like: 20.37,
        temp_min: 20.11,
        temp_max: 21.1,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1009,
        humidity: 84,
        temp_kf: -0.99,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.31,
        deg: 167,
        gust: 9.49,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-12 12:00:00',
    },
    {
      dt: 1686582000,
      main: {
        temp: 21.01,
        feels_like: 21.2,
        temp_min: 21.01,
        temp_max: 22.82,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 78,
        temp_kf: -1.81,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 6.24,
        deg: 157,
        gust: 8.83,
      },
      visibility: 10000,
      pop: 0.07,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-12 15:00:00',
    },
    {
      dt: 1686592800,
      main: {
        temp: 22.46,
        feels_like: 22.69,
        temp_min: 22.46,
        temp_max: 23.64,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 74,
        temp_kf: -1.18,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 54,
      },
      wind: {
        speed: 7.34,
        deg: 152,
        gust: 9.63,
      },
      visibility: 8288,
      pop: 0.03,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-12 18:00:00',
    },
    {
      dt: 1686603600,
      main: {
        temp: 22.53,
        feels_like: 22.82,
        temp_min: 22.53,
        temp_max: 22.53,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1005,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 7.05,
        deg: 146,
        gust: 9.97,
      },
      visibility: 8698,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-12 21:00:00',
    },
    {
      dt: 1686614400,
      main: {
        temp: 20.17,
        feels_like: 20.49,
        temp_min: 20.17,
        temp_max: 20.17,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1003,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 5.79,
        deg: 134,
        gust: 9.33,
      },
      visibility: 10000,
      pop: 0.43,
      rain: {
        '3h': 0.33,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-13 00:00:00',
    },
    {
      dt: 1686625200,
      main: {
        temp: 19.45,
        feels_like: 19.93,
        temp_min: 19.45,
        temp_max: 19.45,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1003,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3,
        deg: 147,
        gust: 3.83,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 1.37,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-13 03:00:00',
    },
    {
      dt: 1686636000,
      main: {
        temp: 19.98,
        feels_like: 20.46,
        temp_min: 19.98,
        temp_max: 19.98,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1003,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 2.52,
        deg: 279,
        gust: 4.77,
      },
      visibility: 10000,
      pop: 0.93,
      rain: {
        '3h': 0.12,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-13 06:00:00',
    },
    {
      dt: 1686646800,
      main: {
        temp: 18.94,
        feels_like: 19.21,
        temp_min: 18.94,
        temp_max: 18.94,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1004,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 4.38,
        deg: 301,
        gust: 6.92,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        '3h': 0.16,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-13 09:00:00',
    },
    {
      dt: 1686657600,
      main: {
        temp: 17.94,
        feels_like: 17.88,
        temp_min: 17.94,
        temp_max: 17.94,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 4.37,
        deg: 294,
        gust: 6.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-13 12:00:00',
    },
    {
      dt: 1686668400,
      main: {
        temp: 24.06,
        feels_like: 23.77,
        temp_min: 24.06,
        temp_max: 24.06,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 3.67,
        deg: 262,
        gust: 4.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-13 15:00:00',
    },
    {
      dt: 1686679200,
      main: {
        temp: 27.43,
        feels_like: 26.78,
        temp_min: 27.43,
        temp_max: 27.43,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 32,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 28,
      },
      wind: {
        speed: 5.34,
        deg: 243,
        gust: 5.7,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-13 18:00:00',
    },
    {
      dt: 1686690000,
      main: {
        temp: 27.05,
        feels_like: 26.45,
        temp_min: 27.05,
        temp_max: 27.05,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1004,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 42,
      },
      wind: {
        speed: 6.33,
        deg: 244,
        gust: 6.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-13 21:00:00',
    },
    {
      dt: 1686700800,
      main: {
        temp: 23.57,
        feels_like: 22.95,
        temp_min: 23.57,
        temp_max: 23.57,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 5.88,
        deg: 240,
        gust: 8.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-14 00:00:00',
    },
    {
      dt: 1686711600,
      main: {
        temp: 21.19,
        feels_like: 20.51,
        temp_min: 21.19,
        temp_max: 21.19,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1006,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 55,
      },
      wind: {
        speed: 3.47,
        deg: 248,
        gust: 9.13,
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-14 03:00:00',
    },
    {
      dt: 1686722400,
      main: {
        temp: 19.37,
        feels_like: 18.62,
        temp_min: 19.37,
        temp_max: 19.37,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 2.8,
        deg: 238,
        gust: 8.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-14 06:00:00',
    },
    {
      dt: 1686733200,
      main: {
        temp: 18.26,
        feels_like: 17.73,
        temp_min: 18.26,
        temp_max: 18.26,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1005,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 47,
      },
      wind: {
        speed: 1.56,
        deg: 179,
        gust: 2.67,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        '3h': 0.1,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-14 09:00:00',
    },
    {
      dt: 1686744000,
      main: {
        temp: 20.09,
        feels_like: 20.01,
        temp_min: 20.09,
        temp_max: 20.09,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1004,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 73,
      },
      wind: {
        speed: 3.26,
        deg: 158,
        gust: 4.78,
      },
      visibility: 10000,
      pop: 0.08,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-14 12:00:00',
    },
    {
      dt: 1686754800,
      main: {
        temp: 22.72,
        feels_like: 22.72,
        temp_min: 22.72,
        temp_max: 22.72,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 1002,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.67,
        deg: 158,
        gust: 8.56,
      },
      visibility: 10000,
      pop: 0.72,
      rain: {
        '3h': 0.42,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-14 15:00:00',
    },
    {
      dt: 1686765600,
      main: {
        temp: 22.25,
        feels_like: 22.31,
        temp_min: 22.25,
        temp_max: 22.25,
        pressure: 999,
        sea_level: 999,
        grnd_level: 999,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.76,
        deg: 152,
        gust: 12.75,
      },
      visibility: 10000,
      pop: 0.87,
      rain: {
        '3h': 2.37,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-14 18:00:00',
    },
    {
      dt: 1686776400,
      main: {
        temp: 20.14,
        feels_like: 20.12,
        temp_min: 20.14,
        temp_max: 20.14,
        pressure: 999,
        sea_level: 999,
        grnd_level: 999,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 4.04,
        deg: 206,
        gust: 9.37,
      },
      visibility: 10000,
      pop: 0.99,
      rain: {
        '3h': 4.15,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-14 21:00:00',
    },
    {
      dt: 1686787200,
      main: {
        temp: 20.41,
        feels_like: 20.07,
        temp_min: 20.41,
        temp_max: 20.41,
        pressure: 999,
        sea_level: 999,
        grnd_level: 999,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 5.15,
        deg: 239,
        gust: 9.93,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 0.34,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-15 00:00:00',
    },
    {
      dt: 1686798000,
      main: {
        temp: 18,
        feels_like: 17.37,
        temp_min: 18,
        temp_max: 18,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 999,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 21,
      },
      wind: {
        speed: 5.87,
        deg: 244,
        gust: 10.48,
      },
      visibility: 10000,
      pop: 0.15,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-15 03:00:00',
    },
    {
      dt: 1686808800,
      main: {
        temp: 16.74,
        feels_like: 16.3,
        temp_min: 16.74,
        temp_max: 16.74,
        pressure: 999,
        sea_level: 999,
        grnd_level: 999,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 5.96,
        deg: 250,
        gust: 10.16,
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-15 06:00:00',
    },
    {
      dt: 1686819600,
      main: {
        temp: 16.3,
        feels_like: 15.94,
        temp_min: 16.3,
        temp_max: 16.3,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 1000,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 71,
      },
      wind: {
        speed: 5.57,
        deg: 271,
        gust: 9.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-15 09:00:00',
    },
    {
      dt: 1686830400,
      main: {
        temp: 17.78,
        feels_like: 17.39,
        temp_min: 17.78,
        temp_max: 17.78,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 1002,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 54,
      },
      wind: {
        speed: 5.92,
        deg: 292,
        gust: 8.58,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-15 12:00:00',
    },
    {
      dt: 1686841200,
      main: {
        temp: 22.5,
        feels_like: 22.06,
        temp_min: 22.5,
        temp_max: 22.5,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 1002,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 5.37,
        deg: 307,
        gust: 7.92,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-15 15:00:00',
    },
    {
      dt: 1686852000,
      main: {
        temp: 25.69,
        feels_like: 25.33,
        temp_min: 25.69,
        temp_max: 25.69,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 1002,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 39,
      },
      wind: {
        speed: 5.94,
        deg: 333,
        gust: 7.67,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-15 18:00:00',
    },
    {
      dt: 1686862800,
      main: {
        temp: 25.99,
        feels_like: 25.99,
        temp_min: 25.99,
        temp_max: 25.99,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 1003,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 3.18,
        deg: 304,
        gust: 4.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-15 21:00:00',
    },
    {
      dt: 1686873600,
      main: {
        temp: 24.32,
        feels_like: 23.96,
        temp_min: 24.32,
        temp_max: 24.32,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1003,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 71,
      },
      wind: {
        speed: 2.72,
        deg: 297,
        gust: 5.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-16 00:00:00',
    },
    {
      dt: 1686884400,
      main: {
        temp: 22.27,
        feels_like: 21.91,
        temp_min: 22.27,
        temp_max: 22.27,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 2.63,
        deg: 300,
        gust: 5.32,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-16 03:00:00',
    },
    {
      dt: 1686895200,
      main: {
        temp: 20.23,
        feels_like: 19.85,
        temp_min: 20.23,
        temp_max: 20.23,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 67,
      },
      wind: {
        speed: 1.53,
        deg: 304,
        gust: 1.96,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-16 06:00:00',
    },
    {
      dt: 1686906000,
      main: {
        temp: 19.69,
        feels_like: 19.33,
        temp_min: 19.69,
        temp_max: 19.69,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.45,
        deg: 244,
        gust: 1.64,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-16 09:00:00',
    },
    {
      dt: 1686916800,
      main: {
        temp: 16.6,
        feels_like: 16.61,
        temp_min: 16.6,
        temp_max: 16.6,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.1,
        deg: 312,
        gust: 4.36,
      },
      visibility: 7413,
      pop: 0.87,
      rain: {
        '3h': 2.11,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-16 12:00:00',
    },
    {
      dt: 1686927600,
      main: {
        temp: 18.23,
        feels_like: 18.25,
        temp_min: 18.23,
        temp_max: 18.23,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 2.43,
        deg: 169,
        gust: 4.27,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 3.02,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-16 15:00:00',
    },
    {
      dt: 1686938400,
      main: {
        temp: 20.68,
        feels_like: 20.63,
        temp_min: 20.68,
        temp_max: 20.68,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 3.83,
        deg: 183,
        gust: 4.72,
      },
      visibility: 9805,
      pop: 1,
      rain: {
        '3h': 1.91,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-16 18:00:00',
    },
    {
      dt: 1686949200,
      main: {
        temp: 21.75,
        feels_like: 21.63,
        temp_min: 21.75,
        temp_max: 21.75,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1003,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 43,
      },
      wind: {
        speed: 3.82,
        deg: 255,
        gust: 5.39,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 2.95,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-16 21:00:00',
    },
    {
      dt: 1686960000,
      main: {
        temp: 19.94,
        feels_like: 19.82,
        temp_min: 19.94,
        temp_max: 19.94,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 66,
      },
      wind: {
        speed: 3.43,
        deg: 285,
        gust: 6,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 2.19,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-06-17 00:00:00',
    },
    {
      dt: 1686970800,
      main: {
        temp: 17.73,
        feels_like: 17.6,
        temp_min: 17.73,
        temp_max: 17.73,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1005,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 3.55,
        deg: 306,
        gust: 6.48,
      },
      visibility: 10000,
      pop: 0.3,
      rain: {
        '3h': 0.15,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-17 03:00:00',
    },
    {
      dt: 1686981600,
      main: {
        temp: 15.57,
        feels_like: 15.3,
        temp_min: 15.57,
        temp_max: 15.57,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1005,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 4.15,
        deg: 277,
        gust: 6.15,
      },
      visibility: 10000,
      pop: 0.21,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-17 06:00:00',
    },
    {
      dt: 1686992400,
      main: {
        temp: 15.08,
        feels_like: 14.84,
        temp_min: 15.08,
        temp_max: 15.08,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 66,
      },
      wind: {
        speed: 4.15,
        deg: 284,
        gust: 7.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-06-17 09:00:00',
    },
  ],
  city: {
    id: 5128581,
    name: 'New York',
    coord: {
      lat: 40.7128,
      lon: -74.006,
    },
    country: 'US',
    population: 8175133,
    timezone: -14400,
    sunrise: 1686561867,
    sunset: 1686616044,
  },
};
