export const EnvURL = {
  // baseUrl: 'http://localhost:8080'
  baseUrl: process.env.REACT_APP_TENNIS_API_URL
    ? process.env.REACT_APP_TENNIS_API_URL
    : process.env.REACT_APP_TENNIS_API_URL_TEMP,
}
