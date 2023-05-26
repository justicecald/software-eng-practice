const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let testWord1;
  let testWord2;

  beforeEach(() => {
    testWord1 = new Word("hello");
    testWord2 = new Word("Beginning");
  });

  describe("Word constructor function", function () {

    it('should have a "word" property', function () {
      expect(testWord1).to.exist;
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(testWord1.word).to.equal("hello");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(testWord1.removeVowels()).to.equal("hll");
      expect(testWord2.removeVowels()).to.equal("Bgnnng");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(testWord1.removeConsonants()).to.equal("eo");
      expect(testWord2.removeConsonants()).to.equal("eii");
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(testWord1.pigLatin()).to.equal("ellohay");
      expect(testWord2.pigLatin()).to.equal("eginningBay");
    });
  });
});