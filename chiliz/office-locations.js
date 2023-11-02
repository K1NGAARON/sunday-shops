document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('billing_choose_your_campus_for_delivery');
    const countrySelectElement = document.getElementById('billing_country');

    if (selectElement) {
        selectElement.addEventListener('change', function () {
            let selectedOption = this.value;

            const addresses = [
                {
                    label: 'Chiliz Madrid Office',
                    option: 'Madrid - Socios.com',
                    address1: 'Calle Leganitos 47',
                    address2: '8 A',
                    city: 'Madrid',
                    zip: '28013',
                    country: 'ES',
                    phone: '',
                },
                {
                    label: 'Chiliz Lyon Office',
                    option: 'Lyon - Socios Services France',
                    address1: 'Cours Lafayette 222',
                    address2: '',
                    city: 'Lyon',
                    zip: '69003',
                    country: 'FR',
                    phone: '',
                },
                {
                    label: 'Chiliz Malta Office',
                    option: 'Malta - Chiliz',
                    address1: 'Sliema Road',
                    address2: '14 East, Level 7',
                    city: 'Gzira',
                    zip: 'GZR1639',
                    country: 'MT',
                    phone: '',
                },
                {
                    label: 'Home Address',
                    option: 'home-address',
                    address1: '',
                    address2: '',
                    city: '',
                    zip: '',
                    country: '',
                    phone: '',
                }
            ];

            const selectedAddressData = addresses.find((addressData) => addressData.option === selectedOption);

            if (selectedAddressData) {
                const addressField1 = document.getElementById('billing_address_1');
                const addressField2 = document.getElementById('billing_address_2');
                const cityField = document.getElementById('billing_city');
                const zipCodeField = document.getElementById('billing_postcode');

                if (addressField1) {
                    addressField1.value = selectedAddressData.address1;
                }

                if (addressField2) {
                    addressField2.value = selectedAddressData.address2;
                }

                if (cityField) {
                    cityField.value = selectedAddressData.city;
                }

                if (zipCodeField) {
                    zipCodeField.value = selectedAddressData.zip;
                }

                if (countrySelectElement) {
                    const options = countrySelectElement.getElementsByTagName('option');
                    for (let i = 0; i < options.length; i++) {
                        if (options[i].value === selectedAddressData.country) {
                            options[i].setAttribute('selected', 'selected');
                        } else {
                            options[i].removeAttribute('selected');
                        }
                    }

                    const event = new Event('change');
                    countrySelectElement.dispatchEvent(event);
                }
            }
        });
    }
});