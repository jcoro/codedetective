let initialState = {
    "defaults": [
        {
            "code": "// In how many days is the hack?\n// To find the solution, convert the given milliseconds\n// into days.\n\npublic class Challenge1 {\n\tpublic static void main(String[] args) {\n\t\tint millis = 432000000;\n\t\tint seconds = millis / 1000;\n\t\tint minutes = seconds / 60;\n\t\tint hours = minutes / 60;\n\t\tint days = hours / 24;\n\t\tSystem.out.println(days);\n\t}\n}",
            "code_hint": "// In how many days is the hack?\n// To find the solution, convert the given milliseconds\n// into days.\n\npublic class Challenge1 {\n\tpublic static void main(String[] args) {\n\t\tint millis = 432000000;\n\t\tint seconds = millis / ;\n\t\tint minutes = seconds / ;\n\t\tint hours = minutes / ;\n\t\tint days = hours / ;\n\t\tSystem.out.println(days);\n\t}\n}",
            "default_code": "// In how many days is the hack?\n// To find the solution, convert the given milliseconds\n// into days.\n\npublic class Challenge1 {\n\tpublic static void main(String[] args) {\n\n\t}\n}",
        },
        {
            "code": "// What is The Syndicate's bank account code?\n// To find the solution, find the sum of all\n// even numbers less than 12,386.\n\npublic class Challenge2 {\n\tpublic static void main(String[] args) {\n\t\tint num = 12386;\n\t\tint sum = 0;\n\t\tint count = 0;\n\t\twhile (count < num) {\n\t\t\tif (count % 2 == 0) {\n\t\t\t\tsum += count;\n\t\t\t}\n\t\t\tcount++;\n\t\t}\n\t\tSystem.out.println(sum);\n\t}\n}",
            "code_hint": "",
            "default_code": "",
        },
        {
            "code": "// The Syndicate is planning insider trading on an exchange in what city?\n// The message can be decoded by taking every\n// fifth letter of the document.\n\npublic class Challenge3 {\n\tpublic static void main(String[] args) {\n\t\tint num = 5;\n\t\tString input = \"GIWTWVQMBEPDQUXCZWUHJWZKAKBSIVFZKDEZRFTXIPEZOCNFYUSJXTRHQFNXKMDMCUIAMOTPUWNGLSUTTQNRAZVOYCPCGMTCPMQSYOMAXBBIJSBWFAETBOCTIPVUXASJZUCOTIPZXCUXBRSMAQOLOTXGJTXBVUMTIQAZHFYZKEPKBCXYYSBCXYXFHBQLZIUMOICQXTUABRGLGFQFRODAYQXTWLUBONCPOITHFAWWRERPCZWDJTQRXTIODOKGRHFAZOOXQQBPTWTNXRDKVZAMFLADHTQUE\";\n\t\tStringBuilder builder = new StringBuilder();\n\t\tfor (int i = num - 1; i < input.length(); i += num) {\n\t\t\tif (input.charAt(i) == 'X') {\n\t\t\t\tbuilder.append(' ');\n\t\t\t} else {\n\t\t\t\tbuilder.append(input.charAt(i));\n\t\t\t}\n\t\t}\n\t\tSystem.out.println( builder.toString() );\n\t}\n}",
            "code_hint": "",
            "default_code": "",
        },
        {
            "code": "// What is the financial publication The Syndicate is trying to hack?\n// To decode a 5-rail cipher like this, put the code in a matrix with a \n// length of 5 (5 columns). Then read the code from top to bottom, left to right\n\npublic class Challenge4 {\n\tpublic static void main(String[] args) {\n\t\tString cipherText = \"TLSHTIIIHA_AHNAMENTCEALE__OK_N_SPI__FCT.\";\n\t\tint columns = 5;\n\t\tint rows = cipherText.length() / columns;\n\t\tchar[][] matrix = new char[rows][columns];\n\t\tint textIdx = 0;\n\n\t\tfor (int col = 0; col < matrix[0].length; col++) {\n\t\t\tfor ( int row = 0; row < matrix.length; row++) {\n\t\t\t\tif (textIdx < cipherText.length()) {\n\t\t\t\t\tmatrix[row][col] = cipherText.charAt(textIdx);\n\t\t\t\t} else {\n\t\t\t\t\tmatrix[row][col] = '-';\n\t\t\t\t}\n\t\t\t\ttextIdx++;\n\t\t\t}\n\t\t}\n\n\t\tStringBuilder builder = new StringBuilder();\n\t\tfor (int row = 0; row < 8; row++) {\n\t\t\tfor (int col = 0; col < 5; col++) {\n\t\t\t\tbuilder.append(matrix[row][col]);\n\t\t\t}\n\t\t}\n\n\t\tSystem.out.println( builder.toString() );\n\t}\n}",
            "code_hint": "",
            "default_code": "",
        },
        {
            "code": "// To what country is the Kingpin planning to flee?\n// To find the solution, exclude all the letters in the\n// code that appear more than once.\n\npublic class Challenge5 {\n\tpublic static void main(String[] args) {\n\t\tString code = \"FJPSCYWJQXHGOUYIFVGHTXCJUYZQMPKEOFRLBXGJVANQOHMKBPXUDC\";\n        StringBuilder builder = new StringBuilder();\n\n\t\tfor (int i = 0; i < code.length(); i++){\n\t\t\tif( code.indexOf(code.charAt(i)) == code.lastIndexOf(code.charAt(i))) {\n\t\t\t\tbuilder.append( code.charAt(i) );\n\t\t\t}\n\t\t}\n\n\t\tSystem.out.println( builder.toString() );\n\t}\n}",
            "code_hint": "",
            "default_code": "",
        },
        {
            "code": "// ***** We got them!! *****",
            "code_hint": "// ***** We got them!! *****",
            "default_code": "// ***** We got them!! *****",
        },
    ],
    userSubmitted: ''
};
export default function (state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_CODE':
            return {
                ...state,
                userSubmitted: action.newCode,
            };
        default:
            return state;
    }
}