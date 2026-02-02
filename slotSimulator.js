// slotSimulator.js
// DAY 28 – Storage Layout Simulator
// Visualizes EVM storage slots, offsets, and variable packing
// Demonstrates multiple slots allocation

const typeSizes = {
  uint8: 1,
  uint16: 2,
  uint32: 4,
  uint64: 8,
  uint128: 16,
  uint256: 32
};

// List of variables to simulate
const variables = [
  { name: "u0", type: "uint8" },
  { name: "u1", type: "uint8" },
  { name: "u2", type: "uint8" },
  { name: "u3", type: "uint8" },
  { name: "u4", type: "uint16" },
  { name: "u5", type: "uint16" },
  { name: "u6", type: "uint128" },
  { name: "u7", type: "uint8" },
  { name: "u8", type: "uint128" },  // new slot expected
  { name: "u9", type: "uint256" }   // new slot expected
];

// Function to allocate slots and offsets
function allocateSlots(vars) {
  const slots = [];
  let currentSlot = { slotNumber: 0, sizeUsed: 0, vars: [] };

  for (const v of vars) {
    const size = typeSizes[v.type];

    // Check if variable fits in current slot
    if (currentSlot.sizeUsed + size > 32) {
      // Save current slot and start a new one
      slots.push(currentSlot);
      currentSlot = { slotNumber: currentSlot.slotNumber + 1, sizeUsed: 0, vars: [] };
    }

    // Add variable to current slot
    currentSlot.vars.push({
      name: v.name,
      type: v.type,
      offset: currentSlot.sizeUsed
    });

    currentSlot.sizeUsed += size;
  }

  // Push last slot if it has any variables
  if (currentSlot.vars.length > 0) {
    slots.push(currentSlot);
  }

  return slots;
}

// Run simulator and output layout
const slotLayout = allocateSlots(variables);
console.log(JSON.stringify(slotLayout, null, 2));
