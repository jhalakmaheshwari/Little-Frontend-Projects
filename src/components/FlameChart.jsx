const log = [
  {
    name: "A",
    duration: 1000,
    children: [
      { name: "AA", duration: 200 },
      { name: "AB", duration: 400 },
      {
        name: "AC",
        duration: 400,
        children: [
          {
            name: "ACA",
            duration: 300,
            children: [
              { name: "ACAA", duration: 100 },
              { name: "ACAB", duration: 200 }
            ]
          },
          { name: "ACB", duration: 100 }
        ]
      }
    ]
  }
];

// https://user-images.githubusercontent.com/5317799/117875057-957f1f80-b256-11eb-9715-2c77ccc1454b.png
