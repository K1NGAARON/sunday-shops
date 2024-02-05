document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('billing_delivery_addresss');
    const countrySelectElement = document.getElementById('billing_country');

    if (selectElement) {
        selectElement.addEventListener('change', function () {
            let selectedOption = this.value;

            const addresses = [
                {
                    label: '',
                    option: 'abbyy-inc',
                    address1: '860 Hillview Court',
                    address2: '',
                    city: 'Milpitas',
                    zip: '95035',
                    country: 'US',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-development-inc',
                    address1: 'Glenwood Avenue 2626',
                    address2: '',
                    city: 'Raleigh',
                    zip: '27608',
                    country: 'US',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-europe',
                    address1: '',
                    address2: '',
                    city: '',
                    zip: '',
                    country: '',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-beograd',
                    address1: 'Milutina Milankovića 1i',
                    address2: '',
                    city: 'Belgrade',
                    zip: '11070',
                    country: 'RS',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-europe-italian',
                    address1: "Via Lago D'Orta 6",
                    address2: '',
                    city: 'Arona',
                    zip: '28041',
                    country: 'IT',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-france',
                    address1: '31 Place de la Madeleine',
                    address2: '',
                    city: 'Paris',
                    zip: "75008",
                    country: 'FR',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-japan',
                    address1: '〒222 0033 Kanagawa',
                    address2: '',
                    city: 'Yokohama',
                    zip: '222 0033',
                    country: 'JP',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-process-intelligence',
                    address1: '1051 Sas utca 10, 1',
                    address2: '',
                    city: 'Budapest',
                    zip: '1051',
                    country: 'HU',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-pty-ltd',
                    address1: 'Level 45, 680 George Street',
                    address2: '',
                    city: 'Sydney NSW',
                    zip: '2000',
                    country: 'AU',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-singapore',
                    address1: '8 Marina View #43 038',
                    address2: '',
                    city: 'Singapore',
                    zip: '018960',
                    country: 'SG',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-software-house-ukraine',
                    address1: 'bvr Stepan Bandera , 13-B, 7 fl',
                    address2: '',
                    city: 'Kyiv',
                    zip: '04073',
                    country: 'UA',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-software-iberica',
                    address1: 'San Elías 29 35,',
                    address2: '',
                    city: 'Barcelona',
                    zip: '08006',
                    country: 'ES',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-solutions-ltd',
                    address1: 'Kyriakou Matsi Av. 61',
                    address2: '',
                    city: 'Nicosia',
                    zip: '1082',
                    country: 'CY',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-uk-ltd',
                    address1: '70 Gracechurch Street',
                    address2: '',
                    city: 'London',
                    zip: 'EC3V 0HR',
                    country: 'GB',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-usa-software',
                    address1: '860 Hillview Ct',
                    address2: '',
                    city: 'Milpitas',
                    zip: '95035',
                    country: 'US',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-usa-software-taiwan',
                    address1: '3 F., No. 156, Jiankang Rd',
                    address2: '',
                    city: 'Taipei City',
                    zip: '10586',
                    country: 'TW',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-tri-pod-llc',
                    address1: 'bvr Stepan Bandera , 13-B, 7 fl',
                    address2: '',
                    city: 'Kyiv',
                    zip: '04073',
                    country: 'UA',
                    phone: '',
                },
                {
                    label: '',
                    option: 'abbyy-ua-branch',
                    address1: 'bvr Stepan Bandera , 13-B, 7 fl',
                    address2: '',
                    city: 'Kyiv',
                    zip: '04073',
                    country: 'UA',
                    phone: '',
                },
                {
                    label: 'Remote',
                    option: 'remote',
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