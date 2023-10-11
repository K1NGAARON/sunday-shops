document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('billing_choose_your_campus_for_delivery');
    const countrySelectElement = document.getElementById('billing_country');

    if (selectElement) {
        selectElement.addEventListener('change', function() {
            let selectedOption = this.value;
            let addressField1 = document.getElementById('billing_address_1');
            let addressField2 = document.getElementById('billing_address_2');
            let cityField = document.getElementById('billing_city');
            let zipCodeField = document.getElementById('billing_postcode');
            let phoneField = document.getElementById('billing_phone');

            let address1, address2, city, zip, country, phone;

        switch (selectedOption) {
            case 'iO - Campus Amsterdam':
                address1 = 'Spaklerweg 52';
                address2 = 'iO Campus';
                city = 'Amsterdam';
                zip = '1114 AE';
                country = 'NL';
                phone = '+31 20 3057205';
                break;
            case 'iO - Campus Antwerpen':
                address1 = 'Mechelsesteenweg 271 bus 1.1';
                address2 = 'iO Campus';
                city = 'Antwerpen';
                zip = '2018';
                country = 'BE';
                phone = '+32 3 361 68 01';
                break;
            case 'iO - Campus Brussel':
                address1 = 'Chaussé de la Hulpe 120';
                address2 = 'iO Campus';
                city = 'Brussel';
                zip = '1000';
                country = 'BE';
                phone = '+32 2 762 25 00';
                break;
            case 'iO - Campus Den Bosch':
                address1 = 'Magistratenlaan 2';
                address2 = 'iO Campus';
                city = 'Den Bosch';
                zip = '5223 MD';
                country = 'NL';
                phone = '+31 418 510 068';
                break;
            case 'iO - Campus Eindhoven':
                address1 = 'Marconilaan 16';
                address2 = 'iO Campus';
                city = 'Eindhoven';
                zip = '5621 AA';
                country = 'NL';
                phone = '+31 40 290 8979';
                break;
            case 'iO - Campus Gent':
                address1 = 'Raymonde de Larochelaan 15';
                address2 = 'iO Campus';
                city = 'Gent';
                zip = '9051';
                country = 'BE';
                phone = '+32 9 279 42 48';
                break;
            case 'iO - Campus Herentals':
                address1 = 'Zavelheide 15';
                address2 = 'iO Campus';
                city = 'Herentals';
                zip = '2200';
                country = 'BE';
                phone = '+32 14 28 29 20';
                break;
            case 'iO - Campus Rotterdam':
                address1 = 'Blaak 16';
                address2 = 'iO Campus';
                city = 'Rotterdam';
                zip = '3011 TA';
                country = 'NL';
                phone = '+31 10 820 0140';
                break;
            case 'iO - Campus Utrecht':
                address1 = 'Boven Clarenburg 2';
                address2 = 'iO Campus';
                city = 'Utrecht';
                zip = '3511 CV';
                country = 'NL';
                phone = '+31 30 231 7521';
                break;
        }
    
            if (addressField1) {
                addressField1.value = address1;
            }
    
            if (addressField2) {
                addressField2.value = address2;
            }
    
            if (cityField) {
                cityField.value = city;
            }
    
            if (zipCodeField) {
                zipCodeField.value = zip;
            }
    
            if (phoneField) {
                phoneField.value = phone;
            }
    
            if (country) {
                let options = countrySelectElement.getElementsByTagName('option');
                for (let i = 0; i < options.length; i++) {
                    if (options[i].value == country) {
                        options[i].setAttribute('selected', 'selected');
                    } else {
                        options[i].removeAttribute('selected');
                    }
                }

                const event = new Event('change');
                countrySelectElement.dispatchEvent(event);
            }
        });
    }
});