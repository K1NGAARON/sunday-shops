document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('billing_choose_your_campus_for_delivery');
    const countrySelectElement = document.getElementById('billing_country');

    if (selectElement) {
        selectElement.addEventListener('change', function () {
            let selectedOption = this.value;

            const addresses = [
                {
                    option: 'iO - Campus Amsterdam',
                    address1: 'Spaklerweg 52',
                    address2: 'iO Campus',
                    city: 'Amsterdam',
                    zip: '1114 AE',
                    country: 'NL',
                    phone: '+31 20 3057205',
                },
                {
                    option: 'iO - Campus Antwerpen',
                    address1: 'Mechelsesteenweg 271 bus 1.1',
                    address2: 'iO Campus',
                    city: 'Antwerpen',
                    zip: '2018',
                    country: 'BE',
                    phone: '+32 3 361 68 01',
                },
                // Add more addresses here
                {
                    option: 'ADWEKO Headquarter Walldorf',
                    address1: 'Altrottstraße 31',
                    address2: '',
                    city: 'Walldorf/Baden',
                    zip: '69190',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'ADWEKO Stuttgart',
                    address1: 'Maybachstraße 20',
                    address2: '',
                    city: 'Stuttgart',
                    zip: '70469',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'ADWEKO Frankfurt',
                    address1: 'Mainzer Landstraße 180',
                    address2: '',
                    city: 'Frankfurt',
                    zip: '60327',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'ADWEKO Berlin',
                    address1: 'Stresemannstraße 123c',
                    address2: '',
                    city: 'Berlin',
                    zip: '10963',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'ADWEKO Hamburg',
                    address1: 'Willy-Brandt-Straße 23',
                    address2: '',
                    city: 'Hamburg',
                    zip: '20457',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'ADWEKO Hannover',
                    address1: 'Bödekerstraße 1',
                    address2: '',
                    city: 'Hannover',
                    zip: '30161',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'ADWEKO Hungary Kft.',
                    address1: '1036 Budapest, Lajos u. 66, 3. emelet',
                    address2: '',
                    city: 'Budapest',
                    zip: '1036',
                    country: 'HU',
                    phone: '',
                },
                {
                    option: 'ADWEKO Global Ltd.',
                    address1: '13 Princeton Court, 53 to 55 Felsham Road',
                    address2: '',
                    city: 'London',
                    zip: 'SW15 1AZ',
                    country: 'GB',
                    phone: '',
                },
                {
                    option: 'ADWEKO America Inc.',
                    address1: '801 Brickell Avenue / 8th Floor',
                    address2: '',
                    city: 'Miami',
                    zip: 'FL 33131',
                    country: 'US',
                    phone: '',
                },
                {
                    option: 'ADWEKO Canada Inc.',
                    address1: 'First Canadian Pace, 100 King Street West, Suite 5600',
                    address2: '',
                    city: 'Toronto',
                    zip: 'ON M5X 1C9',
                    country: 'CA',
                    phone: '',
                },
                {
                    option: 'ADWEKO Athens',
                    address1: 'Solonos 53 and Sina (room 319)',
                    address2: '',
                    city: 'Athens',
                    zip: '106 72',
                    country: 'GR',
                    phone: '',
                },
                {
                    option: 'ADWEKO Athens',
                    address1: 'Solonos 53 and Sina (room 319)',
                    address2: '',
                    city: 'Athens',
                    zip: '106 72',
                    country: 'GR',
                    phone: '',
                },
                {
                    option: 'BasisTeam IT Service & Consulting GmbH',
                    address1: 'Grabenstraße 12',
                    address2: '',
                    city: 'Bochum',
                    zip: '44787',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'COMPIRICUS GmbH',
                    address1: 'Graf-Adolf-Platz 6',
                    address2: '',
                    city: 'Düsseldorf',
                    zip: '40213',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'COMPIRICUS, Inc.',
                    address1: '75 State Street, Suite 100',
                    address2: '',
                    city: 'Boston',
                    zip: 'MA 02109',
                    country: 'US',
                    phone: '',
                },
                {
                    option: 'e2 Security GmbH',
                    address1: 'Rabinstraße 1',
                    address2: '',
                    city: 'Bonn',
                    zip: '53111',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'fink.',
                    address1: 'Nymphenburger Str. 1',
                    address2: '',
                    city: 'München',
                    zip: '80335',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'FSP GmbH Consulting & IT-Services',
                    address1: 'Albin-Köbis-Straße 8',
                    address2: '',
                    city: 'Köln',
                    zip: '51147',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'IKOR GmbH Hamburg',
                    address1: 'Borselstraße 20',
                    address2: '',
                    city: 'Hamburg',
                    zip: '22765',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'IKOR GmbH Essen',
                    address1: 'Huyssenallee 86-88',
                    address2: '',
                    city: 'Essen',
                    zip: '45128',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'IKOR GmbH Köln',
                    address1: 'Siegburger Straße 223',
                    address2: '',
                    city: 'Köln',
                    zip: '50679',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'IKOR Polska Sp. z o.o. (Warszawa)',
                    address1: 'ul. Rondo ONZ 1',
                    address2: '',
                    city: 'Warszawa',
                    zip: '00-124',
                    country: 'PL',
                    phone: '',
                },
                {
                    option: 'IKOR Polska Sp. z o.o. (Wrocław)',
                    address1: 'Świdnicka 12-16',
                    address2: '',
                    city: 'Wrocław',
                    zip: '50-529',
                    country: 'PL',
                    phone: '',
                },
                {
                    option: 'IKOR Austria GmbH',
                    address1: 'Altmannsdorfer Strasse 89/7',
                    address2: '',
                    city: 'Wien',
                    zip: '1120',
                    country: 'AT',
                    phone: '',
                },
                {
                    option: 'IKOR Development Center d.o.o. Beograd',
                    address1: 'Birčaninova 7',
                    address2: '',
                    city: 'Beograd',
                    zip: '11000',
                    country: 'RS',
                    phone: '',
                },
                {
                    option: 'IKOR PX',
                    address1: '91 Wimpole St',
                    address2: '',
                    city: 'London',
                    zip: 'W1G 0EF',
                    country: 'GB',
                    phone: '',
                },
                {
                    option: 'Informationsfabrik GmbH',
                    address1: 'Albersloher Weg 10c',
                    address2: '',
                    city: 'Münster',
                    zip: '48155',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'matrix technology GmbH',
                    address1: 'Nymphenburger Str. 1',
                    address2: '',
                    city: 'München',
                    zip: '80335',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'STRANGE Consult GmbH (Tutzing)',
                    address1: 'Herzogstandstraße 5',
                    address2: '',
                    city: 'Tutzing',
                    zip: '82327',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'STRANGE Consult GmbH (Darmstadt)',
                    address1: 'Rösslerstrasse 88, 3rd floor',
                    address2: '',
                    city: 'Darmstadt',
                    zip: '64923',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'XPACT Consulting GmbH (Jugenheim)',
                    address1: 'Zur Rohrweihe 16',
                    address2: '',
                    city: 'Jugenheim',
                    zip: '55270',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'XPACT Consulting GmbH (Frankfurt)',
                    address1: 'Solmsstraße 83',
                    address2: '',
                    city: 'Frankfurt',
                    zip: '60486',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'X1F GmbH (Hamburg)',
                    address1: 'Borselstraße 20',
                    address2: '',
                    city: 'Hamburg',
                    zip: '22765',
                    country: 'DE',
                    phone: '',
                },
                {
                    option: 'X1F GmbH (München)',
                    address1: 'Nymphenburger Str. 1',
                    address2: '',
                    city: 'München',
                    zip: '80335',
                    country: 'DE',
                    phone: '',
                },
            ];

            const selectedAddressData = addresses.find((addressData) => addressData.option === selectedOption);

            if (selectedAddressData) {
                const addressField1 = document.getElementById('billing_address_1');
                const addressField2 = document.getElementById('billing_address_2');
                const cityField = document.getElementById('billing_city');
                const zipCodeField = document.getElementById('billing_postcode');
                const phoneField = document.getElementById('billing_phone');

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

                if (phoneField) {
                    phoneField.value = selectedAddressData.phone;
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