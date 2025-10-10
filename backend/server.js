const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Mock data that matches Swiggy's structure
const createMockMenu = (resId) => ({
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {}, // Card 0 - empty
      {}, // Card 1 - empty
      {   // Card 2 - Restaurant Info
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: resId,
              name: "Pizza Hut",
              city: "Bangalore",
              areaName: "Koramangala",
              cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
              cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
              avgRating: 4.2,
              costForTwoMessage: "₹350 for two",
              deliveryTime: 30
            }
          }
        }
      },
      {}, // Card 3 - empty
      {   // Card 4 - Menu Items
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {}, // Empty card 0
                {}, // Empty card 1
                {   // Card 2 - First Category
                  card: {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "101",
                              name: "Margherita Pizza",
                              category: "Pizza",
                              price: 29900,
                              description: "Classic delight with 100% real mozzarella cheese",
                              imageId: "margherita_pizza",
                              isVeg: 1
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "102",
                              name: "Pepperoni Pizza",
                              category: "Pizza",
                              price: 39900,
                              description: "American classic! Loaded with pepperoni",
                              imageId: "pepperoni_pizza",
                              isVeg: 0
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "103",
                              name: "Farmhouse Pizza",
                              category: "Pizza",
                              price: 42900,
                              description: "Delightful combination of onion, capsicum, tomato & grilled mushroom",
                              imageId: "farmhouse_pizza",
                              isVeg: 1
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {   // Card 3 - Second Category
                  card: {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Sides & Beverages",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "201",
                              name: "Garlic Bread",
                              category: "Sides",
                              price: 12900,
                              description: "Freshly baked garlic bread with herbs",
                              imageId: "garlic_bread",
                              isVeg: 1
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "202",
                              name: "Chicken Wings",
                              category: "Sides",
                              price: 24900,
                              description: "Spicy chicken wings - 6 pieces",
                              imageId: "chicken_wings",
                              isVeg: 0
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "203",
                              name: "Pepsi (500ml)",
                              category: "Beverages",
                              price: 5700,
                              description: "Chilled Pepsi",
                              imageId: "pepsi",
                              isVeg: 1
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {   // Card 4 - Third Category
                  card: {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Desserts",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "301",
                              name: "Chocolate Lava Cake",
                              category: "Desserts",
                              price: 11900,
                              description: "Chocolate cake with molten chocolate inside",
                              imageId: "lava_cake",
                              isVeg: 1
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "302",
                              name: "Brownie with Ice Cream",
                              category: "Desserts",
                              price: 14900,
                              description: "Warm brownie with vanilla ice cream",
                              imageId: "brownie_icecream",
                              isVeg: 1
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ]
  }
});

app.get('/api/menu/:resId', async (req, res) => {
  try {
    const { resId } = req.params;
    console.log('📡 Fetching menu for restaurant:', resId);
    
    // Simulate network delay
    setTimeout(() => {
      const mockData = createMockMenu(resId);
      console.log('✅ Returning mock menu data');
      res.json(mockData);
    }, 800);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ 
      error: 'Failed to fetch menu data',
      details: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log('📝 Using mock data for menu');
});