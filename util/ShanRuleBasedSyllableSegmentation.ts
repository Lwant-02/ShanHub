export class ShanRuleBasedSyllableSegmentation {
  private static CONSONANT_COMBO = "မၼငပတၵၺဝ";
  private static CONSONANTS =
    "\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022";

  private static V1 = "\u1083\u102E\u1084";
  private static V2 = "\u1030";
  private static V3 = "\u1031";
  private static ARR_YAO = "\u1083";

  private static TONE_MARKS = "\u1087\u1088\u1038\u1037\u1089\u108a";
  private static ASAT = "\u103a";
  private static KAI_KHIN = "\u1086";
  private static EN_CHAR = "a-zA-Z0-9";
  private static OTHER_CHAR = "႐-႙၀-၉၊။!-/:-@\\[-`\\{-~\\s";

  public static segment(input: string): string {
    const rules: [string, string][] = [
      // Rule 0: Break consonant clusters
      [
        `([${this.CONSONANTS}])([${this.CONSONANTS}](?!${this.ASAT}))([${this.CONSONANTS}](?!${this.ASAT}))`,
        "$1 $2 $3",
      ],
      [
        `([${this.CONSONANTS}])([ျံုူိီွႂ])?([${this.CONSONANTS}])(?!${this.ASAT})`,
        "$1$2 $3",
      ],

      // Rule 1: Tone marks, English, or other symbols → break after
      [`([${this.TONE_MARKS}${this.EN_CHAR}${this.OTHER_CHAR}])`, "$1 "],

      // Rule 2: Asat, Kai Khin or V1, unless followed by tone → break
      [
        `([${this.ASAT}${this.KAI_KHIN}${this.V1}])(?![${this.TONE_MARKS}])`,
        "$1 ",
      ],

      // Rule 3: V2 (ူ), unless followed by consonant+asat or tone → break
      [
        `(${this.V2})(?!(?:[${this.CONSONANT_COMBO}][${this.ASAT}]|[${this.TONE_MARKS}]))`,
        "$1 ",
      ],

      // Rule 4: V3 (ေ), unless followed by arrYao or tone → break
      [`(${this.V3})(?!(${this.ARR_YAO}|[${this.TONE_MARKS}]))`, "$1 "],

      // Rule 5: Collapse multiple spaces
      [" +", " "],
    ];

    let output = input;
    for (const [pattern, replacement] of rules) {
      const regex = new RegExp(pattern, "g");
      output = output.replace(regex, replacement);
    }

    return output.trim();
  }

  public static segmentAsArray(input: string): string[] {
    return this.segment(input).split(" ");
  }
}
