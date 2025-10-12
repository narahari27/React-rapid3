const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());

// Mock data generator
const createMockMenu = (resId) => ({
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {},
      {},
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: resId,
              name: "Tasty Bites Restaurant",
              city: "Bangalore",
              areaName: "Koramangala",
              cuisines: ["North Indian", "Chinese", "South Indian", "Biryani"],
              cloudinaryImageId: "restaurant_image",
              avgRating: 4.3,
              costForTwoMessage: "₹400 for two",
              deliveryTime: 35,
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {},
                {},
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "101",
                              name: "Butter Chicken",
                              category: "Main Course",
                              price: 32000,
                              description:
                                "Creamy tomato-based curry with tender chicken",
                              imageId: "butter_chicken",
                              isVeg: 0,
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "102",
                              name: "Paneer Tikka Masala",
                              category: "Main Course",
                              price: 28000,
                              description:
                                "Cottage cheese in rich tomato gravy",
                              imageId: "paneer_tikka",
                              isVeg: 1,
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "103",
                              name: "Chicken Biryani",
                              category: "Rice",
                              price: 29000,
                              description:
                                "Aromatic basmati rice with spiced chicken",
                              imageId: "biryani",
                              isVeg: 0,
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Starters",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "201",
                              name: "Chicken 65",
                              category: "Starters",
                              price: 24000,
                              description: "Spicy fried chicken",
                              imageId: "chicken65",
                              isVeg: 0,
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "202",
                              name: "Paneer 65",
                              category: "Starters",
                              price: 22000,
                              description: "Crispy fried paneer",
                              imageId: "paneer65",
                              isVeg: 1,
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Breads",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "301",
                              name: "Butter Naan",
                              category: "Breads",
                              price: 6000,
                              description: "Soft bread with butter",
                              imageId: "naan",
                              isVeg: 1,
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "302",
                              name: "Garlic Naan",
                              category: "Breads",
                              price: 7000,
                              description: "Naan with garlic",
                              imageId: "garlic_naan",
                              isVeg: 1,
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
});

app.get("/api/menu/:resId", (req, res) => {
  try {
    const { resId } = req.params;
    console.log("📡 Request received for restaurant:", resId);

    // Return mock data immediately
    const mockData = createMockMenu(resId);
    console.log("✅ Sending mock menu data");
    res.json(mockData);
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({
      error: "Failed to fetch menu data",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log("📝 Using mock data for all requests");
});
