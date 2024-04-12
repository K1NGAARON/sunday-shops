document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('billing_delivery_location');
    const countrySelectElement = document.getElementById('billing_country');

    if (selectElement) {
        selectElement.addEventListener('change', function () {
            let selectedOption = this.value;

            const addresses = [
                {
                    label: 'ADWEKO, Headquarter Walldorf',
                    option: 'adweko-headquarter-walldorf',
                    address1: 'Altrottstraße 31',
                    address2: '',
                    city: 'Walldorf/Baden',
                    zip: '69190',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'ADWEKO, Stuttgart',
                    option: 'adweko-stuttgart',
                    address1: 'Maybachstraße 20',
                    address2: '',
                    city: 'Stuttgart',
                    zip: '70469',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'ADWEKO, Frankfurt',
                    option: 'adweko-frankfurt',
                    address1: 'Mainzer Landstraße 180',
                    address2: '',
                    city: 'Frankfurt',
                    zip: '60327',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'ADWEKO, Berlin',
                    option: 'adweko-berlin',
                    address1: 'Stresemannstraße 123c',
                    address2: '',
                    city: 'Berlin',
                    zip: '10963',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'ADWEKO, Hamburg',
                    option: 'adweko-hamburg',
                    address1: 'Willy-Brandt-Straße 23',
                    address2: '',
                    city: 'Hamburg',
                    zip: '20457',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'ADWEKO, Hannover',
                    option: 'adweko-hannover',
                    address1: 'Bödekerstraße 1',
                    address2: '',
                    city: 'Hannover',
                    zip: '30161',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'ADWEKO, Hungary Kft',
                    option: 'adweko-hungary-kft',
                    address1: '1036 Budapest, Lajos u. 66, 3. emelet',
                    address2: '',
                    city: 'Budapest',
                    zip: '1036',
                    country: 'HU',
                    phone: '',
                },
                {
                    label: 'ADWEKO, Global Ltd',
                    option: 'adweko-global-ltd',
                    address1: '13 Princeton Court, 53 to 55 Felsham Road',
                    address2: '',
                    city: 'London',
                    zip: 'SW15 1AZ',
                    country: 'GB',
                    phone: '',
                },
                {
                    label: 'ADWEKO, America Inc',
                    option: 'adweko-america-inc',
                    address1: '801 Brickell Avenue / 8th Floor',
                    address2: '',
                    city: 'Miami',
                    zip: '33131',
                    country: 'US',
                    phone: '',
                },
                {
                    label: 'ADWEKO, Canada Inc',
                    option: 'adweko-canada-inc',
                    address1: 'First Canadian Pace, 100 King Street West, Suite 5600',
                    address2: '',
                    city: 'Toronto',
                    zip: 'M5X2A2',
                    country: 'CA',
                    phone: '',
                },
                {
                    label: 'ADWEKO, Athens',
                    option: 'adweko-athens',
                    address1: 'Solonos 53 and Sina (room 319)',
                    address2: '',
                    city: 'Athens',
                    zip: '106 72',
                    country: 'GR',
                    phone: '',
                },
                {
                    label: 'BasisTeam IT Service & Consulting GmbH',
                    option: 'basisteam-it',
                    address1: 'Grabenstraße 12',
                    address2: '',
                    city: 'Bochum',
                    zip: '44787',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'COMPIRICUS GmbH',
                    option: 'compiricus-gmbh',
                    address1: 'Graf-Adolf-Platz 6',
                    address2: '',
                    city: 'Düsseldorf',
                    zip: '40213',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'COMPIRICUS, Inc',
                    option: 'compiricus-inc',
                    address1: '75 State Street, Suite 100',
                    address2: '',
                    city: 'Boston',
                    zip: '02109',
                    country: 'US',
                    phone: '',
                },
                {
                    label: 'fink',
                    option: 'fink',
                    address1: 'Nymphenburger Str. 1',
                    address2: '',
                    city: 'München',
                    zip: '80335',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'FSP GmbH Consulting & IT-Services',
                    option: 'fsp-gmbh-consulting',
                    address1: 'Albin-Köbis-Straße 8',
                    address2: '',
                    city: 'Köln',
                    zip: '51147',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'IKOR GmbH Hamburg',
                    option: 'ikor-gmbh-hamburg',
                    address1: 'Borselstraße 20',
                    address2: '',
                    city: 'Hamburg',
                    zip: '22765',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'IKOR GmbH Essen',
                    option: 'ikor-gmbh-essen',
                    address1: 'Huyssenallee 86-88',
                    address2: '',
                    city: 'Essen',
                    zip: '45128',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'IKOR GmbH Köln',
                    option: 'ikor-gmbh-koln',
                    address1: 'Siegburger Straße 223',
                    address2: '',
                    city: 'Köln',
                    zip: '50679',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'IKOR Polska Sp. z o.o. Warszawa',
                    option: 'ikor-polska-warszawa',
                    address1: 'ul. Rondo ONZ 1',
                    address2: '',
                    city: 'Warszawa',
                    zip: '00-124',
                    country: 'PL',
                    phone: '',
                },
                {
                    label: 'IKOR Polska Sp. z o.o. Wrocław',
                    option: 'ikor-polska-wroclaw',
                    address1: 'Świdnicka 12-16',
                    address2: '',
                    city: 'Wrocław',
                    zip: '50-529',
                    country: 'PL',
                    phone: '',
                },
                {
                    label: 'IKOR Austria GmbH',
                    option: 'ikor-austria-gmbh',
                    address1: 'Altmannsdorfer Strasse 89/7',
                    address2: '',
                    city: 'Wien',
                    zip: '1120',
                    country: 'AT',
                    phone: '',
                },
                {
                    label: 'IKOR Development Center d.o.o. Beograd',
                    option: 'ikor-development-center-beograd',
                    address1: 'Birčaninova 7',
                    address2: '',
                    city: 'Beograd',
                    zip: '11000',
                    country: 'RS',
                    phone: '',
                },
                {
                    label: 'IKOR PX',
                    option: 'ikor-px',
                    address1: '91 Wimpole St',
                    address2: '',
                    city: 'London',
                    zip: 'W1G 0EF',
                    country: 'GB',
                    phone: '',
                },
                {
                    label: 'Informationsfabrik GmbH',
                    option: 'informationsfabrik-gmbh',
                    address1: 'Albersloher Weg 10c',
                    address2: '',
                    city: 'Münster',
                    zip: '48155',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'Matrix Technology GmbH',
                    option: 'matrix-technology-gmbh',
                    address1: 'Nymphenburger Str. 1',
                    address2: '',
                    city: 'München',
                    zip: '80335',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'STRANGE Consult GmbH Tutzing',
                    option: 'strange-consult-tutzing',
                    address1: 'Herzogstandstraße 5',
                    address2: '',
                    city: 'Tutzing',
                    zip: '82327',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'STRANGE Consult GmbH Darmstadt',
                    option: 'strange-consult-darmstadt',
                    address1: 'Rösslerstrasse 88, 3rd floor',
                    address2: '',
                    city: 'Darmstadt',
                    zip: '64923',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'XPACT Consulting GmbH Jugenheim',
                    option: 'xpact-consulting-jugenheim',
                    address1: 'Zur Rohrweihe 16',
                    address2: '',
                    city: 'Jugenheim',
                    zip: '55270',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'XPACT Consulting GmbH Frankfurt',
                    option: 'xpact-consulting-frankfurt',
                    address1: 'Solmsstraße 83',
                    address2: '',
                    city: 'Frankfurt',
                    zip: '60486',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'X1F GmbH Hamburg',
                    option: 'x1f-hamburg',
                    address1: 'Borselstraße 20',
                    address2: '',
                    city: 'Hamburg',
                    zip: '22765',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'X1F GmbH München',
                    option: 'x1f-munchen',
                    address1: 'Nymphenburger Str. 1',
                    address2: '',
                    city: 'München',
                    zip: '80335',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'KE Associates, Eschborn',
                    option: 'ke-associates-eschborn',
                    address1: 'Kölner Str. 3',
                    address2: '',
                    city: 'Eschborn',
                    zip: '65760',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'globaldatanet, Hamburg',
                    option: 'globaldatanet-hamburg',
                    address1: 'Alter Teichweg 11-13',
                    address2: '',
                    city: 'Hamburg',
                    zip: '22081',
                    country: 'DE',
                    phone: '',
                },
                {
                    label: 'globaldatanet, Serbia',
                    option: 'globaldatanet-serbia',
                    address1: 'Oračka 4',
                    address2: '',
                    city: 'Belgrade',
                    zip: '11000',
                    country: 'RS',
                    phone: '',
                },
                // {
                //     label: '',
                //     option: '',
                //     address1: '',
                //     address2: '',
                //     city: '',
                //     zip: '',
                //     country: '',
                //     phone: '',
                // },
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