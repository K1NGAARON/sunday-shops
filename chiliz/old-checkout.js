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
            case 'Malta - Chiliz':
                address1 = 'Sliema Road';
                address2 = '14 East, Level 7';
                city = 'Gzira';
                zip = 'GZR1639';
                country = 'MT';
                phone = '';
                break;
            case 'Madrid - Socios.com':
                address1 = 'Calle Leganitos 47';
                address2 = '8 A';
                city = 'Madrid';
                zip = '28013';
                country = 'ES';
                phone = '';
                break;
            case 'Istanbul - Socios Türkiye':
                address1 = 'Nisbetiye Mahallesi Fecri Ebcioğlu Sokak no4 RSD Plaza kat6 Beşiktaş';
                address2 = 'Socios Türkiye Teknoloji ve Dijital Pazarlama A.Ş';
                city = 'Istanbul';
                zip = '34340';
                country = 'TR';
                phone = '';
                break;
            case 'Lyon - Socios Services France':
                address1 = 'Cours Lafayette 222';
                address2 = ' ';
                city = 'Lyon';
                zip = '69003';
                country = 'FR';
                phone = '';
                break;
            case 'London - Socios.com':
                address1 = 'Margaret Street 60-62';
                address2 = 'Office 404';
                city = 'London';
                zip = 'W1W 8TF';
                country = 'GB';
                phone = '';
                break;
            case 'Switzerland - Socios Technologies AG':
                address1 = 'Gubelstrasse 11';
                address2 = '';
                city = 'Zug';
                zip = '6300';
                country = 'CH';
                phone = '';
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