export class ShanSyllableBreaker {
  private static readonly TONE_MARKS = "\u1087\u1088\u1038\u1089\u1037\u108a";
  private static readonly ASAT = "\u103a";
  private static readonly CONSONANTS =
    "\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022";
  private static readonly ENG_CHAR = "a-zA-Z0-9";
  private static readonly OTHER_CHAR = "႐-႙၀-၉၊။!-/:-@\\[-`\\{-~\\s";

  public static syllableBreak(input: string): string {
    let text = this.purification(input);

    // Reorder vowel killers with asat
    text = text.replace(
      new RegExp(`([${this.TONE_MARKS}])(${this.ASAT})`, "g"),
      "$2$1"
    );

    // Add space after ံ if not followed by 6 tone marks
    text = text.replace(
      new RegExp(`(\u1036)(?![${this.TONE_MARKS}])`, "g"),
      "$1 "
    );

    // Break after tone marks or other characters
    text = text.replace(
      new RegExp(
        `([${this.TONE_MARKS}${this.ENG_CHAR}${this.OTHER_CHAR}])`,
        "g"
      ),
      "$1 "
    );

    // Break after consonant + vowel signs (various forms)
    text = text.replace(
      new RegExp(
        `([${this.CONSONANTS}])([\u1062\u103d\u1082\u1031\u103b])?(\u1083|\u102e|\u1082\u103a|\u1086|\u1084|\u1031)(?![\u1087\u1088\u1038\u1089\u1037\u108a\u1083\u1031\u1083])`,
        "g"
      ),
      "$1$2$3 "
    );

    // Break after consonant + medial + ိ (if not special cases)
    text = text.replace(
      new RegExp(
        `([${this.CONSONANTS}])([\u103b\u103c])?(\u102d)(?!(\u102f|\u1030|[${this.CONSONANTS}]${this.ASAT}))`,
        "g"
      ),
      "$1$2$3 "
    );

    // Break after consonant + medial ya (if not special cases)
    text = text.replace(
      new RegExp(
        `([${this.CONSONANTS}])(\u103b)(?!(\u102f|\u1030|\u1083|\u102d|\u102e|\u1031|\u1084|\u1035|\u1085|\u103d|\u1062|\u103a|[${this.CONSONANTS}]${this.ASAT}))`,
        "g"
      ),
      "$1$2 "
    );

    // Break after consonant + medial ya + e vowel
    text = text.replace(
      new RegExp(
        `([${this.CONSONANTS}])(\u103b\u1031\u1083)(?!(?:[${this.TONE_MARKS}]))`,
        "g"
      ),
      "$1$2 "
    );

    // Break after asat
    text = text.replace(
      new RegExp(`(${this.ASAT})(?![${this.TONE_MARKS}])`, "g"),
      "$1 "
    );

    // Break after consonant + ု / ူ (if not special cases)
    text = text.replace(
      new RegExp(
        `([${this.CONSONANTS}])([\u103b\u103c])?(\u1030|\u102f)(?!(?:[${this.TONE_MARKS}]|[${this.CONSONANTS}]${this.ASAT}))`,
        "g"
      ),
      "$1$2$3 "
    );

    // Break between 3 consecutive consonants
    text = text.replace(
      new RegExp(
        `([${this.CONSONANTS}])([${this.CONSONANTS}](?!${this.ASAT}))([${this.CONSONANTS}](?!${this.ASAT}))`,
        "g"
      ),
      "$1 $2 $3"
    );

    // Break between 2 consecutive consonants
    text = text.replace(
      new RegExp(
        `([${this.CONSONANTS}])([${this.CONSONANTS}](?!${this.ASAT}))`,
        "g"
      ),
      "$1 $2"
    );

    // Normalize spaces
    text = text.replace(/( )+/g, " ");

    // Remove "null" if it accidentally appears
    text = text.replace(/null/g, "");

    return text.trim();
  }

  /** Fixes incorrect Shan character sequences */
  private static purification(input: string): string {
    return (
      input
        // ် + ႂ → ႂ + ်
        .replace(/(\u103a)(\u1082)/g, "$2$1")
        // ု + ိ → ိ + ု
        .replace(/(\u102f)(\u102d)/g, "$2$1")
        // ူ + ိ → ိ + ူ
        .replace(/(\u1030)(\u102d)/g, "$2$1")
    );
  }
}
