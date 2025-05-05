import {
  getCharacterById,
  listCharacters,
} from "../app/actions";


const mockCharacters = [
  {
    id: "1",
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    created: "2023-01-01",
    refId: "c1",
    origin: { name: "Earth", url: "earth-url" },
    location: { name: "Earth" },
    image: "rick.jpg",
  },
  {
    id: "2",
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    created: "2023-01-01",
    refId: "c2",
    origin: { name: "Earth", url: "earth-url" },
    location: { name: "Earth" },
    image: "morty.jpg",
  },
];

const searchMock = jest.fn().mockImplementation(() => ({
  [Symbol.asyncIterator]: async function* () {
    for (const character of mockCharacters) {
      yield character;
    }
  },
}));

const getMock = jest.fn();

jest.mock("harperdb", () => ({
  tables: {
    Character: {
      search: searchMock,
      get: getMock,
    },
  },
}));

describe("actions - listCharacters", () => {
  it("should return an array of CharacterType objects when characters exist in the database", async () => {
    const result = await listCharacters();

    expect(result).toHaveLength(2);
    expect(result[0].id).toBe("1");
    expect(result[0].name).toBe("Rick Sanchez");
    expect(result[1].id).toBe("2");
    expect(result[1].name).toBe("Morty Smith");
    expect(result).toEqual(mockCharacters);
  });

  it("should handle large datasets efficiently", async () => {
    const mockLargeDataset = Array.from({ length: 1000 }, (_, i) => ({
      id: `id-${i}`,
      name: `Character ${i}`,
      status: i % 2 === 0 ? "Alive" : "Dead",
      species: "Human",
      type: "",
      gender: i % 3 === 0 ? "Male" : "Female",
      created: new Date().toISOString(),
      refId: `ref-${i}`,
      origin: { name: "Earth", url: "earth-url" },
      location: { name: "Location" },
      image: `image-${i}.jpg`,
    }));

    searchMock.mockImplementationOnce(() => ({
      [Symbol.asyncIterator]: async function* () {
        for (const character of mockLargeDataset) {
          yield character;
        }
      },
    }));

    const startTime = performance.now();
    const result = await listCharacters();
    const endTime = performance.now();

    expect(result).toHaveLength(1000);
    expect(result[0].id).toBe("id-0");
    expect(result[999].id).toBe("id-999");
    expect(endTime - startTime).toBeLessThan(500);
  });
});

describe("actions - getCharacterById", () => {
  it("should return a character when a valid ID is provided", async () => {
    const mockCharacter = {
      id: "1",
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      type: "",
      created: "2023-01-01",
      refId: "ref123",
      image: "rick.jpg",
    };

    getMock.mockResolvedValueOnce(mockCharacter);

    const result = await getCharacterById("1");

    expect(getMock).toHaveBeenCalledWith({ id: "1" });
    expect(result).toEqual(mockCharacter);
  });

  it("should return null when character with given ID doesn't exist", async () => {
    getMock.mockResolvedValueOnce(null);

    const result = await getCharacterById("999");

    expect(getMock).toHaveBeenCalledWith({ id: "999" });
    expect(result).toBeNull();
  });
});