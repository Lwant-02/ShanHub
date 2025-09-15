import { ShanSyllableBreaker } from "./ShanSyllableBreaker";

export class ShanTranslit {
  /**
   * Converts Shan Tai script to English romanization with tone marks
   */
  public static taiToEng(input: string): string {
    let output = ShanSyllableBreaker.syllableBreak(input);

    // "ၵ" "ၵျ" "တြ" ႁႂ်ႈပဵတ် ka kya tra
    output = output.replace(
      /^([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022])([\u103b\u103c])?$/,
      "$1$2a"
    );

    // Without arrpot, arr yau, tang, tang sung, tit nin, tit sung, a sai, a tang, e sai, e tang, kwai, hwai, tay tay tin,
    output = output.replace(
      /(\u0020)([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022\u103b\u103c])([\u103b\u103c])?(?![\u1062\u1083\u102d\u102e\u102f\u1030\u1031\u1035\u1084\u1085\u1082\u103d\u1036\u1086\u101d\u107a\u1075\u1010\u1015\u1004\u1019\u107c\u103b\u103c])/g,
      "$1$2$3a"
    );
    output = output.replace(
      /([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022\u103b\u103c])([\u103b\u103c])?(\u0020)/g,
      "$1$2a$3"
    );
    output = output.replace(
      /(\u0020)([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022\u103b\u103c])([\u103b\u103c])?(\u0020)/g,
      "$1$2$3a$4"
    );

    // ၵႆ ပိၼ်ႇပဵၼ် ၵၺ်
    output = output.replace(/\u1086/g, "\u107a\u103a");

    // ဢပ် - ဢaပ်
    output = output.replace(
      /([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022])([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022])(\u103a)/g,
      "$1a\u030c$2$3"
    );

    // o - ဢူဝ်
    output = output.replace(/([^\u102d])\u1030\u101d\u103a/g, "$1o\u030c");
    // ဢူမ် ၊ ဢိူမ် ( ၵူ becomes ku but ၵူမ် must become kom )
    output = output.replace(
      /([^\u102d])(\u1030)([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022])(\u103a)/g,
      "$1o\u030c$3$4"
    );
    // Omit - လိုဝ် ၊ ၵိူဝ်
    output = output.replace(/(\u102d\u102f|\u1030)\u101d\u103a/g, "$1");

    // Shan Consonants

    // k - ၵ
    output = output.replace(/\u1075\u103a?/g, "k");
    // kh - ၶ
    output = output.replace(/\u1076\u103a?/g, "kh");
    // ng - င
    output = output.replace(/\u1004\u103a?/g, "ng");
    // ts - ၸ
    output = output.replace(/\u1078\u103a?/g, "j");
    // s - သ
    output = output.replace(/\u101e\u103a?/g, "s");
    // i - ၵႆ ၊ ၵၺ်
    output = output.replace(/\u1086|\u107a\u103a/g, "i");
    // ny - ၺ
    output = output.replace(/\u107a/g, "ny");
    // t - တ
    output = output.replace(/\u1010\u103a?/g, "t");
    // th - ထ
    output = output.replace(/\u1011\u103a?/g, "th");
    // n - ၼ
    output = output.replace(/\u107c\u103a?/g, "n");
    // p - ပ
    output = output.replace(/\u1015\u103a?/g, "p");
    // ph - ၽ
    output = output.replace(/\u107d\u103a?/g, "ph");
    // f - ၾ
    output = output.replace(/\u107e\u103a?/g, "f");
    // m - မ
    output = output.replace(/\u1019\u103a?/g, "m");
    // y - ယ
    output = output.replace(/\u101a\u103a?/g, "y");
    // r - ရ
    output = output.replace(/\u101b\u103a?/g, "r");
    // r - ြ
    output = output.replace(/\u103c/g, "r");
    // l - လ
    output = output.replace(/\u101c\u103a?/g, "l");
    // eao - ဢႅဝ်
    output = output.replace(/\u1085\u101d\u103a/g, "e\u030cao");
    // ဝ - ဝ်
    output = output.replace(/\u101d\u103a/g, "o");
    // w - ဝ
    output = output.replace(/\u101d/g, "w");
    // h - ႁ
    output = output.replace(/\u1081\u103a?/g, "h");
    // ' - ဢ
    output = output.replace(/\u1022/g, "ʼ");
    // y - ျ
    output = output.replace(/\u103b/g, "y");
    //
    output = output.replace(/\u1036/g, "a\u030cm");

    // End Tai Consonants

    // au - ဢေႃ ၊ ဢွ
    output = output.replace(/(\u1031\u1083)|\u103d/g, "a\u030cu");
    // ue - ဢို
    output = output.replace(/\u102d\u102f/g, "u\u030ce");
    // oe - ဢိူ
    output = output.replace(/\u102d\u1030/g, "o\u030ce");
    // aa - ဢႃ ၊ ဢၢ
    output = output.replace(/\u1083|\u1062/g, "a\u030ca");
    // i - ဢိ
    output = output.replace(/\u102d/g, "i\u030c");
    // ii - ဢီ
    output = output.replace(/\u102e/g, "i\u030ci");
    // ae - ဢေ ၊ ဢဵ
    output = output.replace(/\u1031|\u1035/g, "a\u030ce");
    // e - ဢႄ ၊ ဢႅ
    output = output.replace(/\u1084|\u1085/g, "e\u030c");
    // u - ဢု
    output = output.replace(/\u102f/g, "u\u030c");
    // uu - ဢူ
    output = output.replace(/\u1030/g, "u\u030c");
    // aue - ဢႂ်
    output = output.replace(/(\u1082\u103a)|(\u103a\u1082)/g, "a\u030cue");
    // w - ဢႂ
    output = output.replace(/\u1082/g, "w");

    /**
     * တႃႇတူၼ်းသဵင် 6 တူၼ်း
     * ယၵ်း ၊ ယၵ်းၸမ်ႈ ၊ ၸမ်ႈၼႃႈ ၊ ၸမ်ႈတႂ်ႈ ၊ ယၵ်းၶိုၼ်ႈ
     */
    // ယၵ်း
    output = output.replace(
      /([khgjzsytnpfmrlwaʼ])([aeiou])(\u030c)([a-z]{0,3})\u1087/g,
      "$1$2\u0300$4"
    );
    // ယၵ်းၸမ်ႈ
    output = output.replace(
      /([khgjzsytnpfmrlwaʼ])([aeiou])(\u030c)([a-z]{0,3})\u1088/g,
      "$1$2\u0304$4"
    );
    // ၸမ်ႈၼႃႈ
    output = output.replace(
      /([khgjzsytnpfmrlwaʼ])([aeiou])(\u030c)([a-z]{0,3})\u1038/g,
      "$1$2\u0301$4"
    );
    // ၸမ်ႈတႂ်ႈ
    output = output.replace(
      /([khgjzsytnpfmrlwaʼ])([aeiou])(\u030c)([a-z]{0,3})[\u1089\u1037]/g,
      "$1$2\u0302\u0330$4"
    );
    // ယၵ်းၶိုၼ်ႈ
    output = output.replace(
      /([khgjzsytnpfmrlwaʼ])([aeiou])(\u030c)([a-z]{0,3})\u108a/g,
      "$1$2\u1dc8$4"
    );

    // Convert - ʼa => a
    output = output.replace(/([ .?,!])?ʼa([ .?,!])/g, "$1a$2");

    // ။ -> .
    output = output.replace(/\u104b/g, ".");
    // ၊ -> ,
    output = output.replace(/\u104a/g, ",");

    return output.trim();
  }

  /**
   * Converts Shan Tai script to English romanization without tone marks
   */
  public static taiToEngWithoutTone(input: string): string {
    let output = ShanSyllableBreaker.syllableBreak(input);

    // "ၵ" "ၵျ" "တြ" ႁႂ်ႈပဵတ် ka kya tra
    output = output.replace(
      /^([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022])([\u103b\u103c])?$/,
      "$1$2a"
    );

    // Without arrpot, arr yau, tang, tang sung, tit nin, tit sung, a sai, a tang, e sai, e tang, kwai, hwai, tay tay tin,
    output = output.replace(
      /(\u0020)([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022\u103b\u103c])([\u103b\u103c])?(?![\u1062\u1083\u102d\u102e\u102f\u1030\u1031\u1035\u1084\u1085\u1082\u103d\u1036\u1086\u101d\u107a\u1075\u1010\u1015\u1004\u1019\u107c\u103b\u103c])/g,
      "$1$2$3a"
    );
    output = output.replace(
      /([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022\u103b\u103c])([\u103b\u103c])?(\u0020)/g,
      "$1$2a$3"
    );
    output = output.replace(
      /(\u0020)([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022\u103b\u103c])([\u103b\u103c])?(\u0020)/g,
      "$1$2$3a$4"
    );

    // ၵႆ ပိၼ်ႇပဵၼ် ၵၺ်
    output = output.replace(/\u1086/g, "\u107a\u103a");

    // ဢပ် - ဢaပ်
    output = output.replace(
      /([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022])([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022])(\u103a)/g,
      "$1a\u030c$2$3"
    );

    // o - ဢူဝ်
    output = output.replace(/([^\u102d])\u1030\u101d\u103a/g, "$1o\u030c");
    // ဢူမ် ၊ ဢိူမ် ( ၵူ becomes ku but ၵူမ် must become kom )
    output = output.replace(
      /([^\u102d])(\u1030)([\u1075-\u1081\u1004\u101e\u1010\u1011\u1015\u1019\u101a\u101b\u101c\u101d\u1022])(\u103a)/g,
      "$1o\u030c$3$4"
    );
    // Omit - လိုဝ် ၊ ၵိူဝ်
    output = output.replace(/(\u102d\u102f|\u1030)\u101d\u103a/g, "$1");

    // Shan Consonants

    // k - ၵ
    output = output.replace(/\u1075\u103a?/g, "k");
    // kh - ၶ
    output = output.replace(/\u1076\u103a?/g, "kh");
    // ng - င
    output = output.replace(/\u1004\u103a?/g, "ng");
    // ts - ၸ
    output = output.replace(/\u1078\u103a?/g, "j");
    // s - သ
    output = output.replace(/\u101e\u103a?/g, "s");
    // i - ၵႆ ၊ ၵၺ်
    output = output.replace(/\u1086|\u107a\u103a/g, "i");
    // ny - ၺ
    output = output.replace(/\u107a/g, "ny");
    // t - တ
    output = output.replace(/\u1010\u103a?/g, "t");
    // th - ထ
    output = output.replace(/\u1011\u103a?/g, "th");
    // n - ၼ
    output = output.replace(/\u107c\u103a?/g, "n");
    // p - ပ
    output = output.replace(/\u1015\u103a?/g, "p");
    // ph - ၽ
    output = output.replace(/\u107d\u103a?/g, "ph");
    // f - ၾ
    output = output.replace(/\u107e\u103a?/g, "f");
    // m - မ
    output = output.replace(/\u1019\u103a?/g, "m");
    // y - ယ
    output = output.replace(/\u101a\u103a?/g, "y");
    // r - ရ
    output = output.replace(/\u101b\u103a?/g, "r");
    // r - ြ
    output = output.replace(/\u103c/g, "r");
    // l - လ
    output = output.replace(/\u101c\u103a?/g, "l");
    // eao - ဢႅဝ်
    output = output.replace(/\u1085\u101d\u103a/g, "e\u030cao");
    // ဝ - ဝ်
    output = output.replace(/\u101d\u103a/g, "o");
    // w - ဝ
    output = output.replace(/\u101d/g, "w");
    // h - ႁ
    output = output.replace(/\u1081\u103a?/g, "h");
    // ' - ဢ
    output = output.replace(/\u1022/g, "ʼ");
    // y - ျ
    output = output.replace(/\u103b/g, "y");
    //
    output = output.replace(/\u1036/g, "a\u030cm");

    // End Tai Consonants

    // au - ဢေႃ ၊ ဢွ
    output = output.replace(/(\u1031\u1083)|\u103d/g, "a\u030cu");
    // ue - ဢို
    output = output.replace(/\u102d\u102f/g, "u\u030ce");
    // oe - ဢိူ
    output = output.replace(/\u102d\u1030/g, "o\u030ce");
    // aa - ဢႃ ၊ ဢၢ
    output = output.replace(/\u1083|\u1062/g, "a\u030ca");
    // i - ဢိ
    output = output.replace(/\u102d/g, "i\u030c");
    // ii - ဢီ
    output = output.replace(/\u102e/g, "i\u030ci");
    // ae - ဢေ ၊ ဢဵ
    output = output.replace(/\u1031|\u1035/g, "a\u030ce");
    // e - ဢႄ ၊ ဢႅ
    output = output.replace(/\u1084|\u1085/g, "e\u030c");
    // u - ဢု
    output = output.replace(/\u102f/g, "u\u030c");
    // uu - ဢူ
    output = output.replace(/\u1030/g, "u\u030c");
    // aue - ဢႂ်
    output = output.replace(/(\u1082\u103a)|(\u103a\u1082)/g, "a\u030cue");
    // w - ဢႂ
    output = output.replace(/\u1082/g, "w");

    /**
     * တႃႇတူၼ်းသဵင် 6 တူၼ်း
     * ယၵ်း ၊ ယၵ်းၸမ်ႈ ၊ ၸမ်ႈၼႃႈ ၊ ၸမ်ႈတႂ်ႈ ၊ ယၵ်းၶိုၼ်ႈ
     */
    // ယၵ်း
    output = output.replace(
      /([khgjzsytnpfmrlwaʼ])([aeiou])(\u030c)([a-z]{0,3})\u1087/g,
      "$1$2$4"
    );
    // ယၵ်းၸမ်ႈ
    output = output.replace(
      /([khgjzsytnpfmrlwaʼ])([aeiou])(\u030c)([a-z]{0,3})\u1088/g,
      "$1$2$4"
    );
    // ၸမ်ႈၼႃႈ
    output = output.replace(
      /([khgjzsytnpfmrlwaʼ])([aeiou])(\u030c)([a-z]{0,3})\u1038/g,
      "$1$2$4"
    );
    // ၸမ်ႈတႂ်ႈ
    output = output.replace(
      /([khgjzsytnpfmrlwaʼ])([aeiou])(\u030c)([a-z]{0,3})[\u1089\u1037]/g,
      "$1$2$4"
    );
    // ယၵ်းၶိုၼ်ႈ
    output = output.replace(
      /([khgjzsytnpfmrlwaʼ])([aeiou])(\u030c)([a-z]{0,3})\u108a/g,
      "$1$2$4"
    );

    // ပဝ်ႇ
    output = output.replace(/\u030c/g, "");

    // Convert - ʼa => a
    output = output.replace(/([ .?,!])?ʼa([ .?,!])/g, "$1a$2");

    // ။ -> .
    output = output.replace(/\u104b/g, ".");
    // ၊ -> ,
    output = output.replace(/\u104a/g, ",");

    return output.trim();
  }

  /**
   * Converts English romanization to Shan Tai script
   */
  public static engToTai(input: string): string {
    let output = input.toLowerCase();

    const checkIsToneMarkIncludingOrNot =
      /^(?!.*(?:\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8))[\s\S]*$/;
    if (checkIsToneMarkIncludingOrNot.test(input)) {
      output = output.replace(
        /(k|kh|ng|j|z|j|s|ny|t|th|n|p|ph|f|m|y|r|l|w|h|ʼ)([aeiou])/g,
        "$1$2\u030c"
      );
    }

    // y - ပျ
    output = output.replace(
      /^(k|kh|ng|j|s|ny|t|th|n|p|ph|f|m|y|r|l|w|h|ʼ)y(a)$/,
      "$1\u103b"
    );
    // r - တြ
    output = output.replace(
      /^(k|kh|ng|j|s|ny|t|th|n|p|ph|f|m|y|r|l|w|h|ʼ)r(a)$/,
      "$1\u103c"
    );
    // a - ဢ
    output = output.replace(/^a$/, "ʼ");
    output = output.replace(
      /^(k|kh|ng|j|s|ny|t|th|n|p|ph|f|m|y|r|l|w|h|ʼ)?a$/,
      "$1"
    );

    // r - တြ
    output = output.replace(
      /(k|kh|ng|j|s|t|th|p|ph|f|m|y|r|l|w|h)r/g,
      "$1\u103c"
    );
    // y - ပျ
    output = output.replace(
      /(k|kh|ng|j|s|t|th|p|ph|f|m|y|r|l|w|h)y/g,
      "$1\u103b"
    );

    // \u030c , \u0300 , \u0304 , \u0301 , \u0302\u0330 , \u1dc8
    // ဢႃ
    output = output.replace(
      /a(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)a/g,
      "$1\u1083"
    );
    // ဢီ
    output = output.replace(
      /i(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)i/g,
      "$1\u102e"
    );
    output = output.replace(
      /i(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)/g,
      "$1\u102d"
    );
    // ဢႅဝ်
    output = output.replace(
      /e(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)a/g,
      "$1\u1085"
    );
    // ဢႄ
    output = output.replace(
      /e(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)/g,
      "$1\u1084"
    );
    // ဢေ
    output = output.replace(
      /a(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)e/g,
      "$1\u1031"
    );
    // ဢိုၼ်
    output = output.replace(
      /u(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)e(k|kh|ng|j|s|ny|t|th|n|p|ph|f|m|y|r|l|w|h|i|ʼ)/g,
      "$1ို$2"
    );

    // ဢိုဝ်
    output = output.replace(
      /u(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)e/g,
      "$1ိုဝ"
    );

    // ဢုၼ်
    output = output.replace(
      /u(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)(k|kh|ng|j|s|ny|t|th|n|p|ph|f|m|y|r|l|w|h|i|ʼ)/g,
      "$1ု$2"
    );
    // ဢူ
    output = output.replace(
      /u(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)/g,
      "$1\u1030"
    );
    // ဢိူၼ်
    output = output.replace(
      /o(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)e(k|kh|ng|j|s|ny|t|th|n|p|ph|f|m|y|r|l|w|h|i|ʼ)/g,
      "$1ိူ$2"
    );

    // ဢိူဝ်
    output = output.replace(
      /o(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)e/g,
      "$1ိူဝ"
    );
    // ဢူၼ်
    output = output.replace(
      /o(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)(k|kh|ng|j|s|ny|t|th|n|p|ph|f|m|y|r|l|w|h|i|ʼ)/g,
      "$1ူ$2"
    );
    // ဢူဝ်
    output = output.replace(
      /o(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)/g,
      "$1ူဝ"
    );
    // ဢွမ်
    output = output.replace(
      /a(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)u(k|kh|ng|j|s|ny|t|th|n|p|ph|f|m|y|r|l|w|h|i|ʼ)/g,
      "$1\u103d$2"
    );

    // ဢႂ်
    output = output.replace(
      /a(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)ue/g,
      "$1ႂ်"
    );

    // ဢေႃ
    output = output.replace(
      /a(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)u/g,
      "$1ေႃ"
    );

    // kh - ၶ
    output = output.replace(/kh/g, "ၶ");
    // ng - င
    output = output.replace(/ng/g, "င");
    // th - ထ
    output = output.replace(/th/g, "ထ");
    // ny - ၺ
    output = output.replace(/ny|i/g, "ၺ");
    // ts - ၸ
    output = output.replace(/ts|j|z/g, "ၸ");
    // ph - ၽ
    output = output.replace(/ph/g, "ၽ");
    // k - ၵ
    output = output.replace(/k/g, "ၵ");
    // s - သ
    output = output.replace(/s/g, "သ");
    // t - တ
    output = output.replace(/t/g, "တ");
    // n - ၼ
    output = output.replace(/n/g, "ၼ");
    // p - ပ
    output = output.replace(/p/g, "ပ");
    // f - ၾ
    output = output.replace(/f/g, "ၾ");
    // m - မ
    output = output.replace(/m/g, "မ");
    // y - ယ
    output = output.replace(/y/g, "ယ");
    // r - ရ
    output = output.replace(/r/g, "ရ");
    // l - လ
    output = output.replace(/l/g, "လ");
    // h - ႁ
    output = output.replace(/h/g, "ႁ");

    // ' - ဢ
    output = output.replace(/ʼ/g, "ဢ");

    // kwam -> ၵႂမ်
    output = output.replace(/([က-အၵ-ႁဢ])w/g, "$1\u1082");
    // wam -> ဝမ်
    output = output.replace(/w|o/g, "ဝ");

    // \u030c , \u0300 , \u0304 , \u0301 , \u0302\u0330 , \u1dc8
    output = output.replace(
      /(\u030c|\u0300|\u0304|\u0301|\u0302\u0330|\u1dc8)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢ])/g,
      "$1$2$3\u103a"
    );

    // FINAL : Replace a with blank
    output = output.replace(/a/g, "");
    // ပဝ်ႇ
    output = output.replace(
      /(\u030c)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢႂ]\u103a)?/g,
      "$2$3"
    );
    // ယၵ်း
    output = output.replace(
      /(\u0300)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢႂ]\u103a)?/g,
      "$2$3\u1087"
    );
    // ယၵ်းၸမ်ႈ
    output = output.replace(
      /(\u0304)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢႂ]\u103a)?/g,
      "$2$3\u1088"
    );
    // ၸမ်ႈၼႃႈ
    output = output.replace(
      /(\u0301)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢႂ]\u103a)?/g,
      "$2$3\u1038"
    );
    // ၸမ်ႈတႂ်ႈ
    output = output.replace(
      /(\u0302\u0330)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢႂ]\u103a)?/g,
      "$2$3\u1089"
    );
    // ယၵ်းၶိုၼ်ႈ
    output = output.replace(
      /(\u1dc8)(ႃ|ီ|ႄ|ႅ|ေႃ|ေ|ူ|ု|ွ|ို|ိူ|ိ)?([က-အၵ-ႁဢႂ]\u103a)?/g,
      "$2$3\u108a"
    );

    output = output.replace(/ႃ([က-အၵ-ႁဢ])်/g, "ၢ$1်");
    output = output.replace(/ေ([က-အၵ-ႁဢ])်/g, "ဵ$1်");
    output = output.replace(/ႄ([က-အၵ-ႁဢ])်/g, "ႅ$1်");
    // ၶၺ် ၊ ၶၢၺ် ၊ ၵႂၢၺ် -> ၶႆ ၊ ၶၢႆ ၊ ၵႂၢႆ
    output = output.replace(
      /([က-အၵ-ႁဢ])(\u1082)?([ၢ\u103d])?ၺ်/g,
      "$1$2$3\u1086"
    );

    // full stop, comma, question mark
    // ။ -> .
    output = output.replace(/\./g, "\u104b");
    // ၊ -> ,
    output = output.replace(/,/g, "\u104a");

    return output;
  }
}
