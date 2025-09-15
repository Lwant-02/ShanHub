import { ShanRuleBasedSyllableSegmentation } from "./ShanRuleBasedSyllableSegmentation";

export class ShanWordSorting {
  // 1 to 19 -> Consonants
  private static consonants: string[] = [
    "ၵ",
    "ၶ",
    "င",
    "ၸ",
    "သ",
    "ၺ",
    "တ",
    "ထ",
    "ၼ",
    "ပ",
    "ၽ",
    "ၾ",
    "မ",
    "ယ",
    "ရ",
    "လ",
    "ဝ",
    "ႁ",
    "ဢ",
  ];

  private static asat = "\u103A";

  // Vowels
  private static vowels: string[] = [
    "ဢႃ",
    "ဢီ",
    "ဢေ",
    "ဢႄ",
    "ဢူ",
    "ဢူဝ်",
    "ဢေႃ",
    "ဢိုဝ်",
    "ဢိူဝ်",
    "ဢႂ်",
  ];

  private static tones: string[] = ["ႇ", "ႈ", "း", "ႉ", "့", "ႊ"];

  // Consonant combinations
  private static consonantsCombination: string[] = [
    "ၵ",
    "င",
    "ၺ",
    "တ",
    "ၼ",
    "ပ",
    "မ",
    "ဝ",
  ];

  // Devowelizers
  private static deVowelizers: string[] = [
    "",
    "\u1062",
    "\u102D",
    "\u1035",
    "\u1085",
    "\u102F",
    "\u1030",
    "\u103D",
    "\u102D\u102F",
    "\u102D\u1030",
  ];

  // Medials
  private static medians: string[] = ["ျ", "ြ", "ႂ်", "ႂ"];

  private static tones1: string[] = [];
  private static tones2: string[] = [];

  // -----------------------------
  // Main comparator methods
  // -----------------------------

  static compareWordString(w1: string, w2: string): string {
    const cmp = this.compareWordInt(w1, w2);
    if (cmp === 1) return w2;
    else if (cmp === -1) return w1;
    else return "Same Word";
  }

  static compareWordInt(w1: string, w2: string): number {
    if (w1 === w2) return 0;

    this.tones1 = [];
    this.tones2 = [];

    // Replace "ႆ" with "ၺ်"
    w1 = w1.replace(/ႆ/g, "ၺ်");
    w2 = w2.replace(/ႆ/g, "ၺ်");

    // TODO: replace with real syllable segmentation if available
    const ss1 = this.segmentAsArray(w1);
    const ss2 = this.segmentAsArray(w2);

    let maxWeight = 0;
    const lastIndex = Math.min(ss1.length, ss2.length);

    for (let i = 0; i < lastIndex; i++) {
      const s1 = ss1[i];
      const s2 = ss2[i];
      maxWeight = this.compareSyllable(s1, s2);
      if (maxWeight !== 0) break;
    }

    if (maxWeight === 0) {
      maxWeight = this.compareValue(w1.length, w2.length);
      if (maxWeight === 0) {
        maxWeight = this.compareTone();
        if (maxWeight === 0) {
          return this.compareValue(w1.length, w2.length);
        }
      }
    }

    return maxWeight;
  }

  private static compareTone(): number {
    let maxWeight = 0;
    if (this.tones1.length && this.tones2.length) {
      maxWeight = this.compareValue(this.tones1.length, this.tones2.length);
      if (maxWeight === 0) {
        for (let i = 0; i < this.tones1.length && i < this.tones2.length; i++) {
          const t1 = this.getToneInt(this.tones1[i]);
          const t2 = this.getToneInt(this.tones2[i]);
          maxWeight = this.compareValue(t1, t2);
          if (maxWeight !== 0) break;
        }
      }
    }
    return maxWeight;
  }

  private static compareSyllable(s1: string, s2: string): number {
    const c1 = this.getConsonantWeight(s1);
    const c2 = this.getConsonantWeight(s2);
    let result = this.compareValue(c1, c2);
    if (result === 0) {
      const m1 = this.getMedianWeight(s1);
      const m2 = this.getMedianWeight(s2);
      result = this.compareValue(m1, m2);
      if (result === 0) {
        result = this.compareVowelWeight(s1, s2);
        if (result === 0) {
          result = this.compareDevowelization(s1, s2);
        }
      }
    }
    return result;
  }

  private static compareDevowelization(s1: string, s2: string): number {
    const cc1 = this.getConsonantCombinationWeight(s1);
    const cc2 = this.getConsonantCombinationWeight(s2);
    let result = this.compareValue(cc1, cc2);
    if (result === 0) {
      const d1 = this.getDevowelizationWeight(s1);
      const d2 = this.getDevowelizationWeight(s2);
      result = this.compareValue(d1, d2);
      if (d1 !== -1 && d2 !== -1 && result === 0) {
        this.addTones(s1, s2);
      }
    }
    return result;
  }

  private static compareVowelWeight(s1: string, s2: string): number {
    const v1 = this.getVowelWeight(s1);
    const v2 = this.getVowelWeight(s2);
    let result = this.compareValue(v1, v2);
    if (v1 !== -1 && v2 !== -1 && result === 0) {
      this.addTones(s1, s2);
    }
    return result;
  }

  private static addTones(s1: string, s2: string) {
    const t1 = this.getToneWeight(s1);
    if (t1) this.tones1.push(t1);
    const t2 = this.getToneWeight(s2);
    if (t2) this.tones2.push(t2);
  }

  private static getToneWeight(s: string): string | null {
    return this.tones.find((tone) => s.includes(tone)) || null;
  }

  private static getToneInt(s: string): number {
    return this.tones.indexOf(s);
  }

  private static getMedianWeight(s: string): number {
    return this.medians.findIndex((median) => s.includes(median));
  }

  private static getVowelWeight(syllable: string): number {
    const u = "ူ";
    for (let i = this.vowels.length - 1; i >= 0; i--) {
      const vowel = this.vowels[i].substring(1);
      if (syllable.includes(vowel)) {
        if (vowel === u) {
          if (syllable.length <= 3) return i;
        } else return i;
      }
    }
    return -1;
  }

  private static getConsonantWeight(s: string): number {
    const c = s.charAt(0);
    return this.consonants.indexOf(c);
  }

  private static getConsonantCombinationWeight(s: string): number {
    for (let i = 0; i < this.consonantsCombination.length; i++) {
      const cc = this.consonantsCombination[i];
      if (s.includes(cc + this.asat)) return i;
    }
    return -1;
  }

  private static getDevowelizationWeight(s: string): number {
    for (let i = this.deVowelizers.length - 1; i >= 0; i--) {
      const dev = this.deVowelizers[i];
      if (dev && s.includes(dev)) return i;
    }
    return -1;
  }

  private static compareValue(v1: number, v2: number): number {
    if (v1 >= 0 && v2 >= 0) {
      if (v1 > v2) return 1;
      if (v2 > v1) return -1;
      return 0;
    } else if (v1 < 0 && v2 >= 0) {
      return 1;
    } else if (v2 < 0 && v1 >= 0) {
      return -1;
    } else return 0;
  }

  // -----------------------------
  // Helper for syllable segmentation
  // -----------------------------
  private static segmentAsArray(word: string): string[] {
    return ShanRuleBasedSyllableSegmentation.segmentAsArray(word);
  }

  // -----------------------------
  // For Array.sort()
  // -----------------------------
  static compare(o1: string, o2: string): number {
    return this.compareWordInt(o1, o2);
  }
}
