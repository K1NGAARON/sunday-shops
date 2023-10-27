document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('billing_where_do_we_ship_your_gift');
    const countrySelectElement = document.getElementById('billing_country');

    if (selectElement) {
        selectElement.addEventListener('change', function () {
            let selectedOption = this.value;

            const addresses = [
                {
                    label: 'Polish office',
                    option: 'polish-office',
                    address1: 'Poleczki 21A',
                    address2: '',
                    city: 'Warszawa',
                    zip: '02-822',
                    country: 'PL',
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