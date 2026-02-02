# EVM Storage Simulator

A JavaScript simulator to visualize **EVM storage slots, offsets, and variable packing**.  
Educational purpose for learning Solidity **storage layout**.

---

## Features

- Allocates variables into **32-byte EVM slots**
- Calculates **offsets** for each variable
- Supports multiple variable types: `uint8`, `uint16`, `uint128`, `uint256`
- Demonstrates **slot packing** and leftover space
- Visualizes **multiple slots** for clarity

---

## How it works

1. Define your variables in `slotSimulator.js` with name and type.
2. Run the simulator:

```bash
node slotSimulator.js
Output shows:

slotNumber – which slot the variable is in

sizeUsed – how many bytes are used in the slot

vars – array of variables with their name, type, and offset

Example Output
json
Copy code
[
  {
    "slotNumber": 0,
    "sizeUsed": 25,
    "vars": [
      { "name": "u0", "type": "uint8", "offset": 0 },
      { "name": "u1", "type": "uint8", "offset": 1 },
      { "name": "u2", "type": "uint8", "offset": 2 },
      { "name": "u3", "type": "uint8", "offset": 3 },
      { "name": "u4", "type": "uint16", "offset": 4 },
      { "name": "u5", "type": "uint16", "offset": 6 },
      { "name": "u6", "type": "uint128", "offset": 8 },
      { "name": "u7", "type": "uint8", "offset": 24 }
    ]
  },
  {
    "slotNumber": 1,
    "sizeUsed": 16,
    "vars": [
      { "name": "u8", "type": "uint128", "offset": 0 }
    ]
  },
  {
    "slotNumber": 2,
    "sizeUsed": 32,
    "vars": [
      { "name": "u9", "type": "uint256", "offset": 0 }
    ]
  }
]
Usage Notes
Each slot = 32 bytes

Offset shows where the variable starts inside the slot

Small types (uint8, uint16) can be packed into a single slot

Large types (uint128, uint256) usually occupy a full slot

Remaining space in a slot is wasted if no other variable fits

License
This project is for educational purposes.