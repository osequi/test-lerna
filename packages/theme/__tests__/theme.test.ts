"use strict";

const theme = require("..");

describe("theme", () => {
  it("includes a typography entry", () => {
    expect(theme.typography).not.toBeNull();
  });
});
