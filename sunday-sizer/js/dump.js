$(document).ready(function() {
    const productsSIzeCharts = {
        2280: "olivier_tshirt_chart", // Black T Shirt
    };
    
    const sizeCharts = {
        // UNISEX HOODIES/SWEATERS
        "duke_chart": {
            "XS": {
                A: 51.5, 
            },
            "S": {
                A: 53.5, 
            },
            "M": {
                A: 55.5, 
            },
            "L": {
                A: 57.5, 
            },
            "XL": {
                A: 59.5, 
            },
            "2XL": {
                A: 61.5, 
            },
            "3XL": {
                A: 63.5, 
            },
            "4XL": {
                A: 65.5, 
            }
        },
        "george_chart": {
            "XS": {
                A: 51.5, 
            },
            "S": {
                A: 53.5, 
            },
            "M": {
                A: 55.5, 
            },
            "L": {
                A: 57.5, 
            },
            "XL": {
                A: 59.5, 
            },
            "2XL": {
                A: 61.5, 
            },
            "3XL": {
                A: 63.5, 
            },
            "4XL": {
                A: 65.5, 
            }
        },
        "charlie_chart": {
            "XS": {
                A: 50.5, 
            },
            "S": {
                A: 52.5, 
            },
            "M": {
                A: 54.5, 
            },
            "L": {
                A: 56.5, 
            },
            "XL": {
                A: 58.5, 
            },
            "2XL": {
                A: 60.5, 
            },
            "3XL": {
                A: 62.5, 
            },
            "4XL": {
                A: 64.5, 
            }
        },
        "jake_chart": {
            "XS": {
                A: 51.5, 
            },
            "S": {
                A: 53.5, 
            },
            "M": {
                A: 55.5, 
            },
            "L": {
                A: 57.5, 
            },
            "XL": {
                A: 59.5, 
            },
            "2XL": {
                A: 61.5, 
            },
            "3XL": {
                A: 63.5, 
            },
            "4XL": {
                A: 65.5, 
            }
        },
        "pierre_chart": {
            "XS": {
                A: 51.5, 
            },
            "S": {
                A: 53.5, 
            },
            "M": {
                A: 55.5, 
            },
            "L": {
                A: 57.5, 
            },
            "XL": {
                A: 59.5, 
            },
            "2XL": {
                A: 61.5, 
            },
            "3XL": {
                A: 63.5, 
            },
            "4XL": {
                A: 65.5, 
            }
        },
        "oscar_chart": {
            "XS": {
                A: 51.5, 
            },
            "S": {
                A: 53.5, 
            },
            "M": {
                A: 55.5, 
            },
            "L": {
                A: 57.5, 
            },
            "XL": {
                A: 59.5, 
            },
            "2XL": {
                A: 61.5, 
            },
            "3XL": {
                A: 63.5, 
            },
            "4XL": {
                A: 65.5, 
            }
        },
        "daniel_chart": {
            "XS": {
                A: 51.5, 
            },
            "S": {
                A: 53.5, 
            },
            "M": {
                A: 55.5, 
            },
            "L": {
                A: 57.5, 
            },
            "XL": {
                A: 59.5, 
            },
            "2XL": {
                A: 61.5, 
            },
            "3XL": {
                A: 63.5, 
            },
            "4XL": {
                A: 65.5, 
            }
        },
        "lennon_chart": {
            "XS": {
                A: 51.5, 
            },
            "S": {
                A: 53.5, 
            },
            "M": {
                A: 55.5, 
            },
            "L": {
                A: 57.5, 
            },
            "XL": {
                A: 59.5, 
            },
            "2XL": {
                A: 61.5, 
            },
            "3XL": {
                A: 63.5, 
            },
            "4XL": {
                A: 65.5, 
            }
        },
        "brian_chart": {
            "XS": {
                A: 51.5, 
            },
            "S": {
                A: 53.5, 
            },
            "M": {
                A: 55.5, 
            },
            "L": {
                A: 57.5, 
            },
            "XL": {
                A: 59.5, 
            },
            "2XL": {
                A: 61.5, 
            },
            "3XL": {
                A: 63.5, 
            },
            "4XL": {
                A: 65.5, 
            }
        },
        "duke_2panel_chart": {
            "XS": {
                A: 51.5, 
            },
            "S": {
                A: 53.5, 
            },
            "M": {
                A: 55.5, 
            },
            "L": {
                A: 57.5, 
            },
            "XL": {
                A: 59.5, 
            },
            "2XL": {
                A: 61.5, 
            },
            "3XL": {
                A: 63.5, 
            },
            "4XL": {
                A: 65.5, 
            }
        },
        "caporal_chart": {
            "XS": {
                A: 51.5, 
            },
            "S": {
                A: 53.5, 
            },
            "M": {
                A: 55.5, 
            },
            "L": {
                A: 57.5, 
            },
            "XL": {
                A: 59.5, 
            },
            "2XL": {
                A: 61.5, 
            },
            "3XL": {
                A: 63.5, 
            },
            "4XL": {
                A: 65.5, 
            }
        },
        "sunday_ss22_chart": {
            "XS": {
                A: 51.5, 
            },
            "S": {
                A: 53.5, 
            },
            "M": {
                A: 55.5, 
            },
            "L": {
                A: 57.5, 
            },
            "XL": {
                A: 59.5, 
            },
            "2XL": {
                A: 61.5, 
            },
            "3XL": {
                A: 63.5, 
            },
            "4XL": {
                A: 65.5, 
            }
        },
    
        // MENS HOODIES/SWEATERS
        "michael_chart": {
            "XS": {
                A: 52.5, 
            },
            "S": {
                A: 54.5, 
            },
            "M": {
                A: 56.5, 
            },
            "L": {
                A: 58.5, 
            },
            "XL": {
                A: 60.5, 
            },
            "2XL": {
                A: 62.5,
            },
            "3XL": {
                A: 64.5,
            },
            "4XL" : {
                A: 66.5,
            }
        },
        "connor_chart": {
            "XS": {
                A: 52.5, 
            },
            "S": {
                A: 54.5, 
            },
            "M": {
                A: 56.5, 
            },
            "L": {
                A: 58.5, 
            },
            "XL": {
                A: 60.5, 
            },
            "2XL": {
                A: 62.5,
            },
            "3XL": {
                A: 64.5,
            },
            "4XL" : {
                A: 66.5,
            }
        },
        "alex_chart": {
            "XS": {
                A: 52.5, 
            },
            "S": {
                A: 54.5, 
            },
            "M": {
                A: 56.5, 
            },
            "L": {
                A: 58.5, 
            },
            "XL": {
                A: 60.5, 
            },
            "2XL": {
                A: 62.5,
            },
            "3XL": {
                A: 64.5,
            },
            "4XL" : {
                A: 66.5,
            }
        },
        "richard_chart": {
            "XS": {
                A: 52.5, 
            },
            "S": {
                A: 54.5, 
            },
            "M": {
                A: 56.5, 
            },
            "L": {
                A: 58.5, 
            },
            "XL": {
                A: 60.5, 
            },
            "2XL": {
                A: 62.5,
            },
            "3XL": {
                A: 64.5,
            },
            "4XL" : {
                A: 66.5,
            }
        },
        "will_chart": {
            "XS": {
                A: 52.5, 
            },
            "S": {
                A: 54.5, 
            },
            "M": {
                A: 56.5, 
            },
            "L": {
                A: 58.5, 
            },
            "XL": {
                A: 60.5, 
            },
            "2XL": {
                A: 62.5,
            },
            "3XL": {
                A: 64.5,
            },
            "4XL" : {
                A: 66.5,
            }
        },
        "chris_chart": {
            "XS": {
                A: 52.5, 
            },
            "S": {
                A: 54.5, 
            },
            "M": {
                A: 56.5, 
            },
            "L": {
                A: 58.5, 
            },
            "XL": {
                A: 60.5, 
            },
            "2XL": {
                A: 62.5,
            },
            "3XL": {
                A: 64.5,
            },
            "4XL" : {
                A: 66.5,
            }
        },
        "sawyer_chart": {
            "XS": {
                A: 52.5, 
            },
            "S": {
                A: 54.5, 
            },
            "M": {
                A: 56.5, 
            },
            "L": {
                A: 58.5, 
            },
            "XL": {
                A: 60.5, 
            },
            "2XL": {
                A: 62.5,
            },
            "3XL": {
                A: 64.5,
            },
            "4XL" : {
                A: 66.5,
            }
        },
        "christmas_chart": {
            "XS": {
                A: 46, 
            },
            "S": {
                A: 48, 
            },
            "M": {
                A: 50, 
            },
            "L": {
                A: 54, 
            },
            "XL": {
                A: 58, 
            },
            "2XL": {
                A: 62,
            },
            "3XL": {
                A: 66,
            },
            "4XL" : {
                A: 70,
            }
        },
    
        // MENS GROUP 75
        "billy_75_chart": {
            "XS": {
                A: 48,
            },
            "S": {
                A: 51,
            },
            "M": {
                A: 54,
            },
            "L": {
                A: 57, 
            },
            "XL": {
                A: 60, 
            },
            "2XL": {
                A: 64, 
            },
            "3XL": {
                A: 68,
            },
            "4XL" : {
                A: 72,
            }
        },
        "harry_75_chart": {
            "XS": {
                A: 50,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 56,
            },
            "L": {
                A: 59, 
            },
            "XL": {
                A: 62, 
            },
            "2XL": {
                A: 66, 
            },
            "3XL": {
                A: 70,
            },
            "4XL" : {
                A: 74,
            }
        },
        "harry_zipped_75_chart": {
            "XS": {
                A: 50,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 56,
            },
            "L": {
                A: 59, 
            },
            "XL": {
                A: 62, 
            },
            "2XL": {
                A: 66, 
            },
            "3XL": {
                A: 70,
            },
            "4XL" : {
                A: 74,
            }
        },
        "james_75_chart": {
            "XS": {
                A: 50,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 56,
            },
            "L": {
                A: 59, 
            },
            "XL": {
                A: 62, 
            },
            "2XL": {
                A: 66, 
            },
            "3XL": {
                A: 70,
            },
            "4XL" : {
                A: 74,
            }
        },
        "jacob_75_chart": {
            "XS": {
                A: 50,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 56,
            },
            "L": {
                A: 59, 
            },
            "XL": {
                A: 62, 
            },
            "2XL": {
                A: 66, 
            },
            "3XL": {
                A: 70,
            },
            "4XL" : {
                A: 74,
            }
        },
        "murphy_75_chart": {
            "XS": {
                A: 50,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 56,
            },
            "L": {
                A: 59, 
            },
            "XL": {
                A: 62, 
            },
            "2XL": {
                A: 66, 
            },
            "3XL": {
                A: 70,
            },
            "4XL" : {
                A: 74,
            }
        },
        "smith_75_chart": {
            "XS": {
                A: 50,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 56,
            },
            "L": {
                A: 59, 
            },
            "XL": {
                A: 62, 
            },
            "2XL": {
                A: 66, 
            },
            "3XL": {
                A: 70,
            },
            "4XL" : {
                A: 74,
            }
        },
    
        // WOMENS HOODIES/SWEATERS
        "olivia_chart": {
            "XS": {
                A: 51.5,
            },
            "S": {
                A: 53.5,
            },
            "M": {
                A: 55.5,
            },
            "L": {
                A: 57.5,
            },
            "XL": {
                A: 59.5,
            },
            "2XL": {
                A: 61.5,
            },
            "3XL": {
                A: 63.5,
            },
            "4XL" : {
                A: 65.5,
            }
        },
        "olivia_2panel_chart": {
            "XS": {
                A: 51.5,
            },
            "S": {
                A: 53.5,
            },
            "M": {
                A: 55.5,
            },
            "L": {
                A: 57.5,
            },
            "XL": {
                A: 59.5,
            },
            "2XL": {
                A: 61.5,
            },
            "3XL": {
                A: 63.5,
            },
            "4XL" : {
                A: 65.5,
            }
        },
        "victoria_chart": {
            "XS": {
                A: 51.5,
            },
            "S": {
                A: 53.5,
            },
            "M": {
                A: 55.5,
            },
            "L": {
                A: 57.5,
            },
            "XL": {
                A: 59.5,
            },
            "2XL": {
                A: 61.5,
            },
            "3XL": {
                A: 63.5,
            },
            "4XL" : {
                A: 65.5,
            }
        },
        "emma_chart": {
            "XS": {
                A: 51.5,
            },
            "S": {
                A: 53.5,
            },
            "M": {
                A: 55.5,
            },
            "L": {
                A: 57.5,
            },
            "XL": {
                A: 59.5,
            },
            "2XL": {
                A: 61.5,
            },
            "3XL": {
                A: 63.5,
            },
            "4XL" : {
                A: 65.5,
            }
        },
        "amelia_chart": {
            "XS": {
                A: 51.5,
            },
            "S": {
                A: 53.5,
            },
            "M": {
                A: 55.5,
            },
            "L": {
                A: 57.5,
            },
            "XL": {
                A: 59.5,
            },
            "2XL": {
                A: 61.5,
            },
            "3XL": {
                A: 63.5,
            },
            "4XL" : {
                A: 65.5,
            }
        },
        "charlotte_chart": {
            "XS": {
                A: 51.5,
            },
            "S": {
                A: 53.5,
            },
            "M": {
                A: 55.5,
            },
            "L": {
                A: 57.5,
            },
            "XL": {
                A: 59.5,
            },
            "2XL": {
                A: 61.5,
            },
            "3XL": {
                A: 63.5,
            },
            "4XL" : {
                A: 65.5,
            }
        },
        "alicia_chart": {
            "XS": {
                A: 51.5,
            },
            "S": {
                A: 53.5,
            },
            "M": {
                A: 55.5,
            },
            "L": {
                A: 57.5,
            },
            "XL": {
                A: 59.5,
            },
            "2XL": {
                A: 61.5,
            },
            "3XL": {
                A: 63.5,
            },
            "4XL" : {
                A: 65.5,
            }
        },
        "emily_75_chart": {
            "XS": {
                A: 50,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 56,
            },
            "L": {
                A: 59,
            },
            "XL": {
                A: 62,
            },
            "2XL": {
                A: 65,
            },
            "3XL": {
                A: 68,
            },
            "4XL" : {
                A: 71,
            }
        },
    
        // SHIRTS
        "casual_shirt_chart": {
            "XS": {
                A: 55,
            },
            "S": {
                A: 57,
            },
            "M": {
                A: 59,
            },
            "L": {
                A: 61,
            },
            "XL": {
                A: 63,
            },
            "2XL": {
                A: 65,
            },
            "3XL": {
                A: 67,
            },
            "4XL" : {
                A: 69,
            }
        },
        "business_shirt_tailored_chart": {
            "XS": {
                A: 51,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 55,
            },
            "L": {
                A: 57,
            },
            "XL": {
                A: 59,
            },
            "2XL": {
                A: 61,
            },
            "3XL": {
                A: 63,
            },
            "4XL" : {
                A: 65,
            }
        },
        "business_shirt_regular_chart": {
            "XS": {
                A: 53,
            },
            "S": {
                A: 55,
            },
            "M": {
                A: 57,
            },
            "L": {
                A: 59,
            },
            "XL": {
                A: 61,
            },
            "2XL": {
                A: 63,
            },
            "3XL": {
                A: 65,
            },
            "4XL" : {
                A: 67,
            }
        },
        "business_shirt_loose_chart": {
            "XS": {
                A: 57,
            },
            "S": {
                A: 59,
            },
            "M": {
                A: 61,
            },
            "L": {
                A: 63,
            },
            "XL": {
                A: 65,
            },
            "2XL": {
                A: 67,
            },
            "3XL": {
                A: 69,
            },
            "4XL" : {
                A: 71,
            }
        },
    
        // MENS T-SHIRT
        "olivier_tshirt_chart": {
            "XS": {
                A: 51,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 55,
            },
            "L": {
                A: 57,
            },
            "XL": {
                A: 59,
            },
            "2XL": {
                A: 61,
            },
            "3XL": {
                A: 63,
            },
            "4XL" : {
                A: 65,
            }
        },
        "robert_tshirt_chart": {
            "XS": {
                A: 51,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 55,
            },
            "L": {
                A: 57,
            },
            "XL": {
                A: 59,
            },
            "2XL": {
                A: 61,
            },
            "3XL": {
                A: 63,
            },
            "4XL" : {
                A: 65,
            }
        },
        "roger_tshirt_chart": {
            "XS": {
                A: 51,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 55,
            },
            "L": {
                A: 57,
            },
            "XL": {
                A: 59,
            },
            "2XL": {
                A: 61,
            },
            "3XL": {
                A: 63,
            },
            "4XL" : {
                A: 65,
            }
        },
        "lukas_tshirt_chart": {
            "XS": {
                A: 51,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 55,
            },
            "L": {
                A: 57,
            },
            "XL": {
                A: 59,
            },
            "2XL": {
                A: 61,
            },
            "3XL": {
                A: 63,
            },
            "4XL" : {
                A: 65,
            }
        },
        "steven_tshirt_chart": {
            "XS": {
                A: 51,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 55,
            },
            "L": {
                A: 57,
            },
            "XL": {
                A: 59,
            },
            "2XL": {
                A: 61,
            },
            "3XL": {
                A: 63,
            },
            "4XL" : {
                A: 65,
            }
        },
        "jan_tshirt_chart": {
            "XS": {
                A: 51,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 55,
            },
            "L": {
                A: 57,
            },
            "XL": {
                A: 59,
            },
            "2XL": {
                A: 61,
            },
            "3XL": {
                A: 63,
            },
            "4XL" : {
                A: 65,
            }
        },
        "napoleon_tshirt_chart": {
            "XS": {
                A: 51,
            },
            "S": {
                A: 53,
            },
            "M": {
                A: 55,
            },
            "L": {
                A: 57,
            },
            "XL": {
                A: 59,
            },
            "2XL": {
                A: 61,
            },
            "3XL": {
                A: 63,
            },
            "4XL" : {
                A: 65,
            }
        },
        "bax_tshirt_chart": {
            "XS": {
                A: 57,
            },
            "S": {
                A: 59,
            },
            "M": {
                A: 61,
            },
            "L": {
                A: 63,
            },
            "XL": {
                A: 65,
            },
            "2XL": {
                A: 67,
            },
            "3XL": {
                A: 69,
            },
            "4XL" : {
                A: 71,
            }
        },
    
        // WOMENS T-SHIRT
        "mendez_round_neck_chart": {
            "XS": {
                A: 44,
            },
            "S": {
                A: 46,
            },
            "M": {
                A: 48,
            },
            "L": {
                A: 50,
            },
            "XL": {
                A: 52,
            },
            "2XL": {
                A: 54,
            },
            "3XL": {
                A: 56,
            },
            "4XL" : {
                A: 58,
            }
        },
        "mendez_v_neck_chart": {
            "XS": {
                A: 44,
            },
            "S": {
                A: 46,
            },
            "M": {
                A: 48,
            },
            "L": {
                A: 50,
            },
            "XL": {
                A: 52,
            },
            "2XL": {
                A: 54,
            },
            "3XL": {
                A: 56,
            },
            "4XL" : {
                A: 58,
            }
        },
        "miley_chart": {
            "XS": {
                A: 44,
            },
            "S": {
                A: 46,
            },
            "M": {
                A: 48,
            },
            "L": {
                A: 50,
            },
            "XL": {
                A: 52,
            },
            "2XL": {
                A: 54,
            },
            "3XL": {
                A: 56,
            },
            "4XL" : {
                A: 58,
            }
        },
        "classic_round_chart": {
            "XS": {
                A: 47,
            },
            "S": {
                A: 49,
            },
            "M": {
                A: 51,
            },
            "L": {
                A: 53,
            },
            "XL": {
                A: 55,
            },
            "2XL": {
                A: 57,
            },
            "3XL": {
                A: 59,
            },
            "4XL" : {
                A: 61,
            }
        },
        "classic_v_neck_chart": {
            "XS": {
                A: 47,
            },
            "S": {
                A: 49,
            },
            "M": {
                A: 51,
            },
            "L": {
                A: 53,
            },
            "XL": {
                A: 55,
            },
            "2XL": {
                A: 57,
            },
            "3XL": {
                A: 59,
            },
            "4XL" : {
                A: 61,
            }
        },
        "anna_chart": {
            "XS": {
                A: 47,
            },
            "S": {
                A: 49,
            },
            "M": {
                A: 51,
            },
            "L": {
                A: 53,
            },
            "XL": {
                A: 55,
            },
            "2XL": {
                A: 57,
            },
            "3XL": {
                A: 59,
            },
            "4XL" : {
                A: 61,
            }
        },
        "just_fie_chart": {
            "XS": {
                A: 56,
            },
            "S": {
                A: 58,
            },
            "M": {
                A: 60,
            },
            "L": {
                A: 63,
            },
            "XL": {
                A: 66,
            },
            "2XL": {
                A: 69,
            },
            "3XL": {
                A: 72,
            },
            "4XL" : {
                A:75,
            }
        },
        "chiara_chart": {
            "XS": {
                A: 40,
            },
            "S": {
                A: 42,
            },
            "M": {
                A: 44,
            },
            "L": {
                A: 46,
            },
            "XL": {
                A: 48,
            },
            "2XL": {
                A: 50,
            },
            "3XL": {
                A: 52,
            },
            "4XL" : {
                A: 54,
            }
        },
        "lisa_chart": {
            "XS": {
                A: 47,
            },
            "S": {
                A: 49,
            },
            "M": {
                A: 51,
            },
            "L": {
                A: 53,
            },
            "XL": {
                A: 55,
            },
            "2XL": {
                A: 57,
            },
            "3XL": {
                A: 59,
            },
            "4XL" : {
                A: 61,
            }
        },
    
        // TROUSERS/SKIRTS/SHORTS
        "womens_leggings_chart": {
            "XS": {
                A: 92,
            },
            "S": {
                A: 93,
            },
            "M": {
                A: 94,
            },
            "L": {
                A: 95,
            },
            "XL": {
                A: 96,
            },
            "2XL": {
                A: 97,
            },
            "3XL": {
                A: 98,
            },
            "4XL" : {
                A: 99,
            }
        },
        "sweatpants_chart": {
            "XS": {
                A: 38,
            },
            "S": {
                A: 40,
            },
            "M": {
                A: 42,
            },
            "L": {
                A: 44,
            },
            "XL": {
                A: 46,
            },
            "2XL": {
                A: 48,
            },
            "3XL": {
                A: 50,
            },
            "4XL" : {
                A: 52,
            }
        },
        "sweatshorts_chart": {
            "XS": {
                A: 38,
            },
            "S": {
                A: 40,
            },
            "M": {
                A: 42,
            },
            "L": {
                A: 44,
            },
            "XL": {
                A: 46,
            },
            "2XL": {
                A: 48,
            },
            "3XL": {
                A: 50,
            },
            "4XL" : {
                A: 52,
            }
        },
    
        // SPORTSWEAR
        "sports_shorts_chart": {
            "XS": {
                A: 30,
            },
            "S": {
                A: 31,
            },
            "M": {
                A: 32,
            },
            "L": {
                A: 33,
            },
            "XL": {
                A: 34,
            },
            "2XL": {
                A: 35,
            },
            "3XL": {
                A: 36,
            },
            "4XL" : {
                A: 37,
            }
        },
        "mendez_sport_round_neck_chart": {
            "XS": {
                A: 44,
            },
            "S": {
                A: 46,
            },
            "M": {
                A: 48,
            },
            "L": {
                A: 50,
            },
            "XL": {
                A: 52,
            },
            "2XL": {
                A: 54,
            },
            "3XL": {
                A: 56,
            },
            "4XL" : {
                A: 58,
            }
        },
    }

    // Retrieve product ID
    function getMeasurementChart(productID) {
        if (productsSIzeCharts.hasOwnProperty(productID)) {
            return productsSIzeCharts[productID];
        } else {
            return null;
        }
    }
    
    // Call your existing function to retrieve the product ID
    function retrieveProductID() {
        let formElement = document.querySelector('.cart');
        let productId = formElement.getAttribute('data-product_id');
        console.log(productId)
        return productId;
    }
    
    let productId = retrieveProductID();
    let sizeChart = getMeasurementChart(productId);
    
    if (sizeChart) {
        console.log(productId);
        console.log(`Use measurement chart: ${sizeChart}`);
    } else {
        console.log("No measurement chart found for this product.");
    }

    //  Retrieve product ID
    if (window.location.href.includes("/product/")) {
        retrieveProductID();
    };
    

    // Add sizer pop up button
    const variationsElement = document.querySelector('.woocommerce-product-details__short-description');
    if (variationsElement) {
        const anchorElement = `
            <div class="sizer-holder">
                <a id="openSizer">Calculate Size</a>
                <p id="sizer-holder-element">
                    Your ideal size:
                    <br>
                    <span id="sizeResult"></span>
                </p>
            </div>
        `;
        variationsElement.insertAdjacentHTML('beforeend', anchorElement);
    }

    function waitForElementToExist(elementId, callback) {
        const targetNode = document.documentElement;
        const config = { childList: true, subtree: true };
      
        const observer = new MutationObserver(function(mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    const element = document.getElementById(elementId);
                    if (element) {
                        observer.disconnect();
                        callback(element);
                    }
                }
            }
        });
      
        observer.observe(targetNode, config);
    }

    const sizerResultElement = document.querySelector('#sizer-holder-element');

    function showSizerResultDiv(e) {
        sizerResultElement.style.display = 'block';
    }

    waitForElementToExist('openSizer', function(element) {
        const modal = document.querySelector('#myModal');
        const openSizer = document.querySelector('#openSizer');

        function showPopUp(e) {
            modal.style.display = "block";
        }
    
        function hidePopUp(e) {
            modal.style.display = "none";
            showSizerResultDiv();
        }
    
        let span = document.getElementById("closeModal");
        
        $(window).click((e) => {
            if (e.target == modal) {
                hidePopUp();
            }
        })

        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault();
        
            let productId = retrieveProductID();
            let sizeChart = getMeasurementChart(productId);
        
            if (!sizeChart) {
                console.log("No measurement chart found for this product.");
                return;
            }
        
            // Get the selected measurement chart from sizeCharts
            const measurements = sizeCharts[sizeChart];
                
            const inputValue = parseFloat(document.getElementById('chestSize').value.replace(',', '.'));
            const roundUpCheckbox = document.getElementById('roundUpCheckbox').checked;
        
            const closestSize = calculateSize(inputValue, roundUpCheckbox, measurements);
        
            console.log(closestSize);
        
            const printResult = document.querySelector('#sizeResult');
            printResult.innerHTML = closestSize;
        
            clearInput();
        });

        function calculateSize(inputValue, roundUpCheckbox, measurements) {
            if (!measurements) {
                console.log("No measurement chart found.");
                return;
            }
        
            const cutoff = 5;
        
            const xsSizeMeasurement = measurements['XS']['A'];
            const largestSizeMeasurement = measurements['4XL']['A'];
        
            const xsCutoffPoint = xsSizeMeasurement - cutoff;
            const largestSizeCutoffPoint = largestSizeMeasurement + cutoff;
        
            if (inputValue <= xsCutoffPoint || inputValue >= largestSizeCutoffPoint) {
                return "Your size is outside our measurement chart. Please select the 'other size' below.";
            }
        
            let closestSize = '';
            let smallestDifference = Infinity;
        
            for (const size in measurements) {
                const measurementA = measurements[size]['A'];
                const difference = Math.abs(inputValue - measurementA);
        
                if (difference < smallestDifference) {
                    smallestDifference = difference;
                    closestSize = size;
                }
            }
        
            if (roundUpCheckbox && closestSize === 'XS' && inputValue < xsCutoffPoint) {
                return 'Your size is outside our measurement chart.';
            }
        
            if (roundUpCheckbox && closestSize !== '4XL') {
                const sizes = Object.keys(measurements);
                const currentIndex = sizes.indexOf(closestSize);
                const nextSize = sizes[currentIndex + 1];
                return nextSize ? nextSize : closestSize;
            }
        
            return closestSize;
        }  
        
        function clearInput() {
            document.getElementById('chestSize').value = "";
            document.getElementById('roundUpCheckbox').checked = false;
        
            hidePopUp();
        }

        // Modal functions 
        openSizer.addEventListener('click', showPopUp);
        span.addEventListener('click', hidePopUp);
    })
});