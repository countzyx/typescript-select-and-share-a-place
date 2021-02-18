//import { GoogleMapsAPIKey } from './config';

const searchAddressHandler = (event: Event) => {
  event.preventDefault();
  const formElement = event.target as HTMLFormElement;
  const addressInputElement = formElement.querySelector('#address') as HTMLInputElement;
  if (!addressInputElement) {
    return;
  }
  const address = addressInputElement.value;

  console.log(address);
};

const form = document.getElementById('addressForm') as HTMLFormElement;
if (form) {
  form.addEventListener('submit', searchAddressHandler);
}
