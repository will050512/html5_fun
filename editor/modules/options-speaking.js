var editorOptions = {
  speaking: {
    caption: "HTML5 Speaking",
	
    filenames: [
      "https://gsyan888.github.io/html5_fun/html5_speaking/questions-set-1.js"
    ],
	
    enableOpenInNewWindow: true,
	
    options: {
      "speechRecognitionLang": [
        "text",
        "語音辨識及語音合成的語言代碼",
        "(例: 英文 <span onclick=\"copyAndSelectToClipboard(this);\">en-US</span>  、中文 <span onclick=\"copyAndSelectToClipboard(this);\">zh-TW</span>  、日文 <span onclick=\"copyAndSelectToClipboard(this);\">ja-JP</span>  、韓文 <span onclick=\"copyAndSelectToClipboard(this);\">ko-KR</span> <a href=\"https: //cloud.google.com/speech-to-text/docs/languages\" target=\"_blank\">查代碼</a>"
      ],

      "helpDialogDescription": [
        "textarea",
        "遊戲說明文字"],

      "gameMode_1_Caption": [
        "text",
        "遊戲模式按鈕 1 上的文字"],

      "gameMode_2_Caption": [
        "text",
        "遊戲模式按鈕 2 上的文字"],

      "gameMode_3_Caption": [
        "text",
        "遊戲模式按鈕 3 上的文字"],

      "order_by_random": [
        "checkbox",
        "是否使用亂數抽題目",
        "勾選:以亂數抽題 &nbsp;&nbsp; 未勾選:依題庫順序",
        "啟用亂數抽題"],

      "ttsPlaybackRate": [
        "text",
        "語音播放的速度",
        "例如:1.0 正常, 0.75 較慢速, 0.5 慢速, 1.5 快速, 2.0 兩倍速<br />(可設定多個，播放時會依序使用；以逗號分隔)"],

      "pinyinConvertEnable": [
        "checkbox",
        "中文字是否先轉為拼音(無調號)再比對答案",
        "勾選:以拼音比對 &nbsp;&nbsp; 未勾選:以原文比對",
        "啟用轉為拼音"],
		
      "topTitle": [
        "text",
        "上方看板的標題字"],
		
      "questionLines": [
        "textarea",
        "題庫"]
    }
  }
};