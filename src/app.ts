import axios, { AxiosResponse } from 'axios';
import { GoogleMapsAPIKey } from './config';

const searchAddressHandler = (event: Event) => {
  event.preventDefault();
  const formElement = event.target as HTMLFormElement;
  const addressInputElement = formElement.querySelector('#address') as HTMLInputElement;
  if (!addressInputElement) {
    return;
  }
  const address = addressInputElement.value;
  axios
    .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${GoogleMapsAPIKey}`)
    .then((response: AxiosResponse<unknown>) => {
      console.log(response);
    })
    .catch((err: Error) => {
      console.error(err);
    });

  console.log(address);
};

const form = document.getElementById('addressForm') as HTMLFormElement;
if (form) {
  form.addEventListener('submit', searchAddressHandler);
}
